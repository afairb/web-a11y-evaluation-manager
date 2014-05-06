/* Include SDK libraries */
const timers = require("sdk/timers"),
      { indexedDB, IDBKeyRange } = require("sdk/indexed-db");

/* Shorthand variables */
var storage = require("sdk/simple-storage").storage;

/* Initialise local variables */
var Database = {},
    db;

// Open a connection to the database when this module is loaded
var openRequest = indexedDB.open("data", 8);
openRequest.onsuccess = function(e) {
    db = e.target.result;
}
openRequest.onerror = function(e) {
    console.log("Error establishing database connection: " + e.target.error.name);
}

// This event is run when the database is first opened (at the version number given)
openRequest.onupgradeneeded = function(e) {
    var thisDB = e.target.result;

    // If tables don't exist then we have to create them here
    if (!thisDB.objectStoreNames.contains("plans")) {
        function createStore(name, indexes) {
            var newStore = thisDB.createObjectStore(name, {keyPath: "id", autoIncrement: true});
            indexes = indexes || [];
            indexes.forEach(function(index) {
                newStore.createIndex(index, index, {unique: false});
            });
            // Also create a compound index on results so they can be queried by page and criterion at the same time
            if (name == "results") {
                newStore.createIndex("compound", ["page", "criterion"], {unique: false});
            }
        }

        createStore("plans");
        createStore("pages", ["plan", "pages_group"]);
        createStore("pages_groups", ["plan"]);
        createStore("criteria", ["plan", "criteria_group", "custom"]);
        createStore("criteria_groups", ["plan"]);
        createStore("results", ["plan", "page", "criterion"]);
    }
}

// Helper function to encapsulate most different types of foundation database requests
function commonRequest(action, store, param, index, successCallback, errorCallback) {
    if (db) {
        // Connect to the correct store of the database
        var dbStore = db.transaction(store, (action == "get" || action == "count" ? "readonly" : "readwrite")).objectStore(store);
        // If an index is specified then use it
        if (index) dbStore = dbStore.index(index);
        // Perform the request specified
        var request = dbStore[action](param);
        // If a successCallback is specified then attach it to the success event
        if (successCallback) request.onsuccess = function(event) {
            if (action == "add" || action == "put") {
                // "add" and "put" only return the ID on success, but we want to pass back the whole object
                param.id = event.target.result;
                successCallback(param);
            } else if (action == "delete") {
                successCallback(param);
            } else {
                successCallback(event.target.result);
            }
        };
        // If an errorCallback is specified then attach it to the error event
        if (errorCallback) request.onerror = function(event) {
            errorCallback(event.target.error);
        };
    }
}

// Add a single object
Database.add = function(store, data, successCallback, errorCallback) {
    commonRequest("add", store, sanitise(data), null, successCallback, errorCallback);
};

// Add multiple objects
Database.addMultiple = function(store, data, successCallback, errorCallback) {
    var allResults = [];
    var i = 0;
    function addNext() {
        if (i < data.length) {
            commonRequest("add", store, sanitise(data[i]), null, function success(result) {
                allResults.push(result);
                addNext();
            }, errorCallback);
            i++;
        } else {
            successCallback(allResults);
        }
    }
    addNext();
};

// Update a complete object
Database.update = function(store, data, successCallback, errorCallback) {
    commonRequest("put", store, sanitise(data), null, successCallback, errorCallback);
};

// Update a single field on an object
Database.updateField = function(store, key, field, newValue, successCallback, errorCallback) {
    // Get the full object first so that the other fields are not lost
    Database.getOne(store, key, function(data) {
        data[field] = newValue;
        Database.update(store, data, successCallback, errorCallback);
    }, errorCallback);
};

// Get a single object based on ID
Database.getOne = function(store, key, successCallback, errorCallback) {
    commonRequest("get", store, parseInt(key), null, successCallback, errorCallback);
}

// Get a single object where an indexed field equals a value
Database.getOneWhere = function(store, index, value, successCallback, errorCallback) {
    commonRequest("get", store, value, index, successCallback, errorCallback);
};

// Get all objects in a store
Database.getAll = function(store, successCallback, errorCallback) {
    Database.getAllWhere(store, null, null, successCallback, errorCallback);
}

// Get all objects in a store where an indexed field equals a value, using a cursor
Database.getAllWhere = function(store, index, value, successCallback, errorCallback) {
    if (db) {
        if (typeof value == "string") value = parseInt(value);
        var results = [];
        var transaction = db.transaction(store, "readonly");
        var dbStore = transaction.objectStore(store);
        if (index) {
            var cursor = dbStore.index(index).openCursor(IDBKeyRange.only(value));
        } else {
            var cursor = dbStore.openCursor(IDBKeyRange.lowerBound(0));
        }
        cursor.onsuccess = function(e) {
            var result = e.target.result;
            if (result) {
                results.push(result.value);
                result.continue();
            }
        };
        transaction.oncomplete = function() {
            if (successCallback) successCallback(results);
        };
        if (errorCallback) cursor.onerror = function(e) {
            errorCallback(e.target.error);
        };
    }
};

