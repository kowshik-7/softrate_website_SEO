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


const tl1 = gsap.timeline({
    scrollTrigger:{
        trigger: ".sec1",
        start: "20% 10%",
        // end:"center 0%",
        end: "+=" + (window.innerHeight * 0.5),
        // markers:true,
        pin: ".sec1",
        scrub: 1,
    },
})

// tl1.to(".sec1btn",{scale:50})
//     .to(".sec1btn a",{color:"#131623"},"+=0")

tl1.fromTo('.sec1btn',{scale:1},{scale:2})
    .fromTo('.sec1btn a',{color:"white"},{color:"#131623"})
    .fromTo('.sec1btn',{scale:2},{scale:10})
    .fromTo('.sec1btn',{scale:10},{scale:20})
    .fromTo('.sec1btn',{scale:20},{scale:40,y:100})
    .fromTo('.sec1btn',{scale:40},{scale:50})

  //   const tl2 = gsap.timeline({
  //     scrollTrigger:{
  //         trigger: ".sec1",
  //         start: "20% 10%",
  //         // end:"center 0%",
  //         end: "+=" + (window.innerHeight * 0.5),
  //         // markers:true,
  //         // pin: ".sec1",
  //         scrub: 1,
  //     },
  // })

  // tl2.to('.sec1Text',{y: -500,scale: 5})


  const mm = gsap.matchMedia();

mm.add("(max-width:600px)",()=>{

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

})




// color code copy 

// Get references to all paragraphs with the class "paragraphToCopy"
const paragraphsToCopy = document.querySelectorAll('#paragraphToCopy');

// Add a click event listener to each paragraph
paragraphsToCopy.forEach(function(paragraph) {
    paragraph.addEventListener('click', function() {
        // Create a new text area element
        const textArea = document.createElement('textarea');
        textArea.value = paragraph.innerText;

        // Append the text area to the document
        document.body.appendChild(textArea);

        // Select the text inside the text area
        textArea.select();

        // Execute the copy command to copy the selected text to the clipboard
        document.execCommand('copy');

        // Remove the text area from the document
        document.body.removeChild(textArea);

        // Optionally, provide some visual feedback (e.g., changing the paragraph text)
        paragraph.innerText = 'Copied!';
    });
});



// function copyColorCode(event) {
//   // const colorDisplay = event.target.previousElementSibling;
//   const colorDisplay = document.getElementById("color-display");
//   const colorCode = colorDisplay.innerText;

//   // Create a temporary input element to copy the color code
//   const tempInput = document.createElement("input");
//   tempInput.value = colorCode;
//   document.body.appendChild(tempInput);
//   tempInput.select();
//   document.execCommand("copy");
//   document.body.removeChild(tempInput);

//   alert("Color code copied to clipboard: " + colorCode);
// }

// // Add click event listeners to all copy buttons
// const copyButtons = document.querySelectorAll(".copy-button");
// copyButtons.forEach(button => {
//   button.addEventListener("click", copyColorCode);
// });


// copy button 1

function copyColorCode1() {
  const colorDisplay = document.getElementById("color-display1");
  const colorCode = colorDisplay.innerText;

  // Create a temporary input element to copy the color code
  const tempInput = document.createElement("input");
  tempInput.value = colorCode;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // alert("Color code copied to clipboard: " + colorCode);
}

// Add a click event listener to the copy button
document.getElementById("copy-button1").addEventListener("click", copyColorCode1);



// copy button 2

function copyColorCode2() {
  const colorDisplay = document.getElementById("color-display2");
  const colorCode = colorDisplay.innerText;

  // Create a temporary input element to copy the color code
  const tempInput = document.createElement("input");
  tempInput.value = colorCode;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // alert("Color code copied to clipboard: " + colorCode);
}

// Add a click event listener to the copy button
document.getElementById("copy-button2").addEventListener("click", copyColorCode2);




// copy button 3

function copyColorCode3() {
  const colorDisplay = document.getElementById("color-display3");
  const colorCode = colorDisplay.innerText;

  // Create a temporary input element to copy the color code
  const tempInput = document.createElement("input");
  tempInput.value = colorCode;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // alert("Color code copied to clipboard: " + colorCode);
}

// Add a click event listener to the copy button
document.getElementById("copy-button3").addEventListener("click", copyColorCode3);




// copy button 1

function copyColorCode4() {
  const colorDisplay = document.getElementById("color-display4");
  const colorCode = colorDisplay.innerText;

  // Create a temporary input element to copy the color code
  const tempInput = document.createElement("input");
  tempInput.value = colorCode;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  // alert("Color code copied to clipboard: " + colorCode);
}

// Add a click event listener to the copy button
document.getElementById("copy-button4").addEventListener("click", copyColorCode4);
