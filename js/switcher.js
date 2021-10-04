let puzzleImg = document.querySelector('.puzzle');
let powerBtn = document.querySelector('#power_btn');
let wingBtn = document.querySelector('#wing_btn');
let incomeBtn = document.querySelector('#income_btn');

// powerBtn.addEventListener('mouseover', function(){
//     let img = "./images/bg_2.png";
//     puzzleImg.src = img;
//     console.log("puzzleImg")
// })
// powerBtn.addEventListener('mouseout', function(){
//     puzzleImg.src = "../images/bg.png"
// })

$(document).ready(function() {
    // $('#power_btn').hover(function(){
    //     let img = "./images/bg_2.png";
    //     $(".puzzle").css("background-image", "url(" + img + ")");
    // });
    $('#power_btn').mouseenter(function(){
        let img = "./images/bg_2.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
    $('#power_btn').mouseleave(function(){
        let img = "./images/bg.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
    $('#wing_btn').mouseenter(function(){
        let img = "./images/bg_4.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
    $('#wing_btn').mouseleave(function(){
        let img = "./images/bg.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
    $('#income_btn').mouseenter(function(){
        let img = "./images/bg_3.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
    $('#income_btn').mouseleave(function(){
        let img = "./images/bg.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
    // $('#wing_btn').hover(function(){
    //     let img = "./images/bg_4.png";
    //     $(".puzzle").css("background-image", "url(" + img + ")");
    // });
    // $('#income_btn').hover(function(){
    //     let img = "./images/bg_3.png";
    //     $(".puzzle").css("background-image", "url(" + img + ")");
    // });
})
