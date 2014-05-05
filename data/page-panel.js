var localData;

self.port.on("initialise", function(data) {
    $(window).scrollTop(0);
    $("textarea").scrollTop(0);
    $("#group").text(data.groupName);
    $("#title").val(data.title);
    $("#url").val(data.url);
    localData = data;
    delete localData.groupName;
});

$(function() {
    $("#save").click(function() {
        localData.title = $("#title").val();
        localData.url = $("#url").val();
        self.port.emit("save", localData);
    });

    $("#cancel").click(function() {
        self.port.emit("hide");
    });

    $("input[type=text]").keydown(function(event) {
        if (event.keyCode == 13) {
            $("#save").click();
        }
    });
});
