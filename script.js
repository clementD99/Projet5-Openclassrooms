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
const dots = document.querySelector(".dots");

// flèches gauche et droite
const arrow_left = document.getElementById("prevSlide");
const arrow_right = document.getElementById("nextSlide");
// fin flèches gauche et doite


// permet de cliquer sur les flèches 
arrow_left.addEventListener("click", () => {
  prevSlide();
});

arrow_right.addEventListener("click", () => {
  nextSlide();
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
  updateDotSelected();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updatecarousel();
  updateDotSelected();
}

function createDots() {
  slides.forEach((slide, index) => {
    const dot = document.createElement("span");
    if (index === 0) {
      dot.className = "dot dot_selected";
    } else {
      dot.className = "dot";
    }
    dots.appendChild(dot);
  });
}


function updateDots(currentIndex) {
  const dots = document.querySelectorAll('.dot');
  
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot');
    }
  });
}

dots.addEventListener("click", () => {
  updateImage(index);
  updateDots(index);
});

function updateImage(index) {
  currentIndex = index;
  image.src = `./images/${slides[currentIndex].image}`;
  tagLine.innerHTML = slides[currentIndex].tagLine;
}

// Fonction pour mettre à jour l'index et la classe dot_selected
function updateDotSelected() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    dot.classList.toggle('dot_selected', index === currentIndex);
  });
}
// fin Fonction pour mettre à jour l'index et la classe dot_selected

createDots();