// Delete a single object based on ID
Database.delete = function(store, key, successCallback, errorCallback) {
    commonRequest("delete", store, parseInt(key), null, successCallback, errorCallback);
};

// Delete all objects where an indexed key equals a value
Database.deleteWhere = function(store, index, value, successCallback, errorCallback) {
    if (db) {
        var results = [];
        var transaction = db.transaction(store, "readwrite");
        var dbStore = transaction.objectStore(store);
        if (index) {
            var cursor = dbStore.index(index).openCursor(IDBKeyRange.only(value));
        } else {
            var cursor = dbStore.openCursor(IDBKeyRange.lowerBound(0));
        }
        cursor.onsuccess = function(e) {
            var result = e.target.result;
            if (result) {
                results.push(result.value.id);
                result.delete();
                result.continue();
            }
        };
        transaction.oncomplete = function() {
            if (successCallback) successCallback(results);
        };
        if (errorCallback) cursor.onerror = function(e) {
            errorCallback(e.target.error);
        };
    }
};

// Count the number of objects in a store
Database.count = function(store, successCallback, errorCallback) {
    commonRequest("count", store, null, null, successCallback, errorCallback);
};

// Get all page objects in a plan
Database.getPagesForPlan = function(planId, successCallback, errorCallback) {
    Database.getAllWhere("pages", "plan", planId, successCallback, errorCallback);
};

// Get all criterion objects in a plan
Database.getCriteriaForPlan = function(planId, successCallback, errorCallback) {
    Database.getAllWhere("criteria", "plan", planId, successCallback, errorCallback);
};

// Get all page groups in a plan and the pages contained in them
Database.getGroupedPagesForPlan = function(planId, successCallback, errorCallback) {
    Database.getAllWhere("pages_groups", "plan", planId, function(groups) {
        Database.getPagesForPlan(planId, function(pages) {
            var grouped = {};
            pages.forEach(function(page) {
                var groupId = page.pages_group;
                delete page.pages_group;
                delete page.plan;
                grouped[groupId] = grouped[groupId] || [];
                grouped[groupId].push(page);
            });
            groups.forEach(function(group, index, array) {
                array[index].items = grouped[group.id] || [];
            });
            successCallback(groups);
        }, errorCallback);
    }, errorCallback);
};

// Get all criterion groups in a plan and the criteria in them
Database.getGroupedCriteriaForPlan = function(planId, successCallback, errorCallback) {
    Database.getAllWhere("criteria_groups", "plan", planId, function(groups) {
        Database.getCriteriaForPlan(planId, function(criteria) {
            var grouped = {};
            criteria.forEach(function(criterion) {
                var groupId = criterion.criteria_group;
                delete criterion.criteria_group;
                delete criterion.plan;
                grouped[groupId] = grouped[groupId] || [];
                grouped[groupId].push(criterion);
            });
            groups.forEach(function(group, index, array) {
                array[index].items = grouped[group.id] || [];
            });
            successCallback(groups);
        }, errorCallback);
    }, errorCallback);
};

// Get a full plan based on ID, including all grouped pages and criteria
Database.getFullPlan = function(planId, successCallback, errorCallback) {
    var plan = {};
    Database.getOne("plans", planId, function(details) {
        plan.details = details;
        Database.getGroupedPagesForPlan(planId, function(pages) {
            plan.pages = pages;
            Database.getGroupedCriteriaForPlan(planId, function(criteria) {
                plan.criteria = criteria;
                successCallback(plan);
            }, errorCallback);
        }, errorCallback);
    }, errorCallback);
};

// Get a single group of criteria and all criteria in it
Database.getFullCriteriaGroup = function(groupId, successCallback, errorCallback) {
    Database.getOne("criteria_groups", groupId, function(group) {
        Database.getAllWhere("criteria", "criteria_group", groupId, function(criteria) {
            console.log(criteria);
            group.items = criteria;
            successCallback(group);
        }, errorCallback);
    }, errorCallback);
};

// Get a single page and all criteria to test on it, including the results of any tests
Database.getPageDetails = function(pageId, successCallback, errorCallback) {
    var page = {};
    Database.getOne("pages", pageId, function(details) {
        page.details = details;
        Database.getGroupedCriteriaForPlan(details.plan, function(criteria) {
            Database.getAllWhere("results", "page", pageId, function(results) {
                var resultsByCriteria = {};
                results.forEach(function(element) {
                    var criterion = element.criterion;
                    delete element.criterion;
                    resultsByCriteria[criterion] = element;
                });
                criteria.forEach(function(group) {
                    group.items.forEach(function(item, index, array) {
                        array[index].result = resultsByCriteria[item.id];
                    });
                });
                page.criteria = criteria;
                successCallback(page);
            }, errorCallback);
        }, errorCallback);
    }, errorCallback);
};

