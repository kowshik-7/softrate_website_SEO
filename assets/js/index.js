gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


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


// ==========================  CURSOR ==========================

// var cursor = document.querySelector(".cursor"),
//     cusorScale = document.querySelectorAll('.cusorScale'),
//     mouseX = 0,
//     mouseY = 0
// console.log(cusorScale);
// gsap.to({},0.016,{
//     repeat: -1,

//     onRepeat: function(){
//         gsap.set(cursor,{
//             css: {
//                 left: mouseX,
//                 top: mouseY
//             }
//         })
//     }
// });

// window.addEventListener("mousemove",function(e){
//     mouseX = e.clientX;
//     mouseY = e.clientY
// })

// //====================== Scale ==================

// console.log(cursor);

// // meta logo scroll

// gsap.registerPlugin(ScrollTrigger);

// cusorScale.forEach((link) => {
//     link.addEventListener("mouseleave", () => {
//         cursor.classList.remove('grow');
//         cursor.classList.remove('smallGrow');
//     });
//     link.addEventListener("mousemove", () => {
//         cursor.classList.add('grow');
//         if(link.classList.contains('small')){
//             cursor.classList.remove('grow');
//             cursor.classList.add('smallGrow');
//         } 
//         else {
//             cursor.classList.remove('smallGrow');
//             cursor.classList.add('grow');
//             // cursor.classList.add('wordZoom')
//         }
        
//     });
// });

// wordScale.forEach((link) => {
//     link.addEventListener("mouseleave", () => {
//         cursor.classList.remove('wordZoom')

//     });
//     link.addEventListener("mousemove", () => {
//         cursor.classList.add('wordZoom');
        
//     });
// });

console.log(cursor);

var mq = window.matchMedia("(min-width:1300px)");

if (mq.matches){

const tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 50%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        pin: ".sec1",
        scrub: 1,
    },
})
const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 50%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        scrub: 1,
    },
})

const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 50%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})

const tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 50%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})

const tl5 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 50%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})

const tl6 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 50%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})
const tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 50%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})
const tl8 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 50%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})

tl1.to(".facebook",{transform:"translate(0,0)",opacity:"0"})
tl2.to(".googleAds",{transform:"translate(0,0)",opacity:"0"})
tl3.to(".analytics",{transform:"translate(0,0)",opacity:"0"})
tl4.to(".meta",{transform:"translate(0,0)",opacity:"0"})
tl5.to(".ai",{transform:"translate(0,0)",opacity:"0"})
tl6.to(".html",{transform:"translate(0,0)",opacity:"0"})
tl7.to(".desk",{transform:"translate(0,0)",opacity:"0"})
tl8.to(".invoices",{transform:"translate(0,0)",opacity:"0"})

// hero section heading
const text1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "bottom 50%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})
text1.to(".textHead",{y:-600})


// star scroll
const star1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 40%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 1),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})
const star2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 40%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 1),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})
const star3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 40%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 1),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})
const star4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".starIcon",
        start: "center 40%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 1),
        // markers:true,
        // pin: ".sec1",
        scrub: 1,
    },
})

star1.to("#star1",{fontSize:"50",opacity: 1,rotatio:360})
star2.to("#star2",{fontSize:"50",opacity: 1,rotatio:360})
star3.to("#star3",{fontSize:"50",opacity: 1,rotatio:360})
star4.to("#star4",{fontSize:"50",opacity: 1,rotatio:360})




// section 2
const star1sec2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec1",
        start: "bottom 70%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        // pin: ".workFlow",    
        scrub: 1,
    },
})
const star2sec2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec1",
        start: "bottom 70%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // end: "bottom 0%",
        // markers:true,
        // pin: ".workFlow",    
        scrub: 1,
    },
})
const star3sec2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec1",
        start: "bottom 70%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // end: "bottom 0%",
        // markers:true,
        // pin: ".workFlow",    
        scrub: 1,
    },
})
const star4sec2 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec1",
        start: "bottom 70%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // end: "bottom 0%",
        // markers:true,
        // pin: ".workFlow",    
        scrub: 1,
    },
})

