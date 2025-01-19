const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
const totalSlides = slide.length;

// Update slide position
function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 360}px)`;  /* Updated width */
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

// Next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

// Go to a specific slide
function goToSlide(index) {
    currentIndex = index;
    updateSlidePosition();
}

// Change slide every 5 seconds
setInterval(nextSlide, 5000);