/* Include SDK libraries */
const self = require("sdk/self"),
      tabs = require("sdk/tabs"),
      pageMod = require("sdk/page-mod"),
      panel = require("sdk/panel");

/* Include subfiles */
const Database = require("database"),
      WCAG_1 = require("wcag-1").WCAG_1;
      WCAG_2 = require("wcag-2").WCAG_2;
      WebAIR = require("webair").WebAIR;

/* Shorthand variables */
var storage = require("sdk/simple-storage").storage,
    browserWindow = require("sdk/window/utils").getMostRecentBrowserWindow(),
    sidebarElement = browserWindow.document.getElementById("sidebar"),
    sidebarBox = browserWindow.document.getElementById("sidebar-box"),
    sidebarPort;

/* Check for first run */
if (typeof storage.first == "undefined") {
    tabs.open(self.data.url("firstrun.html"));
    storage.first = false;
}

/* Define and initialise sidebar */
var sidebarShown = false;
var sidebar = require("sdk/ui/sidebar").Sidebar({
    id: "web-a11y-sidebar",
    title: "Web Accessibility Evaluation Manager",
    url: self.data.url("sidebar.html"),
    onAttach: function(worker) {
        sidebarPort = worker.port;

        sidebarElement.setAttribute("style", "min-width:200px;max-width:500px;");

        storage.state = storage.state || {};
        worker.port.on("get_state", function() {
            worker.port.emit("send_state", storage.state);
            // Also initialise "current page" values
            worker.port.emit("data_tab_listener", {title: tabs.activeTab.title, url: tabs.activeTab.url});
        });
        worker.port.on("save_state", function(state) {
            storage.state = state;
        });

        worker.port.on("get_plans_all", function() {
            Database.getAll("plans", function success(data) {
                worker.port.emit("data_plans_all", data);
            });
        });
        worker.port.on("get_plan", function(id) {
            Database.getFullPlan(id, function success(data) {
                worker.port.emit("data_plan", data);
            });
        });
        worker.port.on("add_plan", function(name) {
            Database.add("plans", {name: name}, function success(data) {
                worker.port.emit("data_add_plan");
                worker.port.emit("data_plan", {
                    details: data,
                    pages: [],
                    criteria: []
                });
            });
        });
        worker.port.on("update_plan_name", function(data) {
            Database.updateField("plans", data.id, "name", data.newName, function success(result) {
                worker.port.emit("data_update_plan_name", result.name);
            });
        });
        worker.port.on("delete_plan", function(data) {
            Database.deletePlan(data, function success(result) {
                worker.port.emit("data_delete_plan");
            });
        });

        worker.port.on("get_pages_single_details", function(id) {
            Database.getPageDetails(id, function success(data) {
                worker.port.emit("data_pages_single_details", data);
            });
        });
        worker.port.on("get_criteria_single_details", function(id) {
            Database.getCriterionDetails(id, function success(data) {
                worker.port.emit("data_criteria_single_details", data);
            });
        });

        worker.port.on("update_group_name", function(data) {
            Database.updateField(data.groupType + "s", data.groupId, "name", data.newName, function success(result) {
                worker.port.emit("data_update_group_name", data);
            });
        });

        worker.port.on("add_page", function(data) {
            Database.add("pages", data.page, function success(result) {
                worker.port.emit("data_add_page", {page: result, request_from: data.request_from});
            });
        });
        worker.port.on("add_page_bg", function(data) {
            if (data.title != "" || data.url != "") {
                Database.add("pages", data, function success(result) {
                    worker.port.emit("data_add_page_bg", result);
                });
            }
        });
        worker.port.on("add_pages_group", function(data) {
            Database.add("pages_groups", data, function success(result) {
                worker.port.emit("data_add_pages_group", result);
            });
        });
        worker.port.on("add_pages_group_bg", function(data) {
            Database.add("pages_groups", data, function success(result) {
                worker.port.emit("data_add_pages_group_bg", result);
            });
        });


        tabs.on("ready", function(tab) {
            worker.port.emit("data_tab_listener", {title: tabs.activeTab.title, url: tabs.activeTab.url});
        });


        worker.port.on("get_previous_criteria_groups", function() {
            Database.getAll("plans", function success(plans) {
                var planNames = {};
                plans.forEach(function(plan) {
                    planNames[plan.id] = plan.name;
                });
                Database.getAll("criteria_groups", function success(groups) {
                    worker.port.emit("data_previous_criteria_groups", groups.map(function(group) {
                        group.planName = planNames[group.plan];
                        return group;
                    }));
                });
            });
        });

        worker.port.on("get_existing_custom_criteria", function() {
            Database.getAll("plans", function success(plans) {
                var planNames = {};
                plans.forEach(function(plan) {
                    planNames[plan.id] = plan.name;
                });
                Database.getAll("criteria_groups", function success(groups) {
                    var groupNames = {};
                    groups.forEach(function(group) {
                        groupNames[group.id] = group.name;
                    });
                    Database.getAllWhere("criteria", "custom", 1, function success(criteria) {
                        worker.port.emit("data_existing_custom_criteria", criteria.map(function(criterion) {
                            criterion.planName = planNames[criterion.plan];
                            criterion.groupName = groupNames[criterion.criteria_group];
                            return criterion;
                        }));
                    });
                });
            });
        });

        worker.port.on("add_criteria_group_wcag1", function(data) {
            data.groups.forEach(function(group, index) {
                if (group in WCAG_1) {
                    var criteria = WCAG_1[group].slice().filter(function(item) {
                        return item.level <= data.level;
                    });
                    if (criteria.length) {
                        Database.add("criteria_groups", {plan: data.plan, name: "WCAG 1.0 - Guideline " + group}, function success(newGroup) {
                            criteria = criteria.map(function(item) {
                                var criterion = {
                                    plan: data.plan,
                                    criteria_group: newGroup.id
                                };
                                // Perform a full copy
                                for (field in item) {
                                    criterion[field] = item[field];
                                }
                                criterion.description += " [Priority " + criterion.level + "]";
                                delete criterion.level;
                                return criterion;
                            });
                            Database.addMultiple("criteria", criteria, function success(result) {
                                newGroup.items = result;
                                worker.port.emit("data_add_criteria_group", newGroup);
                                if ((index + 1) == data.groups.length) worker.port.emit("data_add_criteria_group_wcag1");
                            });
                        });
                    } else {
                        if ((index + 1) == data.groups.length) worker.port.emit("data_add_criteria_group_wcag1");
                    }
                }
            });
        });
        worker.port.on("add_criteria_group_wcag2", function(data) {
            data.groups.forEach(function(group, index) {
                if (group in WCAG_2) {
                    var criteria = WCAG_2[group].slice().filter(function(item) {
                        return item.level <= data.level;
                    });
                    if (criteria.length) {
                        Database.add("criteria_groups", {plan: data.plan, name: "WCAG 2.0 - Guideline " + group}, function success(newGroup) {
                            criteria = criteria.map(function(item) {
                                var criterion = {
                                    plan: data.plan,
                                    criteria_group: newGroup.id
                                };
                                // Perform a full copy
                                for (field in item) {
                                    criterion[field] = item[field];
                                }
                                criterion.description += " (Level " + new Array(criterion.level + 1).join("A") + ")";
                                delete criterion.level;
                                return criterion;
                            });
                            Database.addMultiple("criteria", criteria, function success(result) {
                                newGroup.items = result;
                                worker.port.emit("data_add_criteria_group", newGroup);
                                if ((index + 1) == data.groups.length) worker.port.emit("data_add_criteria_group_wcag2");
                            });
                        });
                    } else {
                        if ((index + 1) == data.groups.length) worker.port.emit("data_add_criteria_group_wcag2");
                    }
                }
            });
        });
        worker.port.on("add_criteria_group_webair", function(data) {
            data.groups.forEach(function(group, index) {
                if (group in WebAIR) {
                    Database.add("criteria_groups", {plan: data.plan, name: "WebAIR - " + group}, function success(newGroup) {
                        var criteria = WebAIR[group].slice().map(function(item) {
                            var criterion = {
                                plan: data.plan,
                                criteria_group: newGroup.id
                            };
                            // Perform a full copy
                            for (field in item) {
                                criterion[field] = item[field];
                            }
                            return criterion;
                        });
                        Database.addMultiple("criteria", criteria, function success(result) {
                            newGroup.items = result;
                            worker.port.emit("data_add_criteria_group", newGroup);
                            if ((index + 1) == data.groups.length) worker.port.emit("data_add_criteria_group_webair");
                        });
                    });
                }
            });
        });
        worker.port.on("add_criteria_group_previous", function(data) {
            Database.getFullCriteriaGroup(data.group, function success(previousGroup) {
                Database.add("criteria_groups", {plan: data.plan, name: previousGroup.name}, function success(newGroup) {
                    var criteria = previousGroup.items.map(function(criterion) {
                        delete criterion.id;
                        delete criterion.added;
                        criterion.plan = data.plan;
                        criterion.criteria_group = newGroup.id;
                        return criterion;
                    });
                    Database.addMultiple("criteria", criteria, function success(result) {
                        newGroup.items = result;
                        worker.port.emit("data_add_criteria_group", newGroup);
                        worker.port.emit("data_add_criteria_group_previous");
                    });
                });
            });
        });
        worker.port.on("add_criteria_group_new", function(data) {
            Database.add("criteria_groups", data, function success(result) {
                worker.port.emit("data_add_criteria_group", result);
                worker.port.emit("data_add_criteria_group_new");
            });
        });
        worker.port.on("add_criteria_group_bg", function(data) {
            Database.add("criteria_groups", data, function success(result) {
                worker.port.emit("data_add_criteria_group_bg", result);
            });
        });

        worker.port.on("add_criteria_single_wcag1", function(data) {
            var criterion = {
                plan: data.plan,
                criteria_group: data.criteria_group
            };
            var split = data.wcag1Id.split("-");
            var item = WCAG_1[split[0]][parseInt(split[1])];
            // Perform a full copy
            for (field in item) {
                criterion[field] = item[field];
            }
            criterion.description += " [Priority " + criterion.level + "]";
            delete criterion.level;
            Database.add("criteria", criterion, function success(result) {
                worker.port.emit("data_add_criteria_single_wcag1", result);
            });
        });
        worker.port.on("add_criteria_single_wcag2", function(data) {
            var criterion = {
                plan: data.plan,
                criteria_group: data.criteria_group
            };
            var split = data.wcag2Id.split("-");
            var item = WCAG_2[split[0]][parseInt(split[1])];
            // Perform a full copy
            for (field in item) {
                criterion[field] = item[field];
            }
            criterion.description += " (Level " + new Array(criterion.level + 1).join("A") + ")";
            delete criterion.level;
            Database.add("criteria", criterion, function success(result) {
                worker.port.emit("data_add_criteria_single_wcag2", result);
            });
        });
        worker.port.on("add_criteria_single_webair", function(data) {
            var criterion = {
                plan: data.plan,
                criteria_group: data.criteria_group
            };
            var split = data.webairId.split("-");
            var item = WebAIR[split[0]][parseInt(split[1])];
            // Perform a full copy
            for (field in item) {
                criterion[field] = item[field];
            }
            Database.add("criteria", criterion, function success(result) {
                worker.port.emit("data_add_criteria_single_webair", result);
            });
        });
        worker.port.on("add_criteria_single_existing", function(data) {
            Database.getOne("criteria", data.id, function success(criterion) {
                delete criterion.id;
                delete criterion.added;
                criterion.plan = data.plan;
                criterion.criteria_group = data.criteria_group;
                Database.add("criteria", criterion, function success(result) {
                    worker.port.emit("data_add_criteria_single_existing", result);
                });
            });
        });
        worker.port.on("add_criteria_single_new", function(data) {
            Database.add("criteria", data, function success(result) {
                worker.port.emit("data_add_criteria_single_new", result);
            });
        });


        worker.port.on("delete_pages_single", function(data) {
            Database.deletePage(data, function success(result) {
                worker.port.emit("data_delete_pages_single", result);
            });
        });
        worker.port.on("delete_criteria_single", function(data) {
            Database.deleteCriterion(data, function success(result) {
                worker.port.emit("data_delete_criteria_single", result);
            });
        });

        worker.port.on("delete_pages_group", function(data) {
            Database.deletePagesGroup(data, function success(result) {
                worker.port.emit("data_delete_pages_group", result);
            });
        });
        worker.port.on("delete_criteria_group", function(data) {
            Database.deleteCriteriaGroup(data, function success(result) {
                worker.port.emit("data_delete_criteria_group", result);
            });
        });


        worker.port.on("get_details_criteria_single_details", function(id) {
            Database.getOne("criteria", id, function success(data) {
                worker.port.emit("data_details_criteria_single_details", data);
            });
        });


        worker.port.on("add_result", function(data) {
            Database.add("results", data, function success(result) {
                worker.port.emit("data_add_result", result);
            });
        });
        worker.port.on("update_result_status", function(data) {
            Database.updateField("results", data.id, "status", data.status, function success() {
                worker.port.emit("data_update_result_status", data);
            });
        });


        worker.port.on("show_result_panel", function(data) {
            loadResultPanel(data);
        });
        worker.port.on("show_result_panel_new", function(data) {
            data.status = "pending";
            Database.add("results", data, function success(result) {
                worker.port.emit("data_add_result", result);
                loadResultPanel(result.id);
            });
        });
        function loadResultPanel(resultId) {
            resultPanel.show();
            Database.getResultById(resultId, function(data) {
                resultPanel.port.emit("initialise", data);
            });
        }

        worker.port.on("show_pages_panel", function(pageId) {
            editPagePanel.show();
            Database.getPageById(pageId, function(data) {
                editPagePanel.port.emit("initialise", data);
            });
        });
        worker.port.on("show_criteria_panel", function(criterionId) {
            editCriterionPanel.show();
            Database.getCriterionById(criterionId, function(data) {
                editCriterionPanel.port.emit("initialise", data);
            });
        });


        worker.port.on("generate_report", function(data) {
            generateReport(data, function(report) {
                var reportInserter = pageMod.PageMod({
                    include: self.data.url("report.html"),
                    contentScript: "document.body.innerHTML = '" + report.replace(/'/g, "\\'") + "';",
                    onAttach: function() {
                        reportInserter.destroy();
                    }
                });
                tabs.open(self.data.url("report.html"));
            });
        });

        worker.port.on("open_tab", function(url) {
            tabs.open(url);
        });

        worker.port.on("set_width_double", function(data) {
            sidebarSetDouble();
            worker.port.emit("done_width_double", data);
        });
        worker.port.on("set_width_single", function(data) {
            sidebarSetSingle();
            worker.port.emit("done_width_single", data);
        });
    },
    onShow: function() {
        sidebarBox.width = 250;
        sidebarShown = true;
    },
    onHide: function() {
        sidebarShown = false;
    }
});

/* Sidebar resizing functions */
function sidebarSetSingle() {
    if (!sidebarIsSingle()) {
        sidebarBox.width = 250;
        sidebarPort.emit("resize_single");
    }
}
function sidebarSetDouble() {
    if (!sidebarIsDouble()) {
        sidebarBox.width = 500;
        sidebarPort.emit("resize_double");
    }
}
function sidebarIsSingle() {
    return sidebarBox.width == 250;
}
function sidebarIsDouble() {
    return sidebarBox.width == 500;
}


var resultPanel = panel.Panel({
    width: 300,
    height: 255,
    position: {
        top: 0,
        left: 500
    },
    contentURL: self.data.url("result-panel.html"),
    contentScriptFile: [
        self.data.url("jquery-2.1.0.js"),
        self.data.url("jquery-ui-1.10.4.custom.js"),
        self.data.url("result-panel.js")
    ],
});
resultPanel.port.on("save", function(data) {
    Database.update("results", data, function success(result) {
        resultPanel.hide();
        sidebarPort.emit("data_update_result", result);
    });
});
resultPanel.port.on("hide", function() {
    resultPanel.hide();
});
resultPanel.port.on("show", function() {
    resultPanel.show();
});

var editPagePanel = panel.Panel({
    width: 280,
    height: 115,
    position: {
        top: 80,
        left: 250
    },
    contentURL: self.data.url("page-panel.html"),
    contentScriptFile: [
        self.data.url("jquery-2.1.0.js"),
        self.data.url("page-panel.js")
    ],
});
editPagePanel.port.on("save", function(data) {
    Database.update("pages", data, function success(result) {
        editPagePanel.hide();
        sidebarPort.emit("data_update_pages_single", result);
    });
});
editPagePanel.port.on("hide", function() {
    editPagePanel.hide();
});
editPagePanel.port.on("show", function() {
    editPagePanel.show();
});

var editCriterionPanel = panel.Panel({
    width: 280,
    height: 300,
    position: {
        top: 105,
        left: 250
    },
    contentURL: self.data.url("criterion-panel.html"),
    contentScriptFile: [
        self.data.url("jquery-2.1.0.js"),
        self.data.url("jquery-ui-1.10.4.custom.js"),
        self.data.url("criterion-panel.js")
    ],
});
editCriterionPanel.port.on("save", function(data) {
    Database.update("criteria", data, function success(result) {
        editCriterionPanel.hide();
        sidebarPort.emit("data_update_criteria_single", result);
    });
});
editCriterionPanel.port.on("hide", function() {
    editCriterionPanel.hide();
});
editCriterionPanel.port.on("show", function() {
    editCriterionPanel.show();
});


function generateReport(options, successCallback) {
    Database.getFullPlan(options.plan, function success(plan) {
        var resultsMatrix = {};
        var calcTotal = calcPass = calcFail = calcPending = 0;
        var calc = {total: 0, pass: 0, fail: 0, pending: 0};
        Database.getAllWhere("results", "plan", options.plan, function(results) {
            results.forEach(function(result) {
                resultsMatrix[result.page] = resultsMatrix[result.page] || {};
                resultsMatrix[result.page][result.criterion] = result;
            });
            successCallback("<h1>Web Accessibility Report (" + plan.details.name + ")</h1>" +
                            "<h4>Generated: " + Date() + "</h4>" +
                            "<hr>" +
                            plan.pages.map(function(pages_group) {
                                return "<h2>Web page group: " + pages_group.name + "</h2>" +
                                       "<ul>" +
                                       (pages_group.items.length ?
                                            pages_group.items.map(function(page) {
                                                return "<li>" + page.title + " (" + page.url + ")</li>";
                                            }).join("") +
                                           "</ul>" +
                                           plan.criteria.map(function(criteria_group) {
                                                return "<h3>Criteria set: " + criteria_group.name + "</h3>" +
                                                       "<ul>" +
                                                       (criteria_group.items.length ?
                                                            criteria_group.items.map(function(criterion) {
                                                                return "<li>" +
                                                                       "<h4>" + criterion.name + "</h4>" +
                                                                       "<p>" + criterion.description.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>") + "</p>" +
                                                                       (options.criteria_details ?
                                                                            "<h5>Why is it important?</h5>" +
                                                                            "<p>" + criterion.reasoning.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>") + "</p>" +
                                                                            "<h5>Guidance</h5>" +
                                                                            "<p>" + criterion.guidance.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>") + "</p>" +
                                                                            "<h5>Documentation</h5>" +
                                                                            "<p>" + criterion.links.map(function(link) { return "<a href='" + link + "' target='_blank'>" + link + "</a>"; }).join("<br>") + "</p>"
                                                                       : "") +
                                                                       "<h4>Results</h4>" +
                                                                       pages_group.items.map(function(page, index) {
                                                                            if (index == 0) calc.total = calc.pass = calc.fail = calc.pending = 0;
                                                                            var result = (resultsMatrix[page.id] && resultsMatrix[page.id][criterion.id]) || {status: "pending"};
                                                                            if (options.statuses.indexOf(result.status) != -1) {
                                                                                calc.total++;
                                                                                calc[result.status]++;
                                                                            }
                                                                            return "";
                                                                       }).join("") +
                                                                       options.statuses.map(function(status) {
                                                                            return status.charAt(0).toUpperCase() + status.slice(1) + ": " + calc[status] + "/" + calc.total + " (" + (calc.total > 0 ? (Math.round(calc[status] / calc.total * 100) + "%") : "n/a") + ")<br>";
                                                                       }).join("") +
                                                                       (options.level == "individual" ?
                                                                        "<br><ul>" +
                                                                            pages_group.items.map(function(page) {
                                                                                var result = (resultsMatrix[page.id] && resultsMatrix[page.id][criterion.id]) || {status: "pending"};
                                                                                return (options.statuses.indexOf(result.status) != -1) ?
                                                                                            "<li>" +
                                                                                            page.title + " (" + page.url + ") - " + result.status +
                                                                                            (options.results_annotations && result.annotation ?
                                                                                                "<p>" + result.annotation.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>") + "</p>"
                                                                                            : "") +
                                                                                            (options.results_images && result.image ?
                                                                                                "<p><img src='" + result.image + "'></p>"
                                                                                            : "") +
                                                                                            "</li>"
                                                                                       : "";
                                                                            }).join("") +
                                                                            "</ul>"
                                                                       : "") +
                                                                       "</li>";
                                                            }).join("")
                                                       : "<li><em>No criteria</em></li>") +
                                                       "</ul>" +
                                                       "";
                                           }).join("") +
                                           (options.tables ?
                                               "<table border='1' cellspacing='2' cellpadding='2'>" +
                                               "<tr>" +
                                               "<th></th>" +
                                               pages_group.items.map(function(page) {
                                                    return "<th>" + page.title + "</th>";
                                               }).join("") +
                                               "</tr>" +
                                               plan.criteria.map(function(criteria_group) {
                                                    return "<tr><td><strong>" + criteria_group.name + "</strong></td></tr>" +
                                                           (criteria_group.items.length ?
                                                               criteria_group.items.map(function(criterion) {
                                                                    return "<tr>" +
                                                                           "<td>" + criterion.name + "</td>" +
                                                                           pages_group.items.map(function(page) {
                                                                                var result = (resultsMatrix[page.id] && resultsMatrix[page.id][criterion.id]) || {status: "pending"};
                                                                                return "<td>" +
                                                                                       (options.statuses.indexOf(result.status) != -1 ?
                                                                                            (result.status == "pass" ? "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAMZJREFUOE/FjjEKwkAQRWezdiFJZ29toWfwEoJ6Bw/hRYR4Jru0whYO2AU06B+Z1Y1F1gTEB0N2d/77hP5CwYWV0Ws/REw4KWV6l+ScW8OmJKa7DEr2uoqTcdaSMTfLdqPrbiCKfPiQ17omco2T0FivLczZWAgtGb/+lqumEnmHhcNM9flJVBZU9oFXyVeygIItlk0QdHib4RuXPRCWCNWBcA3O3bIHJQuEL4Ho5ZVG4iA8h3QaJHsgTSAfB8melNORHn8N0QMwhI66An4NAgAAAABJRU5ErkJggg=='> " : "") +
                                                                                            (result.status == "fail" ? "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjEwMPRyoQAAAKpJREFUOE+lU0EKgCAQ3CD7pPSK+kDQrd7qJehgkO2sJFHqoR0YCHdmWlclIBwHubYdXNctm7WNLGaAGjTQwiMI3kcz0ckMzph1n+dPCNZQEw20CGEvzGMy30TINKUQfD/MNxEyErf0LkSyYev7BsyYI9lLVYExizBfkx/UWiyTtc8tCl5DKhPmzJAFckyllkGu1Y5ZF6DagmqI6mNUXyT1VVY/JuD/cya6APHAd2wGj7MPAAAAAElFTkSuQmCC'> " : "") +
                                                                                            result.status.charAt(0).toUpperCase() + result.status.slice(1)
                                                                                       : "") +
                                                                                       "</td>";
                                                                           }).join("") +
                                                                           "</tr>";
                                                               }).join("")
                                                           : "<tr><td colspan='" + (pages_group.items.length + 1) + "'><em>No criteria</em></td></tr>")
                                               }).join("") +
                                               "</table>"
                                           : "")
                                       : "<li><em>No pages</em></li></ul>");
                            }).join("") +
                            "" +
                            "");
            });
        });
}


var {Cc, Ci} = require('chrome');
var mediator = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator);

exports.main = function(options, callbacks) {
    addToolbarButton();
};

exports.onUnload = function(reason) {
    removeToolbarButton();
};

function addToolbarButton() {
    var enumerator = mediator.getEnumerator("navigator:browser");
    while (enumerator.hasMoreElements()) {
        var document = enumerator.getNext().document;
        var navBar = document.getElementById("nav-bar");
        if (!navBar) return;
        var btn = document.createElement("toolbarbutton");
        btn.setAttribute("id", "web-a11y-eval-mgr-button");
        btn.setAttribute("type", "button");
        btn.setAttribute("class", "toolbarbutton-1");
        btn.setAttribute("image", self.data.url("icon16.png"));
        btn.setAttribute("orient", "horizontal");
        btn.setAttribute("tooltiptext", "Show/Hide Web Accessibility Evaluation Manager");
        btn.setAttribute("label", "Web Accessibility Evaluation Manager");
        btn.addEventListener("click", function(event) {
            // Only show for left-click events
            if (event.which == 1) sidebarShown ? sidebar.hide() : sidebar.show();
        }, false)
        navBar.appendChild(btn);
    }
}

function removeToolbarButton() {
    var enumerator = mediator.getEnumerator("navigator:browser");
    while (enumerator.hasMoreElements()) {
        var document = enumerator.getNext().document;
        var navBar = document.getElementById("nav-bar");
        var btn = document.getElementById("web-a11y-eval-mgr-button");
        if (navBar && btn) navBar.removeChild(btn);
    }
}
