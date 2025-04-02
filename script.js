document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide-container .slide");
    const totalSlides = slides.length;

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? "block" : "none";
        });
    }

    function moveSlide(step) {
        slideIndex += step;
        if (slideIndex >= totalSlides) slideIndex = 0;
        if (slideIndex < 0) slideIndex = totalSlides - 1;
        showSlides();
    }

    function autoSlide() {
        setInterval(() => moveSlide(1), 3000);
    }

    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));

    showSlides();
    autoSlide();
});


document.addEventListener("DOMContentLoaded", function () {
    // Image Slideshow (Banner)
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slide-container img");

    function showSlides() {
        slides.forEach((slide, index) => {
            slide.style.display = (index === slideIndex) ? "block" : "none";
        });
    }

    function moveBannerSlide(step) {
        slideIndex += step;
        if (slideIndex >= slides.length) slideIndex = 0;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        showSlides();
    }

    showSlides();

    // Product Slider
    const slider = document.querySelector(".product-slides");
    const products = document.querySelectorAll(".product");
    const totalProducts = products.length;
    const prevButton = document.querySelector(".product-slider .prev");
    const nextButton = document.querySelector(".product-slider .next");

    let index = 0;
    let autoSlide;

    function moveProductSlide(direction) {
        index += direction;
        if (index >= totalProducts) {
            index = 0;
        } else if (index < 0) {
            index = totalProducts - 1;
        }
        updateProductSlide();
    }

    function updateProductSlide() {
        const slideWidth = products[0].offsetWidth;
        slider.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    function startAutoSlide() {
        autoSlide = setInterval(() => moveProductSlide(1), 3000);
    }

    document.querySelector(".product-slider").addEventListener("mouseenter", () => {
        clearInterval(autoSlide);
    });
    document.querySelector(".product-slider").addEventListener("mouseleave", startAutoSlide);

    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener("touchstart", (e) => {
        touchStartX = e.touches[0].clientX;
    });

    slider.addEventListener("touchend", (e) => {
        touchEndX = e.changedTouches[0].clientX;
        if (touchStartX - touchEndX > 50) {
            moveProductSlide(1);
        } else if (touchEndX - touchStartX > 50) {
            moveProductSlide(-1);
        }
    });

    prevButton.addEventListener("click", () => moveProductSlide(-1));
    nextButton.addEventListener("click", () => moveProductSlide(1));

    startAutoSlide();
});















// document.addEventListener("DOMContentLoaded", function () {
//     // Banner Slider
//     let slideIndex = 0;
//     const slides = document.querySelectorAll(".slide-container .slide");
//     const totalSlides = slides.length;

//     function showSlides() {
//         slides.forEach((slide, index) => {
//             slide.style.display = (index === slideIndex) ? "block" : "none";
//         });
//     }

//     function moveSlide(step) {
//         slideIndex += step;
//         if (slideIndex >= totalSlides) slideIndex = 0;
//         if (slideIndex < 0) slideIndex = totalSlides - 1;
//         showSlides();
//     }

//     function autoSlide() {
//         setInterval(() => moveSlide(1), 3000);
//     }

//     document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
//     document.querySelector(".next").addEventListener("click", () => moveSlide(1));

//     showSlides();
//     autoSlide();

//     // Product Slider
//     const slider = document.querySelector(".product-slides");
//     const products = document.querySelectorAll(".product");
//     const totalProducts = products.length;
//     const prevButton = document.querySelector(".product-slider .prev");
//     const nextButton = document.querySelector(".product-slider .next");

//     let index = 0;
//     let autoSlideProduct;

//     function moveProductSlide(direction) {
//         index += direction;
//         if (index >= totalProducts) {
//             index = 0;
//         } else if (index < 0) {
//             index = totalProducts - 1;
//         }
//         updateSlide();
//     }

//     function updateSlide() {
//         const slideWidth = products[0].offsetWidth;
//         slider.style.transform = `translateX(${-index * slideWidth}px)`;
//     }

//     function startAutoSlideProduct() {
//         autoSlideProduct = setInterval(() => moveProductSlide(1), 3000);
//     }

//     document.querySelector(".product-slider").addEventListener("mouseenter", () => {
//         clearInterval(autoSlideProduct);
//     });
//     document.querySelector(".product-slider").addEventListener("mouseleave", startAutoSlideProduct);

//     let touchStartX = 0;
//     let touchEndX = 0;

//     slider.addEventListener("touchstart", (e) => {
//         touchStartX = e.touches[0].clientX;
//     });

//     slider.addEventListener("touchend", (e) => {
//         touchEndX = e.changedTouches[0].clientX;
//         if (touchStartX - touchEndX > 50) {
//             moveProductSlide(1);
//         } else if (touchEndX - touchStartX > 50) {
//             moveProductSlide(-1);
//         }
//     });

//     prevButton.addEventListener("click", () => moveProductSlide(-1));
//     nextButton.addEventListener("click", () => moveProductSlide(1));

//     startAutoSlideProduct();
// });
