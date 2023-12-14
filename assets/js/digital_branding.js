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


var mq = window.matchMedia("(min-width:1200px)");

if (mq.matches){
  const tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec1",
        start: "top top",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 1),
        // markers:true,
        pin: ".sec1",
        scrub: 1,
    },
})


.to(".sec1Content",{opacity:"0"},"0")
// .to(".sec1Box",{scale:"1",delay:"1"},"0")
.to(".sec1Box",{scale:"0.8"})

// .to(".icon1",{x:"650px",y:"-250"})

// .to(".sec1Box",{borderRadius: 25})

// tl1.to(".icon2",{x:"500px",y:"-250"})

// .to(".sec1Box",{borderRadius: 0})

// tl1.to(".icon3",{x:"350px",y:"-250"})
// .to(".cal",{y:"25px"})
// .to(".sec1Box",{height: 150})

// tl1.to(".icon4",{x:"200px",y:"-250"})
// .to(".sec1Box",{height: 400})
// .to(".cal",{y:0})

// tl1.to(".icon5",{x:"0px",y:"-250"})
// .to(".sec1Box",{width: 900})

// tl1.to(".icon6",{x:"-200px",y:"-250"})
// .to(".sec1Box p",{opacity: "0"})
// .to(".sec1Box p",{width: 800})
// .to(".sec1Box p",{opacity: "1"})
// .to(".noCal",{scale: "1"})

// tl1.to(".icon8",{x:"-350px",y:"-250"})
// .to(".sec1Box p",{width: 300})
// .to(".sec1Box",{width: 400})

// tl1.to(".icon9",{x:"-500px",y:"-250"})
// .to(".sec1Box",{borderRadius: 25})


// tl1.to(".icon10",{x:"-650px",y:"-250"})
.to(".sec1Box",{borderRadius:"50%"})


.to(".icon",{opacity:"0"})
.to(".sec1Box",{scale:"5.5",y:"45px"})
// .to(".sec1Box",{y:"50px"})
// .to(".sec1Box",{scale:"5.5"})
.fromTo(".sec1Box",{lineHeight:"1.8"},{lineHeight:"0.8"})
.to(".sec1Box",{width:"310px"})
.to(".sec1Box",{lineHeight:"0.2"})
// .to(".sec1Box p",{opacity:"0"},"1.5")

}else{
  const tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec1",
        start: "top top",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 1),
        // markers:true,
        pin: ".sec1",
        scrub: 1,
    },
})


.to(".sec1Content",{opacity:"0"},"0")

.to(".sec1Box",{scale:"0.8"})

.to(".sec1Box",{borderRadius: 25})

.to(".icon",{opacity:"0"})
.to(".sec1Box",{scale:"5.3"})

// .to(".sec2",{y: -300})


}