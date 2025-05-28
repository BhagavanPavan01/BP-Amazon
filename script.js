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


// Cart counter functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize cart count
    let cartCount = 0;
    const cartCountElement = document.querySelector('.cart-count');
    
    // Function to update cart count
    function updateCartCount() {
        cartCountElement.textContent = cartCount;
    }
    
    // Example: Add to cart (you would connect this to your actual add-to-cart buttons)
    function addToCart() {
        cartCount++;
        updateCartCount();
        
        // Add animation
        const cartIcon = document.querySelector('.cart-icon');
        cartIcon.classList.add('animate__animated', 'animate__bounce');
        setTimeout(() => {
            cartIcon.classList.remove('animate__animated', 'animate__bounce');
        }, 1000);
    }
    
    // Search functionality
    const searchButton = document.querySelector('.amazon-btn');
    const searchInput = document.querySelector('.amazon-input');
    
    searchButton.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert('Searching for: ' + searchInput.value);
            // In a real app, you would redirect to search results
        }
    });
    
    // Allow search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchButton.click();
        }
    });
    
    // Mobile menu toggle (for smaller screens)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const primaryNav = document.querySelector('.nav-right');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            primaryNav.classList.toggle('active');
        });
    }
});



// Countdown Timer for Deals Section
document.addEventListener("DOMContentLoaded", function() {
    // Set the countdown time (24 hours from now)
    let countdownTime = new Date();
    countdownTime.setHours(countdownTime.getHours() + 24);
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownTime - now;
        
        // Calculate hours, minutes, seconds
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        document.getElementById("hours").textContent = Math.floor(hours).toString().padStart(2, '0');
        document.getElementById("minutes").textContent = Math.floor(minutes).toString().padStart(2, '0');
        document.getElementById("seconds").textContent = Math.floor(seconds).toString().padStart(2, '0');
        
        // If the countdown is finished, reset to 24 hours
        if (distance < 0) {
            countdownTime = new Date();
            countdownTime.setHours(countdownTime.getHours() + 24);
        }
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Deal card hover effects
    const dealCards = document.querySelectorAll('.deal-card');
    dealCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('img').style.transform = 'scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('img').style.transform = 'scale(1)';
        });
    });
});




// Fashion Carousel & Category Filter
function initializeFashionSection() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const fashionItems = document.querySelectorAll('.fashion-item');
    const carouselTrack = document.getElementById('fashion-carousel-track');
    let currentPosition = 0;
    const itemWidth = document.querySelector('.fashion-item').offsetWidth + 15; // Including gap

    // Filter items by category
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            
            // Show/hide items based on category
            fashionItems.forEach(item => {
                if (category === 'all' || item.dataset.category === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Reset carousel position
            currentPosition = 0;
            updateCarouselPosition();
        });
    });

    // Carousel navigation
    window.moveFashionCarousel = function(step) {
        const visibleItems = Math.floor(document.querySelector('.carousel-container').offsetWidth / itemWidth);
        const totalItems = document.querySelectorAll('.fashion-item[style="display: block;"]').length;
        
        currentPosition += step * visibleItems;
        
        // Boundary checks
        if (currentPosition < 0) currentPosition = 0;
        if (currentPosition > totalItems - visibleItems) currentPosition = totalItems - visibleItems;
        
        updateCarouselPosition();
    };

    function updateCarouselPosition() {
        carouselTrack.style.transform = `translateX(-${currentPosition * itemWidth}px)`;
    }

    // Initialize
    updateCarouselPosition();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeFashionSection);




