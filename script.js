// Mobile Hamburger Menu
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');

document.querySelector('.navbar').addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('input[type="email"]').value;
    // Integrate with Mailchimp or ConvertKit here
    alert('Thanks for subscribing!');
});
// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.product-card, .feature-card').forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// Product Carousel (Swiper.js - Add CDN to HTML head)
// Include this in your HTML: <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        768: { slidesPerView: 3 }
    },
    autoplay: { delay: 3000 },
});