// Get a single criterion and all pages to test it on, including the results of any tests
Database.getCriterionDetails = function(criterionId, successCallback, errorCallback) {
    var criterion = {};
    Database.getOne("criteria", criterionId, function(details) {
        criterion.details = details;
        Database.getGroupedPagesForPlan(details.plan, function(pages) {
            Database.getAllWhere("results", "criterion", criterionId, function(results) {
                var resultsByPages = {};
                results.forEach(function(element) {
                    var page = element.page;
                    delete element.page;
                    resultsByPages[page] = element;
                });
                pages.forEach(function(group) {
                    group.items.forEach(function(item, index, array) {
                        array[index].result = resultsByPages[item.id];
                    });
                });
                criterion.pages = pages;
                successCallback(criterion);
            }, errorCallback);
        }, errorCallback);
    }, errorCallback);
};

// Get a single result for a particular page and criterion pair
Database.getResult = function(pageId, criterionId, successCallback, errorCallback) {
    Database.getOneWhere("results", "compound", [pageId, criterionId], successCallback, errorCallback);
};

// Get a single result based on ID, including the full page and criterion objects associated with it
Database.getResultById = function(resultId, successCallback, errorCallback) {
    Database.getOne("results", resultId, function(result) {
        Database.getOne("pages", result.page, function(page) {
            result.pageObj = page;
            Database.getOne("criteria", result.criterion, function(criterion) {
                result.criterionObj = criterion;
                successCallback(result);
            }, errorCallback);
        }, errorCallback);
    }, errorCallback);
};

// Get a single page based on ID, including the group it is in
Database.getPageById = function(pageId, successCallback, errorCallback) {
    Database.getOne("pages", pageId, function(result) {
        Database.getOne("pages_groups", result.pages_group, function(group) {
            result.groupName = group.name;
            successCallback(result);
        }, errorCallback);
    }, errorCallback);
};

// Get a single criterion based on ID, including the group it is in
Database.getCriterionById = function(criteriaId, successCallback, errorCallback) {
    Database.getOne("criteria", criteriaId, function(result) {
        Database.getOne("criteria_groups", result.criteria_group, function(group) {
            result.groupName = group.name;
            successCallback(result);
        }, errorCallback);
    }, errorCallback);
};

// Delete a page by ID, and all results concerning it
Database.deletePage = function(pageId, successCallback, errorCallback) {
    Database.deleteWhere("results", "page", pageId, function() {
        Database.delete("pages", pageId, successCallback, errorCallback);
    }, errorCallback);
};

// Delete a criterion by ID, and all results concerning it
Database.deleteCriterion = function(criterionId, successCallback, errorCallback) {
    Database.deleteWhere("results", "criterion", criterionId, function() {
        Database.delete("criteria", criterionId, successCallback, errorCallback);
    }, errorCallback);
};

// Delete a group of pages by ID, all pages in it, and all results concerning these pages
Database.deletePagesGroup = function(groupId, successCallback, errorCallback) {
    Database.getAllWhere("pages", "pages_group", groupId, function(pages) {
        pages.forEach(function(page) {
            Database.deletePage(page.id, null, errorCallback);
        });
        Database.delete("pages_groups", groupId, successCallback, errorCallback);
    }, errorCallback);
};

// Delete a group of criteria by ID, all criteria in it, and all results concerning these criteria
Database.deleteCriteriaGroup = function(groupId, successCallback, errorCallback) {
    Database.getAllWhere("criteria", "criteria_group", groupId, function(criteria) {
        criteria.forEach(function(criterion) {
            Database.deleteCriterion(criterion.id, null, errorCallback);
        });
        Database.delete("criteria_groups", groupId, successCallback, errorCallback);
    }, errorCallback);
};

// Delete an entire plan by ID and everything in it
Database.deletePlan = function(planId, successCallback, errorCallback) {
    Database.deleteWhere("results", "plan", planId, function() {
        Database.deleteWhere("criteria", "plan", planId, function() {
            Database.deleteWhere("pages", "plan", planId, function() {
                Database.deleteWhere("criteria_groups", "plan", planId, function() {
                    Database.deleteWhere("pages_groups", "plan", planId, function() {
                        Database.delete("plans", planId, successCallback, errorCallback);
                    }, errorCallback);
                }, errorCallback);
            }, errorCallback);
        }, errorCallback);
    }, errorCallback);
};

// Helper function to sanitise data, used before adding or updating full objects
function sanitise(data) {
    // If no added timestamp exists then add one with the current time
    if (!data.added) data.added = new Date();
    // Ensure all fields that represent IDs are stored as integers
    if (data.plan) data.plan = parseInt(data.plan);
    if (data.pages_group) data.pages_group = parseInt(data.pages_group);
    if (data.criteria_group) data.criteria_group = parseInt(data.criteria_group);
    if (data.page) data.page = parseInt(data.page);
    if (data.criterion) data.criterion = parseInt(data.criterion);
    return data;
}


/* Export the relevant functions defined above */
for (var func in Database) {
    exports[func] = Database[func];
}
