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
