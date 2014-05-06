var localData;

// Initialise with the fields of the current criterion object
self.port.on("initialise", function(data) {
    // Scroll the panel and textareas back to the top
    $(window).scrollTop(0);
    $("textarea").scrollTop(0);
    $("#group").text(data.groupName);
    $("#name").val(data.name);
    $("#description").val(data.description);
    $("#reasoning").val(data.reasoning);
    $("#guidance").val(data.guidance);
    $("#links").val(data.links.join(","));
    localData = data;
    // Remove criterion group name from the local copy of the data
    delete localData.groupName;
});

$(function() {
    // Attach jQuery UI tooltip feature to elements
    $(document).tooltip({
        content: function() {
            // Convert new lines in string to <br> elements for the tooltip
            return $(this).attr('title').replace(/\\n/g, "<br>");
        }
    });

    // Save button
    $("#save").click(function() {
        localData.name = $("#name").val();
        localData.description = $("#description").val();
        localData.reasoning = $("#reasoning").val();
        localData.guidance = $("#guidance").val();
        localData.links = $("#links").val() ? $("#links").val().split(",") : [];
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
