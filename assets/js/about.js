// const lenis = new Lenis({
//     duration: 1,  
//     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
// })

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   ScrollTrigger.update();
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

// gsap
gsap.registerPlugin(ScrollTrigger);

var mq = window.matchMedia("(min-width:1370px)");

if (mq.matches){
  const tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec1",
        start: "top top",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 1),
        // end: "bottom 100%",
        // markers: true,
        pin: ".sec1",
        scrub: 5,
    },
  })
  
  tl1.fromTo(".img1",{x:"0%"},{x:"-50%"})
}

// tl1.fromTo(".img1",{x:"-50%"},{x:"-100%"})
