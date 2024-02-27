const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let currentIndex = 0;
const banner = document.getElementById("banner");
const tagLine = document.getElementById("tagLine");
const image = document.querySelector(".banner-img");
const dot = document.querySelectorAll('.dot_selected');


// flèches gauche et droite 
let arrow_left = document.getElementById("prevSlide");
let arrow_right = document.getElementById("nextSlide");
// fin flèches gauche et droite 


// permet de cliquer sur les flèches 
arrow_left.addEventListener("click", () => {
  console.log("prevSlide");
  prevSlide();
  console.log(currentIndex);
});
  
arrow_right.addEventListener("click", () => {
  console.log("nextSlide");
  nextSlide();
  console.log(currentIndex);
});
// fin permet de cliquer sur les flèches


// pour faire défiler les images
function updatecarousel() {
  image.src = `./images/${slides[currentIndex].image}`;
  tagLine.innerHTML = slides[currentIndex].tagLine;
}
// fin pour faire défiler les images


function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updatecarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updatecarousel();
}

function createDots() {
  for (const slide of slides) {
    const dot = document.createElement("span");
    dot.className = "dot";
    dot.appendChild(dot);
  }
}