let worksList = [
    {   
        "pid":0,
        "category":"web_design",
        "thumnail" : "./img/gook_mockup1.png",
        "thumnail_desc":"국순당목업이미지",
        "title" : "국순당",
        "description" :"Redesign Project / Responsive Web",
        "link":"./works_gook.html"
    },
    {
        "pid":1,
        "category":"web_design",
        "thumnail" : "./img/posco1.png",
        "thumnail_desc":"포스코건설썸네일",
        "title" : "포스코 건설",
        "description" :"Redesign Project",
        "link":"./works_posco.html"
    },
    {
        "pid":2,
        "category":"banner",
        "thumnail" : "./img/banner1.png",
        "thumnail_desc":"헤드셋배너목업",
        "title" : "가로 웹 배너",
        "description" :"Redesign Project",
        "link":"./works_banner.html"
    },
    {
        "pid":3,
        "category":"banner",
        "thumnail" : "./img/banner1.png",
        "thumnail_desc":"헤드셋배너목업",
        "title" : "가로 웹 배너",
        "description" :"Redisign Project",
        "link":"#"
    },
    {
        "pid":4,
        "category":"illustraion",
        "thumnail" : "./img/Mask_group.png",
        "thumnail_desc":"순백이목업이미지",
        "title" : "순백이의 일상생활",
        "description" :"Digital Drawing",
        "link":"./works_soon.html"
    },
    {
        "pid":5,
        "category":"illustraion",
        "thumnail" : "./img/couple1.png",
        "thumnail_desc":"일러스트레이션이미지",
        "title" : "커플 일러스트",
        "description" :"Digital Drawing",
        "link":"#"
    },
];

function portfolioListLoad(category) {
    var tags = "";
    for(var i = 0; i< worksList.length; i++) {
        if(worksList[i].category == category || category == "all")
        {    
            var temp ='<li class="boxWrap"> \
                        <div class="box">\
                            <a href="./sub.html?pid='+worksList[i].pid+'"><img src="'+ worksList[i].thumnail+'" alt="'+worksList[i].thumnail_desc+'"></a> \
                        </div> \
                        <div class="boxDescription"> \
                            <div class="boxTextWrap"> \
                                <h4>'+worksList[i].title+'</h4> \
                                <p>'+worksList[i].description+'</p> \
                            </div> \
                            <span><a href="'+worksList[i].link+'" target="_blank">VIEW</a></span> \
                        </div> \
                    </li>' ;
            tags += temp;
        }
       
    }
    $(".gallery").html(tags) ;
}

$(document).ready(function(){


    $(".tab .button").click(function(){
        if( $(this).parent(".tab").hasClass("on")) {
            $(this).parent(".tab").removeClass("on");
            $(this).parent(".tab").children(".listContents").removeClass("on");
        } else {
            $(this).parent(".tab").addClass("on");
            $(this).parent(".tab").children(".listContents").addClass("on");
        }
    });
    


    $(".cat_btn").click(function(){
        let category = $(this).attr("data");
        portfolioListLoad(category);

    });
    $(".worksButton>li").click(function(){
        $(this).parent(".worksButton").children("li").removeClass("on");
        $(this).addClass("on");
    });

     //portfolio list load
    
    portfolioListLoad("all");




    $("#btn2").click(function(){
        let aboutMeOffset = $(".about").offset();
        $("html").animate({scrollTop:aboutMeOffset.top},800);
    });

    $("#btn3").click(function(){
        let worksOffset = $(".works").offset();
        $("html").animate({scrollTop:worksOffset.top},900);
      
    });

    $("#btn4").click(function(){
        let contactOffset = $(".contact").offset();
        $("html").animate({scrollTop:contactOffset.top},900);
    });


    $(window).scroll(function(){
        let windowHeight = $(window).height()*0.9;
        let scrollTop = $(window).scrollTop();

        $(".sectionTitle,.gallery").each(function(){
            if(scrollTop+windowHeight>$(this).offset().top){
                $(this).addClass("on")
                
            }else{
                $(this).removeClass("on");
            }
        });
    });

    // $(".workViewBtn").click(function(){
    //     let pid = $(this).attr("pid");
    //     $(".work_popup").addClass("on");
    //     $("body").addClass("scrollOff");
    // });
    // $(".popup_close_btn").click(function(){
    //     $(".work_popup").removeClass("on");
    //     $("body").removeClass("scrollOff");
    // });

});