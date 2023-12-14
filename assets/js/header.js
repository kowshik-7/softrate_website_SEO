/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
        // Add show-icon to show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')
 
 /*=============== SHOW DROPDOWN MENU ===============*/
 const dropdownItems = document.querySelectorAll('.dropdown__item')
 
 // 1. Select each dropdown item
 dropdownItems.forEach((item) =>{
     const dropdownButton = item.querySelector('.dropdown__button') 
 
     // 2. Select each button click
     dropdownButton.addEventListener('click', () =>{
         // 7. Select the current show-dropdown class
         const showDropdown = document.querySelector('.show-dropdown')
         
         // 5. Call the toggleItem function
         toggleItem(item)
 
         // 8. Remove the show-dropdown class from other items
         if(showDropdown && showDropdown!== item){
             toggleItem(showDropdown)
         }
     })
 })
 
 // 3. Create a function to display the dropdown
 const toggleItem = (item) =>{
     // 3.1. Select each dropdown content
     const dropdownContainer = item.querySelector('.dropdown__container')
 
     // 6. If the same item contains the show-dropdown class, remove
     if(item.classList.contains('show-dropdown')){
         dropdownContainer.removeAttribute('style')
         item.classList.remove('show-dropdown')
     } else{
         // 4. Add the maximum height to the dropdown content and add the show-dropdown class
         dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
         item.classList.add('show-dropdown')
     }
 }
 
 /*=============== DELETE DROPDOWN STYLES ===============*/
 const mediaQuery = matchMedia('(min-width: 1118px)'),
       dropdownContainer = document.querySelectorAll('.dropdown__container')
 
 // Function to remove dropdown styles in mobile mode when browser resizes
 const removeStyle = () =>{
     // Validate if the media query reaches 1118px
     if(mediaQuery.matches){
         // Remove the dropdown container height style
         dropdownContainer.forEach((e) =>{
             e.removeAttribute('style')
         })
 
         // Remove the show-dropdown class from dropdown item
         dropdownItems.forEach((e) =>{
             e.classList.remove('show-dropdown')
         })
     }
 }
 
 addEventListener('resize', removeStyle)
 

// navbar 

 var a1 = document.getElementById("a1");
 var a2 = document.getElementById("a2");
 var img = document.getElementById("img");
 var img1 = document.getElementById("img1");
 var img2 = document.getElementById("img2");

 a1.addEventListener("mouseover",()=>{
    img1.style.opacity="1";
    img.style.opacity="0";
 })
 a2.addEventListener("mouseover",()=>{
    img2.style.opacity="1";
    img.style.opacity="0";
 })


 a1.addEventListener("mouseout",()=>{
    img1.style.opacity="0";
    img.style.opacity="1";
 })
 a2.addEventListener("mouseout",()=>{
    img2.style.opacity="0";
    img.style.opacity="1";
 })


//  navbar app

var app1txt = document.getElementById("app1txt");
var app2txt = document.getElementById("app2txt");
var app3txt = document.getElementById("app3txt");
var app1 = document.getElementById("app1");
var app2 = document.getElementById("app2");
var app3 = document.getElementById("app3");

app1txt.addEventListener("mouseover",()=>{
    app1.style.opacity="1";
})

app1txt.addEventListener("mouseout",()=>{
    app1.style.opacity="0";
})



app2txt.addEventListener("mouseover",()=>{
   app2.style.opacity="1";
})

app2txt.addEventListener("mouseout",()=>{
    app2.style.opacity="0";
})


app3txt.addEventListener("mouseover",()=>{
   app3.style.opacity="1";
})

app3txt.addEventListener("mouseout",()=>{
    app3.style.opacity="0";
 })

// navbar games

var game1txt = document.getElementById("game1txt");
var game2txt = document.getElementById("game2txt");

var game1 = document.getElementById("game1");
var game2 = document.getElementById("game2");

game1txt.addEventListener("mouseover",()=>{
    game1.style.opacity="1";
})

game1txt.addEventListener("mouseout",()=>{
    game1.style.opacity="0";
})


game2txt.addEventListener("mouseover",()=>{
    game2.style.opacity="1";
})

game2txt.addEventListener("mouseout",()=>{
    game2.style.opacity="0";
})