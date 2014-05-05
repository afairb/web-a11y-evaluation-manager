var localData;

self.port.on("initialise", function(data) {
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
    delete localData.criterionObj;
    delete localData.pageObj;
});

$(function() {
    $("#date").datepicker({
        showButtonPanel: true,
        changeMonth: true,
        changeYear: true,
        dateFormat: "yy-mm-dd"
    });

    $("#save").click(function() {
        localData.annotation = $("#details").val();
        var added = $("#date").val().split("-");
        var newAdded = new Date();
        newAdded.setFullYear(added[0]);
        newAdded.setMonth(added[1] - 1);
        newAdded.setDate(added[2]);
        localData.added = newAdded;
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

    $("#image").change(function() {
        self.port.emit("show");
        if ($(this).val() != "") {
            var reader = new FileReader();
            reader.readAsDataURL($("#image")[0].files[0]);
            reader.onload = function() {
                localData.image = reader.result;
                $("#image").hide();
                $("#image").val("");
                $("#image-exists").show();
                $("#image-exists-img").attr("src", localData.image);
            }
        }
    });

    $("#image-exists-remove").click(function() {
        delete localData.image;
        $("#image-exists").hide();
        $("#image").show();
        $("#image-exists-img").attr("src", "");
    });

    $("#image-exists-img").click(function() {
        var imgWin = window.open($("#image-exists-img").attr("src"),"img","menubar=0,toolbar=0,personalbar=0,status=0,dialog=1,resizable=1");
        imgWin.onbeforeunload = function() {
            self.port.emit("show");
        };
    });
});