// Countdown Timer for Flash Deals
function updateDealCountdown() {
    const now = new Date();
    // Set the deadline to 6 hours from now
    const deadline = new Date(now.getTime() + 6 * 60 * 60 * 1000);
    const timeLeft = deadline - now;
    
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('deal-hours').textContent = Math.floor(hours).toString().padStart(2, '0');
    document.getElementById('deal-minutes').textContent = Math.floor(minutes).toString().padStart(2, '0');
    document.getElementById('deal-seconds').textContent = Math.floor(seconds).toString().padStart(2, '0');
  }
  
  // Update countdown every second
  setInterval(updateDealCountdown, 1000);
  updateDealCountdown();
  
  // Refresh Recommendations
  document.querySelector('.refresh-btn').addEventListener('click', function() {
    this.classList.add('refreshing');
    setTimeout(() => {
      this.classList.remove('refreshing');
      // In a real app, you would fetch new recommendations here
      alert('Recommendations refreshed!');
    }, 1000);
  });
  
  // Claim Deal and Add to Cart functionality
  document.querySelectorAll('.deal-btn, .add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
      const productName = this.closest('.deal-card, .rec-card').querySelector('h3').textContent;
      alert(`${productName} added to your cart!`);
      // In a real app, you would update the cart count here
    });
  });



// --------------------------Games setion---------------------------

  // JavaScript for countdown timer and interactive elements
  document.addEventListener('DOMContentLoaded', function() {
    // Countdown timer
    function updateCountdown() {
        // Set the end date for the sale (3 days from now)
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + 3);
        
        const now = new Date();
        const diff = endDate - now;
        
        if (diff <= 0) {
            document.getElementById('countdown').textContent = "Sale has ended!";
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        document.getElementById('countdown').textContent = 
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
    
    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);
    
    // Add hover effects to game cards
    const gameCards = document.querySelectorAll('.game-card');
    gameCards.forEach(card => {
        card.addEventListener('click', function() {
            // In a real implementation, this would navigate to the product page
            console.log('Navigating to product page for: ', 
                      this.querySelector('.game-title').textContent);
        });
    });
    
    // View all link
    document.querySelector('.view-all').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('View all spring gaming deals clicked');
        // In a real implementation, this would show all deals
    });
});






