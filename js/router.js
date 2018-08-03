
$(function(){

    $("#dynamic").load("../page/dynamic/chat-records.html")
    //切换
    $(".menu-1").click(function() {

        $("#dynamic").load($(this).data("page"))

    })

})
