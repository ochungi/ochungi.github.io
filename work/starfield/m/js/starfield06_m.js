/*tab메뉴*/
$(function () {

    $(".content").hide();
    $(".content:first").show();

    $("ul.menu li").click(function () {
        $("ul.menu li").removeClass("active");
        //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
        $(this).addClass("active");
        $(".content").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn()
    });
});
