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
       slidesPerView: 1,
      mousewheel: {
        invert: true
      },
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
