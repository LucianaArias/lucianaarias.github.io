var clickMenu=document.getElementById("desplegar");
var clickMenu1=document.getElementById("contraer");

clickMenu.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="-10px";
    document.getElementById("desplegable").style.opacity="1";
    document.getElementById("desplegable").style.visibility="visible";
    document.getElementById("desplegar").style.visibility="hidden";
    document.getElementById("contraer").style.visibility="visible";
});

clickMenu1.addEventListener("click",()=>{
    document.getElementById("desplegable").style.top="-70px";
    document.getElementById("desplegable").style.opacity="0";
    document.getElementById("desplegable").style.visibility="hidden";
    document.getElementById("contraer").style.visibility="hidden";
    document.getElementById("desplegar").style.visibility="visible";
})


const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;

const nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {
     curSlide++;

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


const nextSlide2 = document.querySelector(".btn-next");


let curSlide1 = 0;

let maxSlide = slides.length - 1;


nextSlide.addEventListener("click", function () {
 
  if (curSlide1 === maxSlide) {
    curSlide1 = 0;
  } else {
    curSlide1++;
  }


  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide1)}%)`;
  });
});


const prevSlide = document.querySelector(".btn-prev");


prevSlide.addEventListener("click", function () {

  if (curSlide1 === 0) {
    curSlide1 = maxSlide;
  } else {
    curSlide1--;
  }

  
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide1)}%)`;
  });
});