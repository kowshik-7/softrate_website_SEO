gsap.registerPlugin(ScrollTrigger);

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


// workFlow

// const tl1 = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".sec2",
//         start: "top 11%",
//         end:"center 0%",
//         end: "+=" + (window.innerHeight * 2),
//         markers:true,
//         pin: ".sec3",
//         scrub: 1,
//     },
// })

// tl1.fromTo('.One',{x:1200},{x:0})
// .fromTo('.Two',{x:1200},{x:0})
// .fromTo('.Three',{x:1200},{x:0})
// .fromTo('.Four',{x:1200},{x:0})
// .fromTo('.Five',{x:1200},{x:0})
// .fromTo('.Six',{x:1300},{x:0})
// .fromTo('.Seven',{x:1400},{x:0})
// .fromTo('.Eight',{x:1400},{x:0})
// .fromTo('.Nine',{x:1400},{x:0})
// .fromTo('.Ten',{x:1400},{x:0})
// .fromTo('.Eleven',{x:1400},{x:0})
// .fromTo('.Twelve',{x:1400},{x:0})


// // sec4


// const tl2 = gsap.timeline({
//   scrollTrigger:{
//       trigger: ".sec4",
//       start: "top 11%",
//       end:"center 0%",
//       end: "+=" + (window.innerHeight * 1),
//       markers:true,
//       pin: ".sec4",
//       scrub: 1,
//   },
// })


// tl2.fromTo('.First',{y:800},{y:0})
// .fromTo('.Second',{y:800},{y:0})
// .fromTo('.Third',{y:800},{y:0})
// .fromTo('.Fourth',{y:800},{y:0})
// .fromTo('.Fifth',{y:1200},{y:0})
// .fromTo('.Sixth',{y:1200},{y:0})
// .fromTo('.Seventh',{y:1200},{y:0})
// .fromTo('.Eighth',{y:1200},{y:0})


// gsap.to(".left4Content",{
//   y: "890px",
//   scrollTrigger: {
//       trigger: ".sec4",
//       start: "top 5%%",
//       // end: "bottom 95%",
//       end: "+=" + (window.innerHeight * 0.8),
//       markers: true, 
//       scrub: true,
//   },
// })



// gsap for mobile screen


var mq = window.matchMedia("(min-width:1200px)");

if(mq.matches){

  const tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec2",
        start: "top 11%",
        end:"center 0%",
        end: "+=" + (window.innerHeight * 2),
        // markers:true,
        pin: ".sec3",
        scrub: 1,
    },
})

tl1.fromTo('.One',{x:1200},{x:0})
.fromTo('.Two',{x:1200},{x:0})
.fromTo('.Three',{x:1200},{x:0})
.fromTo('.Four',{x:1200},{x:0})
.fromTo('.Five',{x:1200},{x:0})
.fromTo('.Six',{x:1300},{x:0})
.fromTo('.Seven',{x:1400},{x:0})
.fromTo('.Eight',{x:1400},{x:0})
.fromTo('.Nine',{x:1400},{x:0})
.fromTo('.Ten',{x:1400},{x:0})
.fromTo('.Eleven',{x:1400},{x:0})
.fromTo('.Twelve',{x:1400},{x:0})


// sec4


const tl2 = gsap.timeline({
  scrollTrigger:{
      trigger: ".sec4",
      start: "top 11%",
      end:"center 0%",
      end: "+=" + (window.innerHeight * 1),
      // markers:true,
      pin: ".sec4",
      scrub: 1,
  },
})


tl2.fromTo('.First',{y:800},{y:0})
.fromTo('.Second',{y:800},{y:0})
.fromTo('.Third',{y:800},{y:0})
.fromTo('.Fourth',{y:800},{y:0})
.fromTo('.Fifth',{y:1200},{y:0})



gsap.to(".left4Content",{
  y: "890px",
  scrollTrigger: {
      trigger: ".sec4",
      start: "top 5%%",
      // end: "bottom 95%",
      end: "+=" + (window.innerHeight * 0.8),
      // markers: true, 
      scrub: true,
  },
})


}