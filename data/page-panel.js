var localData;

// Initialise with the fields of the current page object
self.port.on("initialise", function(data) {
    // Scroll the panel and textareas back to the top
    $(window).scrollTop(0);
    $("textarea").scrollTop(0);
    $("#group").text(data.groupName);
    $("#title").val(data.title);
    $("#url").val(data.url);
    localData = data;
    // Remove page group name from the local copy of the data
    delete localData.groupName;
});

$(function() {
    // Save button
    $("#save").click(function() {
        localData.title = $("#title").val();
        localData.url = $("#url").val();
        // Send the updated data
        self.port.emit("save", localData);
    });

    // Cancel button
    $("#cancel").click(function() {
        // Close the panel
        self.port.emit("hide");
    });

    // Trigger save when enter key is pressed in one of the text inputs
    $("input[type=text]").keydown(function(event) {
        if (event.keyCode == 13) {
            $("#save").click();
        }
    });
});
