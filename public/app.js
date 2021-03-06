//Initialize materialize javascript elements
M.AutoInit();

$('.modal').modal();

$(document).ready(function () {

    $(".clearBtn").on("click", function () {
        $.ajax({
            type: "DELETE",
            url: "/delete"
        });
        if (window.location.href = "/") {
            window.location.reload();
        }
        else {
            window.location.href = "/";
        }
    });

    $(".saveBtn").on("click", function () {
        var id = $(this).attr("data-id");
        $.ajax({
            type: "POST",
            url: "/save/" + id
        });
        $('#modal1').modal('open');
    });

    $(".removeSaveBtn").on("click", function () {
        var id = $(this).attr("data-id");
        $.ajax({
            type: "POST",
            url: "/removesaved/" + id
        });
        window.location.reload();
    });

    $(".commentBtn").on("click", function () {
        var thisId = $(this).attr("data-id");
        $.ajax({
            method: "GET",
            url: "/articles/" + thisId
        });
    })


    $(document).on("click", "#addCommentBtn", function () {
        var thisId = $(this).attr("data-id");
        var userInput = $("#new-comment-field" + thisId).val().toString();

        $.ajax({
            method: "POST",
            url: "/comment/" + thisId,
            data: {
                comments: userInput
            }
        })
        $("#new-comment-field" + thisId).val("");
        location.reload();
    });

    $(document).on("click", "#removeComment", function () {
        var thisId = $(this).attr("data-id");

        $.ajax({
            method: "DELETE",
            url: "/uncomment/" + thisId,
        });

        location.reload();
    });

});