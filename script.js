$(function () {
    $("#carousel-button").on('click', function () {
        if ($("#carousel-button").children("span").hasClass("fa-pause")) {
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
            $("#mycarousel").carousel('pause');
        } else {
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
            $("#mycarousel").carousel('cycle');
        }
    });
});

