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

    let count = 0;
    $(".controler>.button_next").click(function(e){
        e.preventDefault();
        count++;
        
        if(count>2){
            count = 2;
        }
        console.log(count)
        $(".slider_box").css("transform","translateX("+(-290*count)+"px)");
    });

    $(".controler>.button_pre").click(function(e){
        e.preventDefault();
        count--;
        
        if(count<0){
            count = 0;
        }
        console.log(count)
        $(".slider_box").css("transform","translateX("+(-290*count)+"px)");
    });



});
