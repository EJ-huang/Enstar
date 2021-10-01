
gsap.registerPlugin(ScrollTrigger);
gsap.to('.star_1 .img-top',{
    scrollTrigger: {
        trigger:'.box',
        toggleClass: "active",
        endTrigger: '.star',
        start: '20px 80%',
        end: '+=350',
        toggleActions: 'restart  reverse ',
        markers: true
    },
    x: 620,
    duration: 2
});
gsap.to('.star_2',{
    scrollTrigger: {
        trigger:'.box',
        start: '20px 80%',
        toggleActions: 'restart pause reverse pause',
    },
    x: 0,
    rotation: 360,
    duration: 2
});
gsap.to('.star_3',{
    scrollTrigger: {
        trigger:'.box',
        toggleClass: "active",
        start: '20px 80%',

        toggleActions: 'restart  reverse ',
    },
});


// const btn = document.getElementById('btn');
// btn.addEventListener("mouseenter", () => {
//     const t = gsap.timeline({defaults:{ ease:'elastic', duration:1 }});
//     t.to('.box-1',{
//          x:100,
//     })
//     .to('.box-2', {
//         y:100,
//     })

//     gsap.to('.box-1',{direction:1, x:100, stagger:0.5});
// })