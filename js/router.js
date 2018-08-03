
$(function(){

    $("#dynamic").load("../page/dynamic/推荐音乐.html")
    //切换
    $(".menu-1").click(function() {

        $("#dynamic").load($(this).data("page"))

    })

})