star1sec2.fromTo("#star1",{y:"0%",x:"0%"},{y:"77.74%",x:"-32.43%"})
.to("#star1",{fontSize:50})
star2sec2.fromTo("#star2",{y:"0%",x:"0%"},{y:"77.8%",x:"-10.86%"})
.to("#star2",{fontSize:50})

star3sec2.fromTo("#star3",{y:"0%",x:"0%"},{y:"77.8%",x:"10.86%"})
.to("#star3",{fontSize:50})

star4sec2.fromTo("#star4",{y:"0%",x:"0%"},{y:"77.74%",x:"32.43%"})
.to("#star4",{fontSize:50})



// design

const star1sec3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        start: "top 80%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "bottom 80%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".workFlow",    
        scrub: true,
    },
})

const star2sec3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        start: "top 80%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "bottom 80%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".workFlow",    
        scrub: true,
    },
})


const star3sec3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        start: "top 80%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "bottom 80%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".workFlow",    
        scrub: true,
    },
})


const star4sec3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        start: "top 80%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "bottom 80%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

// star1sec3.to("#star1",{y:"138.74%",x:"-37.43%",fontSize: 50})

// star2sec3.to("#star2",{y:"152.74%",x:"-37.43%",fontSize: 50})

// star3sec3.to("#star3",{y:"166.74%",x:"-37.43%",fontSize: 50})

// star4sec3.to("#star4",{y:"138.74%",x:"-37.43%",opacity: 0,fontSize: 50})

// duplicate

star1sec3.to("#star1",{y:"138.74%",x:"-27.00%",fontSize: 50})

star2sec3.to("#star2",{y:"152.74%",x:"-27.00%",fontSize: 50})

star3sec3.to("#star3",{y:"166.74%",x:"-27.00%",fontSize: 50})

star4sec3.to("#star4",{y:"138.74%",x:"-27.00%",opacity: 0,fontSize: 50})


// extention1

gsap.to(".section2",{
    height: "580px",
    scrollTrigger: {
        trigger: ".section2",
        start: "top 25%",
        end: "center 50%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
    },
})



gsap.to(".section2Content",{
    height: "100%",
    scrollTrigger: {
        trigger: ".section2",
        start: "top 25%",
        end: "center 50%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
    },
})

// shrink1


const star1sec4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        start: "top 25%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "center 70%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

const star2sec4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        start: "top 25%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "center 25%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

const star3sec4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        start: "top 25%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "center 25%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

const star4sec4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".section2",
        start: "top 25%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "center 25%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

star1sec4.to("#star1",{y:"138.74%",x:"-27.00%",rotation:360,fontSize: 50})

star2sec4.to("#star2",{y:"206.74%",x:"-27.00%",rotation:360,fontSize: 50})

star3sec4.to("#star3",{y:"220.74%",x:"-27.00%",rotation:360,fontSize: 50})

star4sec4.to("#star4",{y:"138.74%",x:"-27.00%",rotation:360,fontSize: 50})






// extenstion2


gsap.to(".sec2",{
    height: "580px",
    scrollTrigger: {
        trigger: ".extend",
        start: "17% 5%",
        end: "40% 50%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
    },
})



gsap.to(".technologyPage",{
    height: "100%",
    scrollTrigger: {
        trigger: ".extend",
        start: "17% 5%",
        end: "40% 50%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
    },
})




// extention3


