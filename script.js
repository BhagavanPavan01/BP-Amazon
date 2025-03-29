// JAVASCRIPT FILE: script.js

let slideIndex = 0;
const slides = document.querySelectorAll(".slide-container img");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? "block" : "none";
    });
}

function moveSlide(step) {
    slideIndex += step;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlides();
}

showSlides();const slider = document.querySelector(".product-slides");
const products = document.querySelectorAll(".product");
const totalProducts = products.length;
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let index = 0;
let autoSlide;

// Function to Move Slide
function moveSlide(direction) {
    index += direction;
    if (index >= totalProducts) {
        index = 0; // Loop to first slide
    } else if (index < 0) {
        index = totalProducts - 1; // Loop to last slide
    }
    updateSlide();
}

// Update Slide Position
function updateSlide() {
    const slideWidth = products[0].offsetWidth;
    slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

// Auto-Slide Every 3 Seconds
function startAutoSlide() {
    autoSlide = setInterval(() => moveSlide(1), 3000);
}

// Pause Auto-Slide on Hover
document.querySelector(".product-slider").addEventListener("mouseenter", () => {
    clearInterval(autoSlide);
});
document.querySelector(".product-slider").addEventListener("mouseleave", startAutoSlide);

// Swipe Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

slider.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
        moveSlide(1); // Swipe Left → Next Slide
    } else if (touchEndX - touchStartX > 50) {
        moveSlide(-1); // Swipe Right → Previous Slide
    }
});

// Button Click Events
prevButton.addEventListener("click", () => moveSlide(-1));
nextButton.addEventListener("click", () => moveSlide(1));

// Initialize
startAutoSlide();

