let puzzleImg = document.querySelector('.puzzle');
let powerBtn = document.querySelector('#power_btn');
let wingBtn = document.querySelector('#wing_btn');
let incomeBtn = document.querySelector('#income_btn');



// document.querySelector.powerBtn.addEventListener('hover', function() {
// PuzzleImg.classList.add('changeImg');
// })
// powerBtn.addEventListener('mouseenter', () => {
//     PuzzleImg.classList.add('changeImg');
    
// });


$(document).ready(function() {
    $(powerBtn).hover(function(){
        let img = "../images/bg_2.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
    $('#wing_btn').hover(function(){
        let img = "./images/bg_3.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
})
