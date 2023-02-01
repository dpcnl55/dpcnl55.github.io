$(document).ready(function(){

    // $(".mo_list li").click(function(){
    //     $(this).children("ul").slideDown();
    // });

    
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


    let count = 0;

    
    let slides = $(".slider_box>li").length; // 슬라이드의 개수
    let perView = 4;

    function initSliderStyle(sl,pv){
        $(".slider_box").css("width",(100*sl/pv)+"%")
        $(".slider_box>li").css("width",100/sl+"%")
    }
    
    if(window.innerWidth<=768){
        //모바일화면
        perView = 1;
        initSliderStyle(slides,perView)
    }else{
        perView = 4;
        initSliderStyle(slides,perView)
    }

    $(window).resize(function(){
        if(window.innerWidth<=768){
            //모바일화면
            perView = 1;
            initSliderStyle(slides,perView)
        }else{
            perView = 4;
            initSliderStyle(slides,perView)
        }
    })

    $(".controler>.button_next").click(function(e){
        e.preventDefault();
        count++;
        if(count>slides-1){
            count = slides-1;
        }
        if(count>slides - perView) {
            count = slides - perView ;
            return;
        }
        console.log(count)
        $(".slider_box").css("transform","translateX("+(-(100/slides)*count)+"%)");
    });

    $(".controler>.button_pre").click(function(e){
        e.preventDefault();
        count--;
        
        if(count<0){
            count = 0;
        }
     
        console.log(count)
        $(".slider_box").css("transform","translateX("+(-(100/slides)*count)+"%)");
    });

    $(".mo_list li").click(function(){
        if($(this).hasClass("on")){
            $(this).removeClass("on");
            $(this).children("ul").slideUp();
        } else {
            $(this).children("ul").slideDown();
            $(this).addClass("on");
        }
    });

    $(".mo_gnb a+img").click(function(){
        $(this).parents(".mo_gnb").css("transform","translateX(100%)");
        $(this).parents(".mo_wrap").children(".mo_back").css("display","none");
    })

    $(".btnMobile img").click(function(){
        $(this).parents(".mo_wrap").children(".mo_gnb").css("transform","translateX(0)");
        $(this).parents(".mo_wrap").children(".mo_back").css("display","block");
    });

    let drinkListSlider = new Swiper(".scroll_right", {
        direction: "vertical",
        pagination: {
          el: ".story_controler",
          clickable: true,
        },
        slidesPerView:5,
        loop:true,
        centeredSlides:true,
        autoplay: {
            delay: 5000,
        }
      });
    
      
    console.log(drinkListSlider.realIndex)

    
    drinkListSlider.on('slideChange', function () {
        console.log(drinkListSlider.realIndex)
        $("#drinkBox").html(drinkListArray[drinkListSlider.realIndex])
    });

    let drinkListArray = [
        `<h2>국순당이 복원한 우리술</h2>
        <p id="scroll_name">백세주</p>`,
        `<h2>국순당이 복원한 우리술</h2>
        <p id="scroll_name">창포주</p>`,
        `<h2>국순당이 복원한 우리술</h2>
        <p id="scroll_name">이화주</p>`,
        `<h2>국순당이 복원한 우리술</h2>
        <p id="scroll_name">신도주</p>`,
        `<h2>국순당이 복원한 우리술</h2>
        <p id="scroll_name">송절주</p>`,
        `<h2>국순당이 복원한 우리술</h2>
        <p id="scroll_name">미림주</p>`,
        `<h2>국순당이 복원한 우리술</h2>
        <p id="scroll_name">상심주</p>`,
        `<h2>국순당이 복원한 우리술</h2>
        <p id="scroll_name">한산춘</p>`,
        `<h2>국순당이 복원한 우리술</h2>
        <p id="scroll_name">삼합주</p>`
    ]
    $("#drinkBox").html(drinkListArray[0]);




});