const star3sec5 = gsap.timeline({
    scrollTrigger:{
        trigger: ".businessPage",
        start: "top 0%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "center 35%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

star3sec5.to("#star3",{y:"273.74%",x:"-27.00%",rotation:360,fontSize: 50})


gsap.to(".sec3",{
    height: "650px",
    scrollTrigger: {
        trigger: ".extend",
        start: "90% 100%",
        end: "90% 95%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
    },
})



gsap.to(".businessPage",{
    height: "100%",
    scrollTrigger: {
        trigger: ".extend",
        start: "90% 100%",
        end: "90% 90%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
    },
})


// end animation

const star1sec6 = gsap.timeline({
    scrollTrigger:{
        trigger: ".extend",
        start: "bottom 100%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "bottom 20%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})


const star2sec6 = gsap.timeline({
    scrollTrigger:{
        trigger: ".extend",
        start: "bottom 100%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "bottom 20%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

const star3sec6 = gsap.timeline({
    scrollTrigger:{
        trigger: ".extend",
        start: "bottom 100%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "bottom 20%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

const star4sec6 = gsap.timeline({
    scrollTrigger:{
        trigger: ".extend",
        start: "bottom 100%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "bottom 20%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

star1sec6.to("#star1",{fontSize:50,y:"335.74%",x:"-27.00%",rotation: 360})
.to("#star1",{fontSize:80,y:"335.74%",x:"-2%",rotation: 360})
.to("#star1",{fontSize:50,y:"400.74%",x:"-2%",rotation: 360})

star2sec6.to("#star3",{fontSize:50,y:"335.74%",x:"-27.00%",rotation: 360})
.to("#star3",{fontSize:80,y:"335.74%",x:"-2%",rotation: 360})
.to("#star3",{fontSize:50,y:"400.74%",x:"-2%",rotation: 360})

star3sec6.to("#star2",{fontSize:50,y:"335.74%",x:"-27.00%",rotation: 360})
.to("#star2",{fontSize:80,y:"335.74%",x:"-2%",rotation: 360})
.to("#star2",{fontSize:50,y:"400.74%",x:"-2%",rotation: 360})

star4sec6.to("#star4",{fontSize:50,y:"335.74%",x:"-27.00%",rotation: 360})
.to("#star4",{fontSize:80,y:"335.74%",x:"-2%",rotation: 360})
.to("#star4",{fontSize:50,y:"400.74%",x:"-2%",rotation: 360})


// star client 

const star2sec7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".clients",
        start: "top 25%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "center 60%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

const star3sec7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".clients",
        start: "top 25%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "center 60%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

const star4sec7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".clients",
        start: "top 25%",
        // end:"center 0%",
        // end: "+=" + (window.innerHeight * 1),
        end: "center 60%",
        // end: "bottom 0%",
        // markers:true,
        // pin: ".section2",    
        scrub: true,
    },
})

star4sec7.to("#star1",{fontSize:50,y:"452.74%",x:"-36.43%"})



star2sec7.to("#star3",{fontSize:50,y:"452.74%",x:"10.43%"})



star3sec7.to("#star2",{fontSize:50,y:"474.74%",x:"10.43%"})


// para 

gsap.to(".para1",{
    opacity: 1,
    
    scrollTrigger: {
        trigger: ".clients",
        start: "center 63%",
        end: "center 63%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        pin: ".clients",  
        scrub: 1,
    },
})

gsap.to(".para3",{
    opacity: 1,
    
    scrollTrigger: {
        trigger: ".clients",
        start: "center 64%",
        end: "center 64%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        pin: ".clients",  
        scrub: 1,
    },
})

gsap.to(".para2",{
    opacity: 1,
    
    scrollTrigger: {
        trigger: ".clients",
        start: "center 68%",
        end: "center 68%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        pin: ".clients",  
        scrub: 1,
    },
})

gsap.to(".rightOne",{
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
    
    scrollTrigger: {
        trigger: ".clients",
        start: "center 63%",
        end: "center 63%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        pin: ".clients",  
        scrub: 1,
    },
})

gsap.to(".leftOne",{
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
    
    scrollTrigger: {
        trigger: ".clients",
        start: "center 63%",
        end: "center 63%",
        
        // markers: true,
        pin: ".clients",  
        scrub: 1,
    },
})

gsap.to(".RightTwo",{
    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
    
    scrollTrigger: {
        trigger: ".clients",
        start: "center 63%",
        end: "center 63%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        pin: ".clients",  
        scrub: 1,
    },
})
}
// =================Else Part=================
// else{
//     const tl1 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "center 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             pin: ".sec1",
//             scrub: 1,
//         },
//     })
//     const tl2 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "center 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             scrub: 1,
//         },
//     })
    
//     const tl3 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "center 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
    
//     const tl4 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "center 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
    
//     const tl5 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "center 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
    
//     const tl6 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "center 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
//     const tl7 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "center 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
//     const tl8 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "center 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
    
//     tl1.to(".facebook",{transform:"translate(0,0)",opacity:"0"})
//     tl2.to(".googleAds",{transform:"translate(0,0)",opacity:"0"})
//     tl3.to(".analytics",{transform:"translate(0,0)",opacity:"0"})
//     tl4.to(".meta",{transform:"translate(0,0)",opacity:"0"})
//     tl5.to(".ai",{transform:"translate(0,0)",opacity:"0"})
//     tl6.to(".html",{transform:"translate(0,0)",opacity:"0"})
//     tl7.to(".desk",{transform:"translate(0,0)",opacity:"0"})
//     tl8.to(".invoices",{transform:"translate(0,0)",opacity:"0"})
    
//     // hero section heading
//     const text1 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "bottom 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
//     text1.to(".textHead",{y:-600})

//     // phone expand 
//     // extention1

// gsap.to(".section2",{
//     height: "580px",
//     scrollTrigger: {
//         trigger: ".section2",
//         start: "top 25%",
//         end: "center 50%",
//         // end: "+=" + (window.innerHeight * 1),
//         // markers: true,
//         // pin: ".section2",  
//         scrub: 1,
//     },
// })



// gsap.to(".section2Content",{
//     height: "100%",
//     scrollTrigger: {
//         trigger: ".section2",
//         start: "top 25%",
//         end: "center 50%",
//         // end: "+=" + (window.innerHeight * 1),
//         // markers: true,
//         // pin: ".section2",  
//         scrub: 1,
//     },
// })

// // technology mobile 

// // extenstion2


// gsap.to(".sec2",{
//     height: "580px",
//     scrollTrigger: {
//         trigger: ".extend",
//         start: "17% 5%",
//         end: "40% 50%",
//         // end: "+=" + (window.innerHeight * 1),
//         // markers: true,
//         // pin: ".section2",  
//         scrub: 1,
//     },
// })



// gsap.to(".technologyPage",{
//     height: "100%",
//     scrollTrigger: {
//         trigger: ".extend",
//         start: "17% 5%",
//         end: "40% 50%",
//         // end: "+=" + (window.innerHeight * 1),
//         // markers: true,
//         // pin: ".section2",  
//         scrub: 1,
//     },
// })

// // last extentions  

// gsap.to(".sec3",{
//     height: "650px",
//     scrollTrigger: {
//         trigger: ".extend",
//         start: "90% 100%",
//         end: "90% 95%",
//         // end: "+=" + (window.innerHeight * 1),
//         // markers: true,
//         // pin: ".section2",  
//         scrub: 1,
//     },
// })



// gsap.to(".businessPage",{
//     height: "100%",
//     scrollTrigger: {
//         trigger: ".extend",
//         start: "90% 100%",
//         end: "90% 90%",
//         // end: "+=" + (window.innerHeight * 1),
//         // markers: true,
//         // pin: ".section2",  
//         scrub: 1,
//     },
// })


// }

// ==========GSAP for mobile devices ================

var mq1 = window.matchMedia("(max-width:600px)");

if (mq1.matches){

    // ======Starting Section code


        const tl1 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "center 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            pin: ".sec1", 
            scrub: 1,
        },
    })
    const tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "center 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            scrub: 1,
        },
    })
    
    const tl3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "center 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    
    const tl4 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "center 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    
    const tl5 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "center 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    
    const tl6 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "center 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    const tl7 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "center 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    const tl8 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "center 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    
    tl1.to(".facebook",{transform:"translate(0,0)",opacity:"0"})
    tl2.to(".googleAds",{transform:"translate(0,0)",opacity:"0"})
    tl3.to(".analytics",{transform:"translate(0,0)",opacity:"0"})
    tl4.to(".meta",{transform:"translate(0,0)",opacity:"0"})
    tl5.to(".ai",{transform:"translate(0,0)",opacity:"0"})
    tl6.to(".html",{transform:"translate(0,0)",opacity:"0"})
    // tl7.to(".desk",{transform:"translate(0,0)",opacity:"0"})
    // tl8.to(".invoices",{transform:"translate(0,0)",opacity:"0"})
   
    // hero section heading
    const text1 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "bottom 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    text1.to(".textHead",{y:-600})


        const star1 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "70% 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    const star2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "70% 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    const star3 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "70% 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    const star4 = gsap.timeline({
        scrollTrigger:{
            trigger: ".starIcon",
            start: "70% 50%",
            // end:"center 0%",
            end: "+=" + (window.innerHeight * 0.5),
            // markers:true,
            // pin: ".sec1",
            scrub: 1,
        },
    })
    
    // star1.to("#star1",{fontSize:"50",opacity: 1,rotatio:360})
    // star2.to("#star2",{fontSize:"50",opacity: 1,rotatio:360})
    // star3.to("#star3",{fontSize:"50",opacity: 1,rotatio:360})
    // star4.to("#star4",{fontSize:"50",opacity: 1,rotatio:360})



    // // section 2
    // const star1sec2768 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: ".sec1",
    //         start: "bottom 70%",
    //         end: "+=" + (window.innerHeight * 0.5),
    //         // end:"center 0%",
    //         // end: "bottom 0%",
    //         // markers:true,
    //         // pin: ".workFlow",    
    //         scrub: 1,
    //     },
    // })
    // const star2sec2768 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: ".sec1",
    //         start: "bottom 70%",
    //         // end:"center 0%",
    //         end: "+=" + (window.innerHeight * 0.5),
    //         // end: "bottom 0%",
    //         // markers:true,
    //         // pin: ".workFlow",    
    //         scrub: 1,
    //     },
    // })
    // const star3sec2768 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: ".sec1",
    //         start: "bottom 70%",
    //         // end:"center 0%",
    //         end: "+=" + (window.innerHeight * 0.5),
    //         // end: "bottom 0%",
    //         // markers:true,
    //         // pin: ".workFlow",    
    //         scrub: 1,
    //     },
    // })
    // const star4sec2768 = gsap.timeline({
    //     scrollTrigger:{
    //         trigger: ".sec1",
    //         start: "bottom 70%",
    //         // end:"center 0%",
    //         end: "+=" + (window.innerHeight * 0.5),
    //         // end: "bottom 0%",
    //         // markers:true,
    //         // pin: ".workFlow",    
    //         scrub: 1,
    //     },
    // })

    // star1sec2768.to("#star1",{y:"93.74%",x:0})
    // .to("#star1",{fontSize:50})
    // star2sec2768.to("#star2",{y:"125.8%",x:0})
    // .to("#star2",{fontSize:50})

    // star3sec2768.to("#star3",{y:"160.8%",x:0})
    // .to("#star3",{fontSize:50})

    // star4sec2768.to("#star4",{y:"190.74%",x:0})
    // .to("#star4",{fontSize:50})




    // =======SECTION 2=========
    gsap.to(".section2",{
    height: "580px",
    scrollTrigger: {
        trigger: ".section2",
        start: "top 25%",
        end: "center 50%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
        transmission:0.2
    }
})



gsap.to(".section2Content",{
    height: "100%",
    scrollTrigger: {
        trigger: ".section2",
        start: "top 25%",
        end: "center 50%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
        transmission: "ease-in 0.5"
    }
})

// technology mobile 

// extenstion2


gsap.to(".sec2",{
    height: "580px",
    scrollTrigger: {
        trigger: ".extend",
        start: "17% 5%",
        end: "40% 50%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
    },
})

gsap.to(".technologyPage",{
    height: "100%",
    scrollTrigger: {
        trigger: ".extend",
        start: "17% 5%",
        end: "40% 50%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
    },
})

// last extentions  

gsap.to(".sec3",{
    height: "650px",
    scrollTrigger: {
        trigger: ".extend",
        start: "90% 100%",
        end: "90% 95%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
    },
})
// gsap.to(".sec3",{
//     height: "650px",
//     scrollTrigger: {
//         trigger: ".extend",
//         start: "90% 100%",
//         end: "90% 95%",
//         // end: "+=" + (window.innerHeight * 1),
//         // markers: true,
//         // pin: ".section2",  
//         scrub: 1,
//     },
// })



gsap.to(".businessPage",{
    height: "100%",
    scrollTrigger: {
        trigger: ".extend",
        start: "90% 100%",
        end: "90% 90%",
        // end: "+=" + (window.innerHeight * 1),
        // markers: true,
        // pin: ".section2",  
        scrub: 1,
    },
})

}



// gsap media query

// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm


const mm = gsap.matchMedia();

// mm.add("(max-width: 600px)",()=>{

    // const lenis = new Lenis({
    //     duration: 1,
    //     easing: (t) => Math.min(1, 1.001 - Math.pow(8, -10 * t))
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

    
//     const lenis = new Lenis()

// lenis.on('scroll', ScrollTrigger.update)

// gsap.ticker.add((time)=>{
//   lenis.raf(time * 1000)
// })

// gsap.ticker.lagSmoothing(0)


    // mob star size 


//     const star1 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "70% 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
//     const star2 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "70% 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
//     const star3 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "70% 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
//     const star4 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".starIcon",
//             start: "70% 50%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // markers:true,
//             // pin: ".sec1",
//             scrub: 1,
//         },
//     })
    
//     star1.to("#star1",{fontSize:"50",opacity: 1,rotatio:360})
//     star2.to("#star2",{fontSize:"50",opacity: 1,rotatio:360})
//     star3.to("#star3",{fontSize:"50",opacity: 1,rotatio:360})
//     star4.to("#star4",{fontSize:"50",opacity: 1,rotatio:360})



//     // section 2
//     const star1sec2768 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".sec1",
//             start: "bottom 70%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // end:"center 0%",
//             // end: "bottom 0%",
//             // markers:true,
//             // pin: ".workFlow",    
//             scrub: 1,
//         },
//     })
//     const star2sec2768 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".sec1",
//             start: "bottom 70%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // end: "bottom 0%",
//             // markers:true,
//             // pin: ".workFlow",    
//             scrub: 1,
//         },
//     })
//     const star3sec2768 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".sec1",
//             start: "bottom 70%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // end: "bottom 0%",
//             // markers:true,
//             // pin: ".workFlow",    
//             scrub: 1,
//         },
//     })
//     const star4sec2768 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".sec1",
//             start: "bottom 70%",
//             // end:"center 0%",
//             end: "+=" + (window.innerHeight * 0.5),
//             // end: "bottom 0%",
//             // markers:true,
//             // pin: ".workFlow",    
//             scrub: 1,
//         },
//     })

//     star1sec2768.to("#star1",{y:"83.74%",x:0})
//     .to("#star1",{fontSize:50})
//     star2sec2768.to("#star2",{y:"112.8%",x:0})
//     .to("#star2",{fontSize:50})

//     star3sec2768.to("#star3",{y:"142.8%",x:0})
//     .to("#star3",{fontSize:50})

//     star4sec2768.to("#star4",{y:"172.74%",x:0})
//     .to("#star4",{fontSize:50})

//     // section 3

    
//     const star1sec3768 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".section2",
//             start: "top 50%",
//             // end:"center 0%",
//             // end: "+=" + (window.innerHeight * 1),
//             end: "center 50%",
//             // end: "bottom 0%",
//             // markers:true,
//             // pin: ".workFlow",    
//             scrub: true,
//         },
//     })

//     const star2sec3768 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".section2",
//             start: "top 70%",
//             // end:"center 0%",
//             // end: "+=" + (window.innerHeight * 1),
//             end: "center 50%",
//             // end: "bottom 0%",
//             // markers:true,
//             // pin: ".workFlow",    
//             scrub: true,
//         },
//     })


//     const star3sec3768 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".section2",
//             start: "top 70%",
//             // end:"center 0%",
//             // end: "+=" + (window.innerHeight * 1),
//             end: "center 50%",
//             // end: "bottom 0%",
//             // markers:true,
//             // pin: ".workFlow",    
//             scrub: true,
//         },
//     })


//     const star4sec3768 = gsap.timeline({
//         scrollTrigger:{
//             trigger: ".section2",
//             start: "top 70%",
//             // end:"center 0%",
//             // end: "+=" + (window.innerHeight * 1),
//             end: "center 50%",
//             // end: "bottom 0%",
//             // markers:true,
//             // pin: ".section2",    
//             scrub: true,
//         },
//     })

//     star1sec3768.to("#star1",{y:"200.74%",x:"-37%",opacity: 1,fontSize: 50})


//     star2sec3768.to("#star2",{y:"215.74%",x:"-37%",opacity: 1,fontSize: 50})

//     star3sec3768.to("#star3",{y:"230.74%",x:"-37%",opacity: 1,fontSize: 50})

//     star4sec3768.to("#star4",{y:"200.74%",x:"-37%",opacity: 1,fontSize: 50})


// // star movie to tect after expansion

// const star1sec4 = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".section2",
//         start: "top 25%",
//         // end:"center 0%",
//         // end: "+=" + (window.innerHeight * 1),
//         end: "center 20%",
//         // end: "bottom 0%",
//         // markers:true,
//         // pin: ".section2",    
//         scrub: true,
//     },
// })

// const star2sec4 = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".section2",
//         start: "top 25%",
//         // end:"center 0%",
//         // end: "+=" + (window.innerHeight * 1),
//         end: "center 25%",
//         // end: "bottom 0%",
//         // markers:true,
//         // pin: ".section2",    
//         scrub: true,
//     },
// })

// const star3sec4 = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".section2",
//         start: "top 25%",
//         // end:"center 0%",
//         // end: "+=" + (window.innerHeight * 1),
//         end: "center 25%",
//         // end: "bottom 0%",
//         // markers:true,
//         // pin: ".section2",    
//         scrub: true,
//     },
// })

// const star4sec4 = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".section2",
//         start: "top 25%",
//         // end:"center 0%",
//         // end: "+=" + (window.innerHeight * 1),
//         end: "center 25%",
//         // end: "bottom 0%",
//         // markers:true,
//         // pin: ".section2",    
//         scrub: true,
//     },
// })

// star1sec4.to("#star1",{y:"200.74%",x:"-37.43%",rotation:360,fontSize: 50})

// star2sec4.to("#star2",{y:"274.74%",x:"-37.43%",rotation:360,fontSize: 50})

// star3sec4.to("#star3",{y:"287.74%",x:"-37.43%",rotation:360,fontSize: 50})

// star4sec4.to("#star4",{y:"200.74%",x:"-37.43%",rotation:360,fontSize: 50})



// const star3sec5 = gsap.timeline({
//     scrollTrigger:{
//         trigger: ".businessPage",
//         start: "top 0%",
//         // end:"center 0%",
//         // end: "+=" + (window.innerHeight * 1),
//         end: "center 35%",
//         // end: "bottom 0%",
//         // markers:true,
//         // pin: ".section2",    
//         scrub: true,
//     },
// })

// star3sec5.to("#star3",{y:"346.74%",x:"-37.43%",rotation:360,fontSize: 50})



// })




  // technology

var bgimg = document.getElementById("bgImg");
var webTxt = document.getElementById("webTxt");
var mobileTxt = document.getElementById("mobileTxt");
var softwareTxt = document.getElementById("softwareTxt");
var gameTxt = document.getElementById("gameTxt");

var webImg=document.getElementById("webDesign");
var mobileApp = document.getElementById("mobileApp");
var gameDevelopment = document.getElementById("gameDevelopment");
var softwareDevelopment = document.getElementById("softwaredevelopment");

webTxt.addEventListener('mouseenter',()=>{
    webImg.style.transform="translatex(-80px) translatey(40px) scale(1.5)";
    bgimg.style.opacity="20%"
    mobileApp.style.opacity="0%"
    gameDevelopment.style.opacity="0%"
    softwareDevelopment.style.opacity="0%"

})

webTxt.addEventListener('mouseout',()=>{
    webImg.style.transform="scale(1)";
    bgimg.style.opacity="100%"
    mobileApp.style.opacity="100%"
    gameDevelopment.style.opacity="100%"
    softwareDevelopment.style.opacity="100%"
})

mobileTxt.addEventListener('mouseenter',()=>{
    mobileApp.style.transform="translatex(-10px) translatey(-40px) scale(1.2)";
    bgimg.style.opacity="20%"
    webImg.style.opacity="0%"
    gameDevelopment.style.opacity="0%"
    softwareDevelopment.style.opacity="0%"

})

mobileTxt.addEventListener('mouseout',()=>{
    mobileApp.style.transform="scale(1)";
    bgimg.style.opacity="100%"
    webImg.style.opacity="100%"
    gameDevelopment.style.opacity="100%"
    softwareDevelopment.style.opacity="100%"

})

gameTxt.addEventListener('mouseenter',()=>{
    gameDevelopment.style.transform="translatex(-50px) translatey(10px) scale(1.2)";
    bgimg.style.opacity="20%"
    webImg.style.opacity="0%"
    mobileApp.style.opacity="0%"
    softwareDevelopment.style.opacity="0%"

})

gameTxt.addEventListener('mouseout',()=>{
    gameDevelopment.style.transform="scale(1)";
    bgimg.style.opacity="100%"
    mobileApp.style.opacity="100%"
    webImg.style.opacity="100%"
    softwareDevelopment.style.opacity="100%"
})

softwareTxt.addEventListener('mouseenter',()=>{
    softwareDevelopment.style.transform="translatex(-100px) translatey(-50px) scale(1.6)";
    bgimg.style.opacity="20%"
    webImg.style.opacity="0%"
    gameDevelopment.style.opacity="0%"
    mobileApp.style.opacity="0%"

})

softwareTxt.addEventListener('mouseout',()=>{
    softwareDevelopment.style.transform="scale(1)";
    bgimg.style.opacity="100%"
    mobileApp.style.opacity="100%"
    webImg.style.opacity="100%"
    gameDevelopment.style.opacity="100%"
})

var businessBg = document.getElementById("businessBg"); 
var branding = document.getElementById("branding");
var businessConsultancy = document.getElementById("businessConsultancy");
var digitalMarketing = document.getElementById("digitalMarketing");
var seo = document.getElementById("seo");
var strategyIdea = document.getElementById("strategyIdea");
var businessBg1 = document.getElementById("businessBg1");
var businessBg2 = document.getElementById("businessBg2");
var businessBg3 = document.getElementById("businessBg3");
var businessBg4 = document.getElementById("businessBg4");

branding.addEventListener('mouseenter',()=>{
    businessBg1.style.opacity="1";
    businessBg.style.opacity="0";
})
branding.addEventListener('mouseout',()=>{
    businessBg1.style.opacity="0";
    businessBg.style.opacity="1";

})

businessConsultancy.addEventListener('mouseenter',()=>{
    businessBg2.style.opacity="1";
    businessBg.style.opacity="0";
})
businessConsultancy.addEventListener('mouseout',()=>{
    businessBg2.style.opacity="0";
    businessBg.style.opacity="1";

})

digitalMarketing.addEventListener('mouseenter',()=>{
    businessBg3.style.opacity="1";
    businessBg.style.opacity="0";
})
digitalMarketing.addEventListener('mouseout',()=>{
    businessBg3.style.opacity="0";
    businessBg.style.opacity="1";
})

strategyIdea.addEventListener('mouseenter',()=>{
    businessBg4.style.opacity="1";
    businessBg.style.opacity="0";
})
strategyIdea.addEventListener('mouseout',()=>{
    businessBg4.style.opacity="0";
    businessBg.style.opacity="1";
})

seo.addEventListener('mouseenter',()=>{
    businessBg5.style.opacity="1";
    businessBg.style.opacity="0";
})
seo.addEventListener('mouseout',()=>{
    businessBg5.style.opacity="0";
    businessBg.style.opacity="1";
})




// on scroll Event

function reveal() {
    var reveals = document.querySelectorAll(".lineImg");
    var circle = document.querySelectorAll(".circlebg");
    
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", reveal);


window.addEventListener('load', updateAnimation);
window.addEventListener('resize', updateAnimation);



// ==========================  CURSOR ==========================

// var cursor = document.querySelector(".cursor"),
//     mouseX = 0,
//     mouseY = 0

// gsap.to({},0.016,{
//     repeat: -1,

//     onRepeat: function(){
//         gsap.set(cursor,{
//             css: {
//                 left: mouseX,
//                 top: mouseY
//             }
//         })
//     }
// });

// window.addEventListener("mousemove",function(e){
//     mouseX = e.clientX;
//     mouseY = e.clientY
// })