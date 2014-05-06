var localData;

// Initialise with the fields of the current result object
self.port.on("initialise", function(data) {
    // Scroll the panel and textareas back to the top
    $(window).scrollTop(0);
    $("textarea").scrollTop(0);
    $("#criterion").text(data.criterionObj.name);
    $("#page").text(data.pageObj.title + " (" + data.pageObj.url + ")");
    $("#details").val(data.annotation);
    var added = new Date(data.added);
    $("#date").val(added.getFullYear() + "-" + ("0" + (added.getMonth() + 1)).slice(-2) + "-" + ("0" + (added.getDate() + 1)).slice(-2));
    $("#image").val("");
    $("#image").toggle(!data.image);
    $("#image-exists").toggle(!(!data.image));
    if (data.image) $("#image-exists-img").attr("src", data.image);
    localData = data;
    // Remove criterion and page objects from the local copy of the data
    delete localData.criterionObj;
    delete localData.pageObj;
});

$(function() {
    // Attach jQuery UI datepicker to the date form field
    $("#date").datepicker({
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd"
    });

    // Save button
    $("#save").click(function() {
        localData.annotation = $("#details").val();
        var added = $("#date").val().split("-");
        var newAdded = new Date();
        newAdded.setFullYear(added[0]);
        newAdded.setMonth(added[1] - 1);
        newAdded.setDate(added[2]);
        localData.added = newAdded;
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

    // Handle image upload
    $("#image").change(function() {
        // Tell the main script to show the panel again (as it is hidden when focus is moved to the file select dialog)
        self.port.emit("show");
        if ($(this).val() != "") {
            // Create a file reader and read the image specified
            var reader = new FileReader();
            reader.readAsDataURL($("#image")[0].files[0]);
            reader.onload = function() {
                // Hide the upload form field and load the image into the thumbnail preview
                localData.image = reader.result;
                $("#image").hide();
                $("#image").val("");
                $("#image-exists").show();
                $("#image-exists-img").attr("src", localData.image);
            }
        }
    });

    // Remove image link
    $("#image-exists-remove").click(function() {
        // Delete the image data from the local copy
        delete localData.image;
        // Hide the preview and show the upload form field instead
        $("#image-exists").hide();
        $("#image").show();
        $("#image-exists-img").attr("src", "");
    });

    // Thumbnail enlarging
    $("#image-exists-img").click(function() {
        // Open a new window with the full image in
        var imgWin = window.open($("#image-exists-img").attr("src"),"img","menubar=0,toolbar=0,personalbar=0,status=0,dialog=1,resizable=1");
        // Tell the main script to show the panel again (as it is hidden when focus is moved to the popup window)
        imgWin.onbeforeunload = function() {
            self.port.emit("show");
        };
    });
});
