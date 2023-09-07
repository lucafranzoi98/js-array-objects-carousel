const imgCarouselEl = document.getElementById("img-carousel");
const beforeButtonEl = document.querySelector(".fa-chevron-left");
const afterButtonEl = document.querySelector(".fa-chevron-right");

const photos = [
   {path: "./assets/img/1.jpg"},
   {path: "./assets/img/2.jpg"},
   {path: "./assets/img/3.jpg"},
   {path: "./assets/img/4.jpg"},
   {path: "./assets/img/5.jpg"},
]

let i = 0;
const imgEl = document.createElement("img");
imgEl.src = `${photos[i].path}`;
imgCarouselEl.append(imgEl);

beforeButtonEl.addEventListener("click", function(){
   i--;   
   if (i < 0) {
      i = photos.length - 1;
   }
   imgEl.src = `${photos[i].path}`;
})

afterButtonEl.addEventListener("click", function(){
   i++;   
   if (i > photos.length -1) {
      i = 0;
   }
   imgEl.src = `${photos[i].path}`;
})

