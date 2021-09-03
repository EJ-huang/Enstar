let puzzleImg = document.querySelector('.puzzle');
let powerBtn = document.querySelector('#power_btn');
let wingBtn = document.querySelector('#wing_btn');
let incomeBtn = document.querySelector('#income_btn');

$(document).ready(function() {
    $('#power_btn').hover(function(){
        let img = "./images/bg_2.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
    $('#wing_btn').hover(function(){
        let img = "./images/bg_3.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
    $('#income_btn').hover(function(){
        let img = "./images/bg.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
})
