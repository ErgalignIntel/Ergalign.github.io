document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Running script.js...");

    const userEmail = "ergalign@outlook.com";

    // --- Mobile Navigation Toggle ---
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');
    
    if (mobileMenuToggle && navbarNav) {
        mobileMenuToggle.addEventListener('click', () => {
            navbarNav.classList.toggle('active');
            // Toggle icon between bars and times
            const icon = mobileMenuToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- Smooth Scrolling for Navigation Links ---
    const navLinks = document.querySelectorAll('.navbar-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu if open
            if (navbarNav.classList.contains('active')) {
                navbarNav.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // --- FAQ Accordion Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Toggle active class on clicked item
            item.classList.toggle('active');
            
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // --- Stripe & PayPal Link Buttons ---
    const paymentButtons = document.querySelectorAll('button[data-link]');
    console.log("Found Payment Link Buttons:", paymentButtons.length, paymentButtons);

    paymentButtons.forEach((button, index) => {
        const link = button.getAttribute('data-link');
        if (link) {
            console.log(`Attaching listener to button ${index} for link: ${link}`);
            button.addEventListener('click', (event) => {
                event.preventDefault();
                console.log(`Payment Button ${index} clicked! Opening link: ${link}`);
                window.open(link, '_blank');

                // Visual feedback
                button.style.opacity = '0.7';
                setTimeout(() => {
                   button.style.opacity = '1';
                }, 1500);
            });
        } else {
            console.warn(`Button ${index} found without data-link:`, button);
        }
    });

    // --- Need More Help Button (Mailto) ---
    const helpButton = document.querySelector('.help-cta');
    console.log("Found Help Button:", helpButton);

    if (helpButton) {
        console.log("Attaching listener to Help Button");
        helpButton.addEventListener('click', () => {
            console.log("Help Button Clicked!");
            const subject = "Complex Issue Inquiry / Custom Quote Request";
            let body = "Hello ErgAlign Intel,\n\nI have a more complex website issue or specific need and would like to inquire about a custom quote or further assistance.\n\nPlease contact me.\n\nThanks,";
            body += "\n\n---\nWe aim to respond within 24 business hours.";
            const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;

            // Feedback
            const originalHTML = helpButton.innerHTML;
            helpButton.innerHTML = '<i class="fas fa-check-circle btn-icon"></i> Check Your Email App!';
            setTimeout(() => {
                helpButton.innerHTML = originalHTML;
            }, 3000);
        });
    } else {
        console.warn("Help CTA button (.help-cta) not found.");
    }

    // --- AI Optimization Interest Form (Mailto) ---
    const interestForm = document.getElementById('interest-form');
    console.log("Found Interest Form:", interestForm);

    if (interestForm) {
        console.log("Attaching listener to Interest Form");
        interestForm.addEventListener('submit', (event) => {
            console.log("Interest Form Submitted!");
            event.preventDefault();

            const name = document.getElementById('interest-name').value;
            const email = document.getElementById('interest-email').value;
            const business = document.getElementById('interest-business').value;
            const subject = "Early Access Interest: AI-Powered Google Optimization";
            let body = `Hello ErgAlign Intel,\n\nI'm interested in getting early access to the AI-Powered Google Optimization service.\n\nDetails:\nName: ${name}\nEmail: ${email}`;
            if (business) {
                body += `\nBusiness Name: ${business}`;
            }
            body += "\n\nPlease keep me updated on the launch and special pricing!";
            body += "\n\n---\nWe aim to respond within 24 business hours.";

            const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;

            const submitButton = interestForm.querySelector('.ai-cta');
            if (submitButton) {
                const originalHTML = submitButton.innerHTML;
                submitButton.innerHTML = '<i class="fas fa-check-circle btn-icon"></i> Check Your Email App!';
                setTimeout(() => {
                    submitButton.innerHTML = originalHTML;
                    interestForm.reset();
                }, 3000);
            }
        });
    } else {
        console.warn("Interest form (#interest-form) not found.");
    }

    // --- Lazy Loading for Images ---
    if ('IntersectionObserver' in window) {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    }

    // --- Scroll Animation for Service Cards ---
    if ('IntersectionObserver' in window) {
        const animatedElements = document.querySelectorAll('.service-card, .testimonial, .process-step, .faq-item');
        
        const animationObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        animatedElements.forEach(element => {
            element.classList.add('pre-animation');
            animationObserver.observe(element);
        });
    }

    console.log("script.js finished executing.");
});
