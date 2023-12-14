AOS.init();

// lenins


const lenis = new Lenis({
    duration: 1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
})

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  ScrollTrigger.update();
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// gsap
gsap.registerPlugin(ScrollTrigger);



gsap.to(".sec1",{
    
    scrollTrigger: {
        trigger: ".heroSec",
        start: "top 0%",
        // end: "center 50%",
        end: "+=" + (window.innerHeight * 1),
        // markers: true,
        pin: ".sec1",  
        scrub: 3,
    },
})


const tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".heroSec",
        start: "top top",
        end:"center 10%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".sec1",
        scrub: true,
    },
})

tl1.to(".heroLeftContent",{y:"-23%"})


const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".heroSec",
        start: "top top",
        end:"center 20%",
        // end: "+=" + (window.innerHeight * 0.1),
        // markers: true,
        // pin: ".sec1",
        scrub: 1,
    },
})

tl2.to(".heroRightContent",{x:"-15%"})


// color for wrap

// gsap.to(".leftBox",{
    
//     backgroundColor: "#eb287b",
//     // backgroundColor: "#ae0288",
//     scrollTrigger: {
//         trigger: ".heroSec",
//         start: "top 0%",
//         // end: "center 50%",
//         end: "+=" + (window.innerHeight * 1), 
//         // markers: true,
//         // pin: ".sec1",  
//         scrub: 2,
//     },
// })


// gsap.to(".rightBox",{
    
//     backgroundColor: "#eb287b",
//     // backgroundColor: "#ae0288",
//     scrollTrigger: {
//         trigger: ".sec1",
//         start: "top 0%",
//         // end: "center 50%",
//         end: "+=" + (window.innerHeight * 1),
//         // markers: true,
//         // pin: ".sec1",  
//         scrub: 2,
//     },
// })


const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".heroSec",
        start: "top top",
        end:"center 20%",
        // end: "+=" + (window.innerHeight * 0.1),
        // markers: true,
        // pin: ".sec1",
        scrub: 1,
    },
})


const tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".heroSec",
        start: "top top",
        end:"center 20%",
        // end: "+=" + (window.innerHeight * 0.1),
        // markers: true,
        // pin: ".sec1",
        scrub: 1,
    },
})

tl3.to(".leftBox",{x:"",backgroundColor: "#ff87e5db",})
tl4.to(".rightBox",{x:"",backgroundColor: "#ff87e5db",})