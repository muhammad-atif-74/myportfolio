// for showing loader 
let loader = document.querySelector(".loader");
let wrapper = document.querySelector(".wrapper");

setTimeout(() => {
    wrapper.classList.remove("hide");
    loader.classList.add("hide");
}, 4000);

let upArrow = document.getElementById("upArrow");
window.addEventListener("scroll",()=>{
    if (scrollY > 190) {
        upArrow.style.display = "block";
    }
    else {
        upArrow.style.display = "none";
    }
})

let bars = document.getElementById("bars");
let xmark = document.getElementById("xmark");
let nav = document.querySelector(".nav");
bars.addEventListener("click",()=>{
    nav.classList.remove("hide");
    xmark.style.display = "block";
    bars.style.display = "none";
})
xmark.addEventListener("click",()=>{
    // nav.style.top = "-500px";
    nav.classList.add("hide");
    bars.style.display = "block";
    xmark.style.display = "none";
})
// let image = document.querySelectorAll(".image");
// image.forEach(element => {
//     element.addEventListener("click",()=>{
//         element.classList.add = "full-screen-container";
//         element.childNodes[1].classList.add = "fullScreen"
//         console.log()
//         let img = element.querySelector(".image img")
//         img.classList.add = "fullScreen"
//         // console.log(img.classList)
//         // console.log(element.classList)
//     })
// });
// let img = document.querySelector("#img");

// console.log(img)

// img.addEventListener("click",(e)=>{
//     img.classList.add = "fullScreen";
//     img.parentElement.classList.add = "full-screen-container"
// })

function fullView(imgLink){
    document.getElementById("fullScreen").src = imgLink;
    document.getElementById("fullScreenView").style.display = "flex";
}
let closeFS = document.getElementById("close-fs");
function closeFullView(){
    console.log("close")
    document.getElementById("fullScreenView").style.display = "none";
}