var state = {};

(function($){
    addon.port.emit("get_state");
    addon.port.on("send_state", function(data) {
        state = data;
        if (state.plan) addon.port.emit("get_plan", state.plan);
    });


    /*
     * Plans initialisation
     */
    addon.port.emit("get_plans_all");
    addon.port.on("data_plans_all", function(data) {
        $("#plans-list").empty();
        data.forEach(function(plan) {
            $("#plans-list").append("<li id='plan-" + plan.id + "' data-id='" + plan.id + "'><span>" + plan.name + "</span></li>");
        });
    });
    $("#panel-left").addClass("plans-view plans-open");
    $("#plans-menu-cancel").hide();
    /* End of plans initialisation */


    /*
     * Plans actions
     */
    $("#plans-menu-new").add("#plans-list-new").click(function() {
        addon.port.emit("set_width_single");
        $("#panel-left").removeClass().addClass("plans-view plans-new");
        $("#plans-new-name").focus();
    });
    $("#plans-menu-open").click(function() {
        addon.port.emit("set_width_single");
        addon.port.emit("get_plans_all");
        $("#panel-left").removeClass().addClass("plans-view plans-open");
    });
    $("#plans-menu-cancel").click(function() {
        $("#panel-left").removeClass();
        $(window).resize();
    });
    $("#plans-list").on("click", "li", function() {
        state.plan = $(this).closest("li").attr("id").split("-")[1];
        addon.port.emit("get_plan", state.plan);
    });
    $("#plans-new-form").submit(function() {
        $("input", $("#plans-new-form")).prop("disabled", true);
        addon.port.emit("add_plan", $("#plans-new-name").val());
        return false;
    });
    addon.port.on("data_add_plan", function() {
        $("#plans-new-name").val("");
        $("input", $("#plans-new-form")).prop("disabled", false);
    });
    /* End of plans actions */


    /*
     * Plan editing
     */
    $(".plan-actions .edit").click(function() {
        $("#plan-name-input").val($("#plan-name").text());
        $("#plan-name-text").hide();
        $("#plan-name-edit").show();
    });
    $(".plan-actions .delete").click(function() {
        if (confirm("This will delete the entire test plan, including any results you have added. Do you want to proceed?")) {
            addon.port.emit("delete_plan", state.plan);
        }
    });
    addon.port.on("data_delete_plan", function() {
        $("#plans-menu-open").click();
        $("#plans-menu-cancel").hide();
    });
    $(".plan-actions .save").click(function() {
        addon.port.emit("update_plan_name", {
            id: state.plan,
            newName: $("#plan-name-input").val()
        });
        $(".plan-actions .cancel").click();
    });
    $("#plan-name-input").keydown(function(event) {
        if (event.keyCode == 13) {
            $(".plan-actions .save").click();
        }
    });
    addon.port.on("data_update_plan_name", function(data) {
        $("#plan-name").text(data);
    });
    $(".plan-actions .cancel").click(function() {
        $("#plan-name-edit").hide();
        $("#plan-name-text").show();
    });
    /* End of plan editing */


    /*
     * Plan loading
     */
    addon.port.on("data_plan", function(data) {
        state = {plan: data.details.id};
        addon.port.emit("save_state", state);
        $("#plan-name").text(data.details.name);
        $("#pages-list").empty();
        data.pages.forEach(function(element) {
            $("#pages-list").append(renderPagesListItem(element));
        });
        $("#criteria-list").empty();
        data.criteria.forEach(function(element) {
            $("#criteria-list").append(renderCriteriaListItem(element));
        });
        $("#panel-left").removeClass();
        $("#plans-menu-cancel").show();
        $(window).resize();
        ["pages", "criteria"].forEach(function(type) {
            var firstGroup = $("#" + type + "-list li.group:first");
            if (firstGroup.length) {
                state[type + "_group_selected"] = firstGroup.data("id");
                firstGroup.addClass("selected-group");
            }
        });
    });
    /* End of plan loading */


    /*
     * Main left panel accordion
     */
    $(window).resize(function() {
        var height = $(window).height();
        height -= $("#left-top").outerHeight();
        height -= $("#left-bottom").outerHeight();
        $(".accordion-title").each(function(index, element) {
            height -= $(element).outerHeight();
        });
        $(".accordion-content").height(height);
    }).resize();

    $(".accordion-title").click(function() {
        var content = $(this).next(".accordion-content");
        if (content.is(":hidden")) {
            $(".accordion-title").removeClass("active");
            $(this).addClass("active");
            $(".accordion-content").slideUp();
            content.slideDown();
        }
    });
    // Show "Pages" section by default on load
    $("#pages-title").addClass("active");
    $("#pages-content").show();
    /* End of main left panel accordion */


    /*
     * Inline accordions (for "Add page/criteria")
     */
    $(".inline-accordion li h3").click(function() {
        var content = $(this).next();
        if (content.is(":hidden")) {
            $(this).parent().siblings().children("div").slideUp("fast");
            $(this).parent().siblings().children("h3").removeClass("shown");
            content.slideDown("fast");
            $(this).addClass("shown");
        } else {
            content.slideUp("fast");
            $(this).removeClass("shown");
        }
    });
    $(".inline-accordion input[type='reset']").click(function() {
        $(this).closest("li").children("h3").click();
    });
    /* End of inline accordions */


    /*
     * Dynamic list items (pages, criteria, details) rendering functions
     */
    function renderPagesListItem(element, selected) {
        var rendering = "<li id='pages_group-" + element.id + "' class='group" + (element.items.length ? " shown" : "") + (selected ? " selected-group" : "") + "' data-type='pages_group' data-id='" + element.id + "'><span class='group-label'>" + element.name + "<span class='group-actions actions'><em class='edit' title='Edit the name of this group of web pages'> &#9998;</em><em class='delete' title='Delete this group of web pages'> &#10006;</em></span></span><ul>";
        element.items.forEach(function(item) {
            rendering += renderPagesListSubitem(item);
        });
        rendering += "</ul></li>";
        return rendering;
    }
    function renderPagesListSubitem(element) {
        return "<li id='pages-" + element.id + "' data-type='pages' data-id='" + element.id + "'>" + element.title + " (" + element.url + ")<span class='item-actions actions'><em class='edit' title='Edit this web page'> &#9998;</em><em class='delete' title='Delete this web page'> &#10006;</em></span></li>";
    }

    function renderCriteriaListItem(element, selected) {
        var rendering = "<li id='criteria_group-" + element.id + "' class='group" + (element.items.length ? " shown" : "") + (selected ? " selected-group" : "") + "' data-type='criteria_group' data-id='" + element.id + "'><span class='group-label'>" + element.name + "<span class='group-actions actions'><em class='edit' title='Edit the name of this set of criteria'> &#9998;</em><em class='delete' title='Delete this set of criteria'> &#10006;</em></span></span><ul>";
        element.items.forEach(function(item) {
            rendering += renderCriteriaListSubitem(item);
        });
        rendering += "</ul></li>";
        return rendering;
    }
    function renderCriteriaListSubitem(element) {
        return "<li id='criteria-" + element.id + "' data-type='criteria' data-id='" + element.id + "'>" + element.name + "<span class='item-actions actions'><em class='edit' title='Edit this criterion'> &#9998;</em><em class='delete' title='Delete this criterion'> &#10006;</em></span></li>";
    }

    function renderDetailsCriteriaListItem(element) {
        var rendering = "<li id='details_criteria_group-" + element.id + "' class='group" + (element.items.length ? " shown" : "") + "' data-type='details_criteria_group' data-id='" + element.id + "'><span class='group-label-details'>" + element.name + "</span><ul class='result-list'>";
        element.items.forEach(function(item) {
            rendering += renderDetailsCriteriaListSubitem(item);
        });
        rendering += "</ul></li>";
        return rendering;
    }
    function renderDetailsCriteriaListSubitem(element) {
        return "<li id='details_criteria-" + element.id + "' data-type='details_criteria' data-id='" + element.id + "' class='result-" + (element.result ? (element.result.status + ((element.result.annotation || element.result.image) ? " result-has-details" : "")) : "pending") + "'" + (element.result ? " data-result='" + element.result.id + "'" : "") + "><span class='result-selection'><em class='result-selection-pass' title='Mark this test as passed'>&#9745;</em><em class='result-selection-pending' title='Mark this test as pending'>&#9744;</em><em class='result-selection-fail' title='Mark this test as failed'>&#9746;</em> </span>" + element.name + "<span class='item-actions result-actions actions'><em class='help' title='View more details about this criterion'> &#10067;</em><em class='more' title='Enter additional test result information'>&nbsp;&#9776;</em></span></li>";
    }

    function renderDetailsPagesListItem(element) {
        var rendering = "<li id='details_pages_group-" + element.id + "' class='group" + (element.items.length ? " shown" : "") + "' data-type='details_pages_group' data-id='" + element.id + "'><span class='group-label-details'>" + element.name + "</span><ul class='result-list'>";
        element.items.forEach(function(item) {
            rendering += renderDetailsPagesListSubitem(item);
        });
        rendering += "</ul></li>";
        return rendering;
    }
    function renderDetailsPagesListSubitem(element) {
        return "<li id='details_pages-" + element.id + "' data-type='details_pages' data-id='" + element.id + "' class='result-" + (element.result ? element.result.status : "pending") + "' data-url='" + element.url + "'" + (element.result ? " data-result='" + element.result.id + "'" : "") + "><span class='result-selection'><em class='result-selection-pass' title='Mark this test as passed'>&#9745;</em><em class='result-selection-pending' title='Mark this test as pending'>&#9744;</em><em class='result-selection-fail' title='Mark this test as failed'>&#9746;</em> </span>" + element.title + " (" + element.url + ")<span class='item-actions actions'><em class='open' title='Open this web page in a new tab'> &#9032;</em><em class='more' title='Enter additional test result information'>&nbsp;&#9776;</em></span></li>";
    }
    /* End of rendering functions */


    /*
     * Pages and criteria lists
     */
    var pagesAndCriteriaLists = $("#pages-list").add("#criteria-list");
    pagesAndCriteriaLists.on("click", "ul li", function(event) {
        if (event.target == this) {
            addon.port.emit("get_" + $(this).data("type") + "_single_details", $(this).data("id"));
            var group = $(this).closest("li.group");
            state[$(this).data("type") + "_group_selected"] = group.data("id");
            $("#" + $(this).data("type") + "-list > li").removeClass("selected-group");
            group.addClass("selected-group");
            $("li", pagesAndCriteriaLists).removeClass("selected");
            $(this).addClass("selected");
        }
    });
    pagesAndCriteriaLists.on("click", "li", function(event) {
        var $target = $(event.target);
        if ($target.is("span.group-label")) {
            $target = $target.parent();
        }
        var $this = $(this);
        if ($target.get(0) == this && $this.hasClass("group")) {
            state[$this.data("type") + "_selected"] = $this.data("id");
            $("#" + $this.data("type").split("_")[0] + "-list > li").removeClass("selected-group");
            $this.addClass("selected-group");
            $("li", pagesAndCriteriaLists).removeClass("selected");
            addon.port.emit("set_width_single");
            var sublist = $this.children("ul");
            if (sublist.children("li").length) {
                if (sublist.is(":hidden")) {
                    sublist.slideDown();
                    $this.addClass("shown");
                } else {
                    sublist.slideUp();
                    $this.removeClass("shown");
                }
            } else {
                $this.addClass("shown");
                setTimeout(function() {
                    $this.removeClass("shown");
                }, 300);
            }
        }
    });
    /* End of pages and criteria lists */


    /*
     * Pages and criteria lists auxilary functions
     */
    function getSelectedGroup(type, callback) {
        var group = state[type + "_group_selected"];
        if (!group) {
            var allGroups = $("#" + type + "-list li.group");
            if (allGroups.length) {
                group = allGroups.filter(":last").data("id");
            }
        }
        if (group) {
            callback(group);
        } else {
            // Need to create new group first
            addon.port.emit("add_" + type + "_group_bg", {
                name: "New " + type.charAt(0).toUpperCase() + type.slice(1) + " Group",
                plan: state.plan
            });
            addon.port.once("data_add_" + type + "_group_bg", function(data) {
                data.items = [];
                $("#" + type + "-list > li").removeClass("selected-group");
                $("#" + type + "-list").append(type == "pages" ? renderPagesListItem(data, true) : renderCriteriaListItem(data, true));
                state[type + "_group_selected"] = data.id;
                callback(data.id);
            });
        }
    }

    function removeItem(type, id) {
        $("#" + type + "-" + id).animate({height: 0, opacity: 0}, 500, function() {
            var list = $(this).parent("ul");
            $(this).remove();
            if (!list.children("li").length) {
                list.slideUp();
                list.closest("li.group").removeClass("shown");
            }
        });
        refreshDetails(type);
        if ($("#" + type + "-detail").data("for") == id) {
            addon.port.emit("set_width_single");
        }
    }
    function removeGroup(type, id) {
        $("#" + type + "_group-" + id).animate({height: 0, opacity: 0}, 500, function() {
            if ($(this).find("li").hasClass("selected")) {
                addon.port.emit("set_width_single");
            }
            $(this).remove();
        });
        refreshDetails(type);
    }
    /* End of pages and criteria lists auxilary functions */


    /*
     * Page adding
     */
    function addPage(type) {
        $("input", $("#pages-add-" + type + "-form")).prop("disabled", true);
        getSelectedGroup("pages", function(group) {
            addon.port.emit("add_page", {
                page: {
                    title: $("#pages-add-" + type + "-title").val(),
                    url: $("#pages-add-" + type + "-url").val(),
                    plan: state.plan,
                    pages_group: group
                },
                request_from: type
            });
        });
    }
    $("#pages-add-browser-form").submit(function() {
        addPage("browser");
        return false;
    });
    $("#pages-add-manual-form").submit(function() {
        addPage("manual");
        return false;
    });
    addon.port.on("data_add_page", function(data) {
        var sublist = $("#pages_group-" + data.page.pages_group + " ul");
        sublist.append(renderPagesListSubitem(data.page));
        if (sublist.is(":hidden")) {
            sublist.slideDown();
            $("#pages_group-" + data.page.pages_group).addClass("shown");
        }
        refreshDetails("pages");
        $("#pages-add-" + data.request_from + " h3").click();
        $("input", $("#pages-add-" + data.request_from + "-form")).prop("disabled", false);
        $("input[type=text]", $("#pages-add-" + data.request_from + "-form")).val("");
    });

    var journeyGroupId;
    $("#pages-add-journey-form").submit(function() {
        getSelectedGroup("pages", function(group) {
            journeyGroupId = group;
            // Add the current page to start the journey with
            addon.port.emit("add_page_bg", {
                title: $("#pages-add-browser-title").val(),
                url: $("#pages-add-browser-url").val(),
                plan: state.plan,
                pages_group: journeyGroupId
            });
        });
        $(this).hide();
        $("#pages-add-journey-recording").show();
        return false;
    });
    addon.port.on("data_tab_listener", function(tab) {
        // Update current tab form
        $("#pages-add-browser-title").val(tab.title);
        $("#pages-add-browser-url").val(tab.url);
        // Check for journey
        if (journeyGroupId) {
            addon.port.emit("add_page_bg", {
                title: tab.title,
                url: tab.url,
                plan: state.plan,
                pages_group: journeyGroupId
            });
        }
    });
    addon.port.on("data_add_page_bg", function(data) {
        var sublist = $("#pages_group-" + data.pages_group + " ul");
        sublist.append(renderPagesListSubitem(data));
        if (sublist.is(":hidden")) {
            sublist.slideDown();
            $("#pages_group-" + data.pages_group).addClass("shown");
        }
        refreshDetails("pages");
    });
    $("#pages-add-journey-recording").submit(function() {
        journeyGroupId = false;
        $(this).hide();
        $("#pages-add-journey-form").show();
        $("#pages-add-journey h3").click();
        return false;
    });

    $("#pages-add-group-form").submit(function() {
        $("input", $(this)).prop("disabled", true);
        addon.port.emit("add_pages_group", {
            name: $("#pages-add-group-name").val(),
            plan: state.plan
        });
        return false;
    });
    addon.port.on("data_add_pages_group", function(data) {
        data.items = [];
        $("#pages-list > li").removeClass("selected-group");
        $("#pages-list").append(renderPagesListItem(data, true));
        state["pages_group_selected"] = data.id;
        refreshDetails("pages");
        $("#pages-add-group h3").click();
        $("input", $("#pages-add-group-form")).prop("disabled", false);
        $("#pages-add-group-name").val("");
    });
    /* End of page adding */


    /*
     * Criteria adding tabs
     */
    $("#criteria-add-tabs li").click(function() {
        var id = $(this).attr("id").split("-");
        var list = $("#criteria-add-" + id[id.length-1]);
        if (list.is(":hidden")) {
            $(".criteria-add-list").hide();
            list.show();
            $("#criteria-add-tabs li").removeClass("shown");
            $(this).addClass("shown");
        }
    });
    $("#criteria-add-tabs-set").click();
    /* End of criteria adding tabs */


    /*
     * Criteria adding (sets)
     */
    $("#criteria-add-set-wcag1-form").submit(function() {
        $("input", $(this)).prop("disabled", true);
        addon.port.emit("add_criteria_group_wcag1", {
            groups: $("input[name='wcag1']:checked").map(function() { return $(this).val(); }).get(),
            level: parseInt($("input[name='wcag1-level']:checked").val()),
            plan: state.plan
        });
        return false;
    });
    $("#wcag1-all").change(function() {
        $("input[name='wcag1']").prop("checked", $(this).prop("checked"));
    });
    $("input[name='wcag1']").change(function() {
        $("#wcag1-all").prop("checked", false);
    });
    addon.port.on("data_add_criteria_group_wcag1", function() {
        $("#criteria-add-set-wcag1 h3").click();
        $("input", $("#criteria-add-set-wcag1-form")).prop("disabled", false);
    });

    // WCAG 2.0
    $("#criteria-add-set-wcag2-form").submit(function() {
        $("input", $(this)).prop("disabled", true);
        addon.port.emit("add_criteria_group_wcag2", {
            groups: $("input[name='wcag2']:checked").map(function() { return $(this).val(); }).get(),
            level: parseInt($("input[name='wcag2-level']:checked").val()),
            plan: state.plan
        });
        return false;
    });
    $("#wcag2-all").change(function() {
        $("input[name^='wcag2']").prop("checked", $(this).prop("checked"));
    });
    $("input[name='wcag2-principle']").change(function() {
        $("input[type='checkbox']", $(this).parent().nextUntil("label:not('.label-indent')")).prop("checked", $(this).prop("checked"));
    });
    $("input[name='wcag2']").change(function() {
        $("#wcag2-" + $(this).data("principle")).prop("checked", false);
    });
    $("input[name^='wcag2']").change(function() {
        $("#wcag2-all").prop("checked", false);
    });
    addon.port.on("data_add_criteria_group_wcag2", function() {
        $("#criteria-add-set-wcag2 h3").click();
        $("input", $("#criteria-add-set-wcag2-form")).prop("disabled", false);
    });

    // WebAIR
    $("#criteria-add-set-webair-form").submit(function() {
        $("input", $(this)).prop("disabled", true);
        addon.port.emit("add_criteria_group_webair", {
            groups: $("input[name='webair']:checked").map(function() { return $(this).val(); }).get(),
            plan: state.plan
        });
        return false;
    });
    $("#webair-all").change(function() {
        $("input[name='webair']").prop("checked", $(this).prop("checked"));
    });
    $("input[name='webair']").change(function() {
        $("#webair-all").prop("checked", false);
    });
    addon.port.on("data_add_criteria_group_webair", function() {
        $("#criteria-add-set-webair h3").click();
        $("input", $("#criteria-add-set-webair-form")).prop("disabled", false);
    });

    // Existing set
    $("#criteria-add-set-previous h3").click(function() {
        addon.port.emit("get_previous_criteria_groups");
    });
    addon.port.on("data_previous_criteria_groups", function(groups) {
        var list = $("#criteria-add-set-previous-list")
        list.empty();
        list.append("<option value='' disabled='disabled' selected='selected'>Choose an existing set of criteria</option>");
        groups.forEach(function(group) {
            if (group.plan != state.plan) {
                list.append("<option value='" + group.id + "'>" + group.planName + ": " + group.name + "</option>");
            }
        });
    });
    $("#criteria-add-set-previous-form").submit(function() {
        if ($("#criteria-add-set-previous-list option:selected").val() == "") return false;
        $("input", $(this)).prop("disabled", true);
        $("select", $(this)).prop("disabled", true);
        addon.port.emit("add_criteria_group_previous", {
            group: $("#criteria-add-set-previous-list option:selected").val(),
            plan: state.plan
        });
        return false;
    });
    addon.port.on("data_add_criteria_group_previous", function() {
        $("#criteria-add-set-previous h3").click();
        $("input", $("#criteria-add-set-previous-form")).prop("disabled", false);
        $("select", $("#criteria-add-set-previous-form")).prop("disabled", false);
    });

    // New set
    $("#criteria-add-set-new-form").submit(function() {
        $("input", $(this)).prop("disabled", true);
        addon.port.emit("add_criteria_group_new", {
            name: $("#criteria-add-set-new-name").val(),
            plan: state.plan
        });
        return false;
    });
    addon.port.on("data_add_criteria_group_new", function() {
        $("#criteria-add-set-new h3").click();
        $("input", $("#criteria-add-set-new-form")).prop("disabled", false);
        $("#pages-add-set-new-name").val("");
    });

    addon.port.on("data_add_criteria_group", function(data) {
        data.items = data.items || [];
        $("#criteria-list > li").removeClass("selected-group");
        $("#criteria-list").append(renderCriteriaListItem(data, true));
        state["criteria_group_selected"] = data.id;
        refreshDetails("criteria");
    });
    /* End of criteria adding (sets) */


    /*
     * Criteria adding (single)
     */
    function appendCriterion(data, type) {
        var sublist = $("#criteria_group-" + data.criteria_group + " ul");
        sublist.append(renderCriteriaListSubitem(data));
        if (sublist.is(":hidden")) {
            sublist.slideDown();
            $("#criteria_group-" + data.criteria_group).addClass("shown");
        }
        refreshDetails("criteria");
        $("input", $("#criteria-add-single-" + type + "-form")).prop("disabled", false);
        $("input[type=reset]", $("#criteria-add-single-" + type + "-form")).click();
    }

    // WCAG 1.0
    for (group in WCAG_1) {
        var optgroup = $("<optgroup label='" + group.replace(/'/g, "&#39;") + "'></optgroup>");
        WCAG_1[group].forEach(function(criterion, index) {
            optgroup.append("<option value='" + group.replace(/'/g, "&#39;") + "-" + index + "' data-description='" + criterion.description.replace(/'/g, "&#39;") + "'>" + criterion.name + "</option>");
        });
        $("#criteria-add-single-wcag1-list").append(optgroup);
    }
    $("#criteria-add-single-wcag1-list").change(function() {
        $("#criteria-add-single-wcag1-description").text($("option:selected", this).data("description")).html("<strong>Description: </strong>" + $("#criteria-add-single-wcag1-description").html().replace(/\n/g, "<br>"));
    });
    $("#criteria-add-single-wcag1-form").on("reset", function() {
        $("#criteria-add-single-wcag1-description").text("");
    });
    $("#criteria-add-single-wcag1-form").submit(function() {
        if ($("#criteria-add-single-wcag1-list option:selected").val() == "") return false;
        $("input", $(this)).prop("disabled", true);
        getSelectedGroup("criteria", function(group) {
            addon.port.emit("add_criteria_single_wcag1", {
                wcag1Id: $("#criteria-add-single-wcag1-list option:selected").val(),
                plan: state.plan,
                criteria_group: group
            });
        });
        return false;
    });
    addon.port.on("data_add_criteria_single_wcag1", function(data) {
        appendCriterion(data, "wcag1");
    });

    // WCAG 2.0
    for (group in WCAG_2) {
        var optgroup = $("<optgroup label='" + group.replace(/'/g, "&#39;") + "'></optgroup>");
        WCAG_2[group].forEach(function(criterion, index) {
            optgroup.append("<option value='" + group.replace(/'/g, "&#39;") + "-" + index + "' data-description='" + criterion.description.replace(/'/g, "&#39;") + "'>" + criterion.name + "</option>");
        });
        $("#criteria-add-single-wcag2-list").append(optgroup);
    }
    $("#criteria-add-single-wcag2-list").change(function() {
        $("#criteria-add-single-wcag2-description").text($("option:selected", this).data("description")).html("<strong>Description: </strong>" + $("#criteria-add-single-wcag2-description").html().replace(/\n/g, "<br>"));
    });
    $("#criteria-add-single-wcag2-form").on("reset", function() {
        $("#criteria-add-single-wcag2-description").text("");
    });
    $("#criteria-add-single-wcag2-form").submit(function() {
        if ($("#criteria-add-single-wcag2-list option:selected").val() == "") return false;
        $("input", $(this)).prop("disabled", true);
        getSelectedGroup("criteria", function(group) {
            addon.port.emit("add_criteria_single_wcag2", {
                wcag2Id: $("#criteria-add-single-wcag2-list option:selected").val(),
                plan: state.plan,
                criteria_group: group
            });
        });
        return false;
    });
    addon.port.on("data_add_criteria_single_wcag2", function(data) {
        appendCriterion(data, "wcag2");
    });

    // WebAIR
    for (group in WebAIR) {
        var optgroup = $("<optgroup label='" + group.replace(/'/g, "&#39;") + "'></optgroup>");
        WebAIR[group].forEach(function(criterion, index) {
            optgroup.append("<option value='" + group.replace(/'/g, "&#39;") + "-" + index + "' data-description='" + criterion.description.replace(/'/g, "&#39;") + "'>" + criterion.name + "</option>");
        });
        $("#criteria-add-single-webair-list").append(optgroup);
    }
    $("#criteria-add-single-webair-list").change(function() {
        $("#criteria-add-single-webair-description").text($("option:selected", this).data("description")).html("<strong>Description: </strong>" + $("#criteria-add-single-webair-description").html().replace(/\n/g, "<br>"));
    });
    $("#criteria-add-single-webair-form").on("reset", function() {
        $("#criteria-add-single-webair-description").text("");
    });
    $("#criteria-add-single-webair-form").submit(function() {
        if ($("#criteria-add-single-webair-list option:selected").val() == "") return false;
        $("input", $(this)).prop("disabled", true);
        getSelectedGroup("criteria", function(group) {
            addon.port.emit("add_criteria_single_webair", {
                webairId: $("#criteria-add-single-webair-list option:selected").val(),
                plan: state.plan,
                criteria_group: group
            });
        });
        return false;
    });
    addon.port.on("data_add_criteria_single_webair", function(data) {
        appendCriterion(data, "webair");
    });

    // Existing custom
    $("#criteria-add-single-existing h3").click(function() {
        addon.port.emit("get_existing_custom_criteria");
    });
    addon.port.on("data_existing_custom_criteria", function(criteria) {
        var list = $("#criteria-add-single-existing-list")
        list.empty();
        list.append("<option value='' disabled='disabled' selected='selected'>Choose an existing custom criterion</option>");
        criteria.forEach(function(criterion) {
            list.append("<option value='" + criterion.id + "' data-description='" + criterion.description.replace(/'/g, "&#39;") + "'>" + criterion.planName + ": " + criterion.groupName + ": " + criterion.name + "</option>");
        });
    });
    $("#criteria-add-single-existing-list").change(function() {
        $("#criteria-add-single-existing-description").text($("option:selected", this).data("description")).html("<strong>Description: </strong>" + $("#criteria-add-single-existing-description").html().replace(/\n/g, "<br>"));
    });
    $("#criteria-add-single-existing-form").on("reset", function() {
        $("#criteria-add-single-existing-description").text("");
    });
    $("#criteria-add-single-existing-form").submit(function() {
        if ($("#criteria-add-single-existing-list option:selected").val() == "") return false;
        $("input", $(this)).prop("disabled", true);
        getSelectedGroup("criteria", function(group) {
            addon.port.emit("add_criteria_single_existing", {
                id: $("#criteria-add-single-existing-list option:selected").val(),
                plan: state.plan,
                criteria_group: group
            });
        });
        return false;
    });
    addon.port.on("data_add_criteria_single_existing", function(data) {
        appendCriterion(data, "existing");
    });

    // New custom
    $("#criteria-add-single-new-form").submit(function() {
        $("input", $(this)).prop("disabled", true);
        getSelectedGroup("criteria", function(group) {
            addon.port.emit("add_criteria_single_new", {
                plan: state.plan,
                criteria_group: group,
                name: $("#criteria-add-single-new-name").val(),
                description: $("#criteria-add-single-new-description").val(),
                reasoning: $("#criteria-add-single-new-reasoning").val(),
                guidance: $("#criteria-add-single-new-guidance").val(),
                links: $("#criteria-add-single-new-links").val() ? $("#criteria-add-single-new-links").val().split(",") : [],
                custom: 1
            });
        });
        return false;
    });
    addon.port.on("data_add_criteria_single_new", function(data) {
        appendCriterion(data, "new");
    });
    /* End of criteria adding (single) */


    /*
     * Editing and deleting icons
     */
    pagesAndCriteriaLists.on("click", ".actions em.delete", function() {
        var type = $(this).closest("li").data("type");
        if (type.indexOf("_") == -1) type += "_single";
        addon.port.emit("delete_" + type, $(this).closest("li").data("id"));
    });
    addon.port.on("data_delete_pages_single", function(data) {
        removeItem("pages", data);
    });
    addon.port.on("data_delete_criteria_single", function(data) {
        removeItem("criteria", data);
    });
    addon.port.on("data_delete_pages_group", function(data) {
        removeGroup("pages", data);
    });
    addon.port.on("data_delete_criteria_group", function(data) {
        removeGroup("criteria", data);
    });
    pagesAndCriteriaLists.on("click", ".item-actions em.edit", function() {
        addon.port.emit("show_" + $(this).closest("li").data("type") + "_panel", $(this).closest("li").data("id"));
    });
    addon.port.on("data_update_pages_single", function(data) {
        var item = $("#pages-" + data.id);
        var selected = item.hasClass("selected");
        item.replaceWith(renderPagesListSubitem(data));
        if (selected) {
            $("#pages-" + data.id).addClass("selected");
            refreshDetails("criteria");
        } else {
            refreshDetails("pages");
        }
    });
    addon.port.on("data_update_criteria_single", function(data) {
        var item = $("#criteria-" + data.id);
        var selected = item.hasClass("selected");
        item.replaceWith(renderCriteriaListSubitem(data));
        if (selected) {
            $("#criteria-" + data.id).addClass("selected");
            refreshDetails("pages");
        } else {
            refreshDetails("criteria");
        }
    });
    pagesAndCriteriaLists.on("click", ".group-actions em.edit", function() {
        var span = $(".group-label", $(this).closest("li"));
        span.hide();
        span.after("<span class='group-edit'><input type='text' value='" + span.clone().children().remove().end().text().replace(/'/g, "&#39;") + "'><span class='group-actions edit-actions actions'><em class='save' title='Save your changes'> &#128190;</em><em class='cancel' title='Cancel editing'> &#128683;</em></span></span>");
    });
    pagesAndCriteriaLists.on("click", ".group-actions em.cancel", function() {
        $(".group-label", $(this).closest("li")).show();
        $(".group-edit", $(this).closest("li")).remove();
    });
    pagesAndCriteriaLists.on("click", ".group-actions em.save", function() {
        addon.port.emit("update_group_name", {
            groupId: $(this).closest("li").data("id"),
            groupType: $(this).closest("li").data("type"),
            newName: $("input", $(this).closest(".group-edit")).val()
        });
        $(this).next(".cancel").click();
    });
    pagesAndCriteriaLists.on("keydown", ".group-edit input", function(event) {
        if (event.keyCode == 13) {
            $(".save", $(this).closest(".group-edit")).click();
        }
    });
    addon.port.on("data_update_group_name", function(data) {
        refreshDetails(data.groupType.split("_")[0]);
        var label = $("#" + data.groupType + "-" + data.groupId + " .group-label");
        var cache = label.children();
        label.text(data.newName).append(cache);
    });
    /* End of editing and deleting icons */


    /*
     * Details panel
     */
    addon.port.on("data_pages_single_details", function(data) {
        $("#criteria-detail").data("for", "");
        $("#pages-detail").data("for", data.details.id);
        $("#pages-detail-title").text(data.details.title);
        $("#pages-detail-url").html("<a href='" + data.details.url + "' target='_blank'>" + data.details.url + "</a>");
        $("#pages-detail-list").empty();
        if (data.criteria.length) {
            data.criteria.forEach(function(element) {
                $("#pages-detail-list").append(renderDetailsCriteriaListItem(element));
            });
        } else {
            $("#pages-detail-list").append("<p class='info'>Once you have added some test criteria to this test plan, they will appear here. Add criteria in the <span id='open-left-criteria'>\"Criteria\" panel</span> on the right.</p>");
        }
        addon.port.emit("set_width_double", "pages");
    });
    addon.port.on("data_criteria_single_details", function(data) {
        $("#pages-detail").data("for", "");
        $("#criteria-detail").data("for", data.details.id);
        $("#criteria-detail-name").text(data.details.name);
        $("#criteria-detail-list").empty();
        if (data.pages.length) {
            data.pages.forEach(function(element) {
                $("#criteria-detail-list").append(renderDetailsPagesListItem(element));
            });
        } else {
            $("#criteria-detail-list").append("<p class='info'>Once you have added some web pages to this test plan, they will appear here. Add pages in the <span id='open-left-pages'>\"Pages\" panel</span> on the right.</p>");
        }
        addon.port.emit("set_width_double", "criteria");
    });
    $("#pages-detail").on("click", "#open-left-criteria", function() {
        $("#criteria-title").click();
    });
    $("#criteria-detail").on("click", "#open-left-pages", function() {
        $("#pages-title").click();
    });
    addon.port.on("done_width_single", function(type) {
        $(".panel-right-inner").hide();
        $("#panel-right").removeClass("show-panel");
    });
    addon.port.on("done_width_double", function(type) {
        $(".panel-right-inner").hide();
        $("#panel-right").removeClass("show-panel");
        $("#" + type + "-detail").show();
    });

    $("#criteria-detail-more").click(function() {
        addon.port.emit("get_details_criteria_single_details", $("#criteria-detail").data("for"));
    });

    $(".close-right").click(function() {
        var type = $(this).data("for");
        $("#" + type + "-list ul li").removeClass("selected");
        $("#" + type + "-detail").data("for", "");
        addon.port.emit("set_width_single");
    });
    /* End of details panel */


    /*
     * Pages and criteria detail lists
     */
    var pagesAndCriteriaDetailLists = $("#pages-detail-list").add("#criteria-detail-list");
    pagesAndCriteriaDetailLists.on("click", "ul li", function(event) {
        state[$(this).data("type") + "_group_selected"] = $(this).closest("li.group").data("id");
        $("li", pagesAndCriteriaDetailLists).removeClass("selected");
        $(this).addClass("selected");
    });
    pagesAndCriteriaDetailLists.on("click", "li", function(event) {
        var $target = $(event.target);
        if ($target.is("span.group-label-details")) {
            $target = $target.parent();
        }
        var $this = $(this);
        if ($target.get(0) == this && $this.hasClass("group")) {
            state[$this.data("type") + "_selected"] = $this.data("id");
            $("li", pagesAndCriteriaDetailLists).removeClass("selected");
            $("#panel-right").removeClass("show-panel");
            var sublist = $this.children("ul");
            if (sublist.children("li").length) {
                if (sublist.is(":hidden")) {
                    sublist.slideDown();
                    $this.addClass("shown");
                } else {
                    sublist.slideUp();
                    $this.removeClass("shown");
                }
            } else {
                $this.addClass("shown");
                setTimeout(function() {
                    $this.removeClass("shown");
                }, 300);
            }
        }
    });
    function refreshDetails(type) {
        var details = (type == "pages" ? "criteria" : "pages");
        if ($("#" + details + "-detail").is(":visible")) {
            addon.port.emit("get_" + details + "_single_details", $("#" + details + "-detail").data("for"));
        }
    }
    /* End of pages and criteria detail lists */


    /*
     * Result items
     */
    pagesAndCriteriaDetailLists.on("click", ".actions em.help", function() {
        addon.port.emit("get_" + $(this).closest("li").data("type") + "_single_details", $(this).closest("li").data("id"));
    });
    pagesAndCriteriaDetailLists.on("click", ".actions em.open", function() {
        addon.port.emit("open_tab", $(this).closest("li").data("url"));
    });
    pagesAndCriteriaDetailLists.on("click", ".actions em.more", function() {
        var parent = $(this).closest("li");
        if (parent.data("result")) {
            addon.port.emit("show_result_panel", parent.data("result"));
        } else {
            var detailsDiv = parent.closest(".panel-right-inner");
            var id1 = parent.data("id");
            var id2 = detailsDiv.data("for");
            var isPages = detailsDiv.attr("id").split("-")[0] == "pages";
            addon.port.emit("show_result_panel_new", {
                plan: state.plan,
                page: isPages ? id2 : id1,
                criterion: isPages ? id1 : id2
            });
        }
    });

    pagesAndCriteriaDetailLists.on("click", ".result-selection em", function() {
        var parent = $(this).closest("li");
        if (parent.data("result")) {
            addon.port.emit("update_result_status", {status: $(this).attr("class").split("-")[2], id: parent.data("result")});
        } else {
            var detailsDiv = parent.closest(".panel-right-inner");
            var id1 = parent.data("id");
            var id2 = detailsDiv.data("for");
            var isPages = detailsDiv.attr("id").split("-")[0] == "pages";
            addon.port.emit("add_result", {
                plan: state.plan,
                page: isPages ? id2 : id1,
                criterion: isPages ? id1 : id2,
                status: $(this).attr("class").split("-")[2]
            });
        }
    });
    addon.port.on("data_update_result_status", function(data) {
        $("[data-result='" + data.id + "']").removeClass("result-pass result-fail result-pending").addClass("result-" + data.status);
    });
    addon.port.on("data_add_result", function(data) {
        var element;
        if ($("#pages-detail").data("for") == data.page) {
            element = $("#details_criteria-" + data.criterion);
        } else if ($("#criteria-detail").data("for") == data.criterion) {
            element = $("#details_pages-" + data.page);
        }
        if (element) element.removeClass().addClass("result-" + data.status).data("result", data.id).attr("data-result", data.id);
    });
    addon.port.on("data_update_result", function(data) {
        if (data.annotation || data.image) {
            $("[data-result='" + data.id + "']").addClass("result-has-details");
        } else {
            $("[data-result='" + data.id + "']").removeClass("result-has-details");
        }
    });
    /* End of result items */


    /*
     * Bottom details panel
     */
     $(".close-bottom").click(function() {
        $("#panel-right").removeClass("show-panel");
    });

    var bottomElements = $("#right-bottom-description").add("#right-bottom-reasoning").add("#right-bottom-guidance").add("#right-bottom-links");
    addon.port.on("data_details_criteria_single_details", function(data) {
        bottomElements.empty();
        $("#right-bottom-description").text(data.description != "" ? data.description : "None given.");
        $("#right-bottom-reasoning").text(data.reasoning != "" ? data.reasoning : "None given.");
        $("#right-bottom-guidance").text(data.guidance != "" ? data.guidance : "Follow the links below for guidance and techniques.");
        $("#right-bottom-links").html(data.links.map(function(element) { return "<a href='" + element + "' target='_blank'>" + element + "</a>"; }).join("\n"));
        bottomElements.each(function() {
            $(this).html($(this).html().replace(/\n/g, "<br>"));
        });
        $("#right-bottom").scrollTop(0);
        $("#panel-right").addClass("show-panel");
    });
    /* End of bottom details panel */


    /*
     * Reports
     */
    $("#reports-options").submit(function() {
        addon.port.emit("generate_report", {
            plan: state.plan,
            level: $("input[name='report-level']:checked").val(),
            statuses: $("input[name='report-status']:checked").map(function() { return $(this).val(); }).get(),
            criteria_details: $("input[name='report-criteria_details']").is(":checked"),
            results_annotations: $("input[name='report-results_annotations']").is(":checked"),
            results_images: $("input[name='report-results_images']").is(":checked"),
            tables: $("input[name='report-tables']").is(":checked")
        });
        return false;
    });
    /* End of reports */

})(jQuery);