// let swiper = new Swiper('.swiper-container', {
//     // pagination: '.swiper-pagination',
//     direction: 'horizontal',
//     slidesPerView: 2,
//     paginationClickable: true,
//     spaceBetween: 30,
//     mousewheelControl: true,
//     parallax: true,
//     speed: 600,
// })



    let swiper = new Swiper(".swiper-container",{
      // direction: "vertical",
       slidesPerView: 3,
      //  spaceBetween: 0,
      mousewheel: {
        invert: true
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      mousewheel: false,
        keyboard: true,
    });


    let swiper2 = new Swiper(".swiper-container2",{
  // direction: "vertical",
    slidesPerView: 2,
    spaceBetween: 20,
  mousewheel: {
    invert: true
  },
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});