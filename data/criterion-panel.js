var localData;

self.port.on("initialise", function(data) {
    $(window).scrollTop(0);
    $("textarea").scrollTop(0);
    $("#group").text(data.groupName);
    $("#name").val(data.name);
    $("#description").val(data.description);
    $("#reasoning").val(data.reasoning);
    $("#guidance").val(data.guidance);
    $("#links").val(data.links.join(","));
    localData = data;
    delete localData.groupName;
});

$(function() {
    $(document).tooltip({
        content: function() {
            return $(this).attr('title').replace(/\\n/g, "<br>");
        }
    });

    $("#save").click(function() {
        localData.name = $("#name").val();
        localData.description = $("#description").val();
        localData.reasoning = $("#reasoning").val();
        localData.guidance = $("#guidance").val();
        localData.links = $("#links").val() ? $("#links").val().split(",") : [];
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