document.addEventListener('DOMContentLoaded', function() {
    // Unique JS variable names
    const amzUniqTrack = document.getElementById('amzUniqTrack');
    const amzUniqPrevBtn = document.getElementById('amzUniqPrev');
    const amzUniqNextBtn = document.getElementById('amzUniqNext');
    
    // Clone cards for infinite effect
    const amzUniqCards = amzUniqTrack.querySelectorAll('.amz-uniq-card');
    const amzUniqTotalCards = amzUniqCards.length;
    
    for (let i = 0; i < amzUniqTotalCards; i++) {
        const clone = amzUniqCards[i].cloneNode(true);
        amzUniqTrack.appendChild(clone);
    }
    
    // Manual navigation variables
    let amzUniqIsDragging = false;
    let amzUniqStartPos = 0;
    let amzUniqCurrentTranslate = 0;
    let amzUniqPrevTranslate = 0;
    let amzUniqAnimationID;
    let amzUniqCurrentIndex = 0;
    
    // Touch events
    amzUniqCards.forEach(card => {
        card.addEventListener('touchstart', amzUniqTouchStart);
        card.addEventListener('touchend', amzUniqTouchEnd);
        card.addEventListener('touchmove', amzUniqTouchMove);
        
        card.addEventListener('click', function(e) {
            if (!amzUniqIsDragging) {
                console.log('Product clicked:', this.querySelector('.amz-uniq-name').textContent);
            }
        });
    });
    
    // Mouse events
    amzUniqTrack.addEventListener('mousedown', amzUniqTouchStart);
    amzUniqTrack.addEventListener('mouseup', amzUniqTouchEnd);
    amzUniqTrack.addEventListener('mouseleave', amzUniqTouchEnd);
    amzUniqTrack.addEventListener('mousemove', amzUniqTouchMove);
    
    // Button navigation
    amzUniqNextBtn.addEventListener('click', () => {
        amzUniqCurrentIndex = (amzUniqCurrentIndex + 1) % amzUniqTotalCards;
        amzUniqSlideToIndex(amzUniqCurrentIndex);
    });
    
    amzUniqPrevBtn.addEventListener('click', () => {
        amzUniqCurrentIndex = (amzUniqCurrentIndex - 1 + amzUniqTotalCards) % amzUniqTotalCards;
        amzUniqSlideToIndex(amzUniqCurrentIndex);
    });
    
    function amzUniqTouchStart(e) {
        if (e.type === 'touchstart') {
            amzUniqStartPos = e.touches[0].clientX;
        } else {
            amzUniqStartPos = e.clientX;
            e.preventDefault();
        }
        amzUniqIsDragging = true;
        amzUniqAnimationID = requestAnimationFrame(amzUniqAnimation);
        amzUniqTrack.style.cursor = 'grabbing';
        amzUniqTrack.style.transition = 'none';
    }
    
    function amzUniqTouchEnd() {
        amzUniqIsDragging = false;
        cancelAnimationFrame(amzUniqAnimationID);
        amzUniqTrack.style.cursor = 'grab';
        
        const movedBy = amzUniqCurrentTranslate - amzUniqPrevTranslate;
        
        if (movedBy < -50) {
            amzUniqCurrentIndex = (amzUniqCurrentIndex + 1) % amzUniqTotalCards;
        } else if (movedBy > 50) {
            amzUniqCurrentIndex = (amzUniqCurrentIndex - 1 + amzUniqTotalCards) % amzUniqTotalCards;
        }
        
        amzUniqSlideToIndex(amzUniqCurrentIndex);
    }
    
    function amzUniqTouchMove(e) {
        if (amzUniqIsDragging) {
            const currentPosition = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
            amzUniqCurrentTranslate = amzUniqPrevTranslate + currentPosition - amzUniqStartPos;
        }
    }
    
    function amzUniqAnimation() {
        amzUniqSetSliderPosition();
        if (amzUniqIsDragging) requestAnimationFrame(amzUniqAnimation);
    }
    
    function amzUniqSetSliderPosition() {
        amzUniqTrack.style.transform = `translateX(${amzUniqCurrentTranslate}px)`;
    }
    
    function amzUniqSlideToIndex(index) {
        amzUniqCurrentIndex = index;
        amzUniqCurrentTranslate = -amzUniqCurrentIndex * 235;
        amzUniqPrevTranslate = amzUniqCurrentTranslate;
        amzUniqTrack.style.transition = 'transform 0.5s ease';
        amzUniqTrack.style.transform = `translateX(${amzUniqCurrentTranslate}px)`;
    }
    
    // View all link
    document.querySelector('.amz-uniq-viewall').addEventListener('click', function(e) {
        e.preventDefault();
        console.log('View all clicked');
    });
});



function toggleMenu() {
    document.querySelector(".nav-menu").classList.toggle("active");
}



// ------------------------------------recently-viewed------------------------------------


// On product page load
let viewedItems = JSON.parse(localStorage.getItem('viewedItems')) || [];
const currentProduct = {
  id: '123',
  name: 'Product Name',
  image: 'product.jpg',
  price: '₹999'
};

// Add current product to viewed items
viewedItems = viewedItems.filter(item => item.id !== currentProduct.id);
viewedItems.unshift(currentProduct);
if (viewedItems.length > 10) viewedItems.pop();
localStorage.setItem('viewedItems', JSON.stringify(viewedItems));

// On homepage load
const carousel = document.querySelector('.product-carousel');
viewedItems.forEach(item => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <p>${item.name}</p>
    <span>${item.price}</span>
  `;
  carousel.appendChild(productCard);
});







// ---------------------------- Footer Section-------------------------



// Simple script for the back to top button
document.querySelector('.amz-footer-back-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation to footer links
document.querySelectorAll('.amz-footer-column a').forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.color = '#FF9900';
        this.style.transition = 'color 0.2s';
    });
    link.addEventListener('mouseout', function() {
        this.style.color = '#DDD';
    });
});