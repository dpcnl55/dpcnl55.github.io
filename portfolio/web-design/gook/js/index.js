$(document).ready(function(){

    $(".mo_list>li").click(function(e){
        e.preventDefault();
        $(".mo_list>li").removeClass("on");
        $(this).addClass("on");
        $(".mo_list>li>ul").removeClass("on");
        $(this).children().addClass("on");
        // let dlHeight = $(this).height()+$(this).next().height();
        // $(".tabMenu").height(dlHeight);
        // $(this).parent().height(dlHeight); 
    });

    
    $(".list_100>li").click(function(e){
        e.preventDefault();
        $(".list_100>li>.list_act").slideUp();
       $(this).children(".list_act").slideDown();
    });

    $(".news_content_box tr td img").click(function(e){
        e.preventDefault();
        $(".answer").removeClass("on");
        $(this).parents("td").prev().children(".answer").addClass("on");
    });

    $(".mo_gnb .mo_gnb_header .mo_burger").click(function(){
        alert("test");
    });



});
