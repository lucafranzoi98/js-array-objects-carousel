const imgCarouselEl = document.getElementById("img-carousel");
const beforeButtonEl = document.querySelector(".fa-chevron-left");
const afterButtonEl = document.querySelector(".fa-chevron-right");
const imagesEl = document.getElementById("images");

const photos = [
   {path: "./assets/img/1.jpg"},
   {path: "./assets/img/2.jpg"},
   {path: "./assets/img/3.jpg"},
   {path: "./assets/img/4.jpg"},
   {path: "./assets/img/5.jpg"},
]

// Main img
let i = 0; // i is the position in the array
const imgEl = document.createElement("img");
imgEl.src = `${photos[i].path}`; // add src dynamically
imgCarouselEl.append(imgEl);

// Secondary imgs
photos.forEach((photo, i) => {
   const secImgEl = document.createElement("img");
   secImgEl.src = `${photos[i].path}`; // add src dynamically
   secImgEl.style.width = `calc(100% / ${photos.length})`;
   imagesEl.append(secImgEl);
})

beforeButtonEl.addEventListener("click", function(){
   i--;
   imgEl.src = `${photos[i < 0 ?  i = photos.length - 1 : i].path}`;
   // Ternary operator to have a loop (skip to first img to last one)
})

afterButtonEl.addEventListener("click", function(){
   i++;   
   imgEl.src = `${photos[i > photos.length - 1 ? i = 0 : i].path}`;
   // Ternary operator to have a loop (skip to last img to first one)
})

