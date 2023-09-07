const carouselEl = document.getElementById("img-carousel");
const beforeButtonEl = document.querySelector(".fa-chevron-left");
const afterButtonEl = document.querySelector(".fa-chevron-right");
const secondaryImgContainer = document.getElementById("images");

const photos = [
   {path: "./assets/img/1.jpg"},
   {path: "./assets/img/2.jpg"},
   {path: "./assets/img/3.jpg"},
   {path: "./assets/img/4.jpg"},
   {path: "./assets/img/5.jpg"},
]

let i = 0;  // i is the position in the array = active img

// Main img
const imgEl = document.createElement("img");
imgEl.src = `${photos[i].path}`; // add src dynamically
carouselEl.append(imgEl);

// Secondary imgs
photos.forEach((photo, index) => {
   const secondaryImgEl = document.createElement("img");
   secondaryImgEl.src = `${photos[index].path}`;   // add src dynamically
   secondaryImgEl.style.width = `calc(100% / ${photos.length})`;   
   (index == i ? "" : secondaryImgEl.classList.toggle("inactive"));  // set inactive for all the photos expect the first
   secondaryImgContainer.append(secondaryImgEl);
});

const secondaryImgs = document.querySelectorAll("#images > img");

/**
 * Toggle the class inactive of an element
 * @param {string} element 
 */
function toggleInactive (element) {
   element.classList.toggle("inactive");
}

beforeButtonEl.addEventListener("click", function(){
   toggleInactive(secondaryImgs[i]);
   i--;
   imgEl.src = `${photos[i < 0 ?  i = photos.length - 1 : i].path}`; // Ternary operator to have a loop (skip to first img to last one)
   toggleInactive(secondaryImgs[i])
});

afterButtonEl.addEventListener("click", function(){
   toggleInactive(secondaryImgs[i]);
   i++;   
   imgEl.src = `${photos[i > photos.length - 1 ? i = 0 : i].path}`;  // Ternary operator to have a loop (skip to last img to first one)
   toggleInactive(secondaryImgs[i])
});

