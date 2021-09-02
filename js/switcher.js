// document.querySelector(".hover-style-switcher").addEventListener("click", () => {
//     console.log("123")
//     document.querySelector(".box2").classList.toggle("open");
//     console.log("567")
// })

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
        let img = "../../Enstar-001/images/bg_2.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
    $('#wing_btn').hover(function(){
        let img = "../../Enstar-001/images/bg_3.png";
        $(".puzzle").css("background-image", "url(" + img + ")");
    });
})

// $(document).on('mouseenter','#power_btn',function(){
//     $('.puzzle').css('background-img','../images/pic3.jpg');
//     console.log('123')
// });
// $(document).on('mouseout','#power_btn',function(){
//     $('.puzzle').css('background','../images/pic2.jpg');
//     console.log('456')
// });