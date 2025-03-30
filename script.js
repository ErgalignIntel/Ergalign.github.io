document.addEventListener('DOMContentLoaded', () => {
    const userEmail = "ergalign@outlook.com"; // Your target email for mailto links

    // --- Stripe & PayPal Link Buttons ---
    const paymentButtons = document.querySelectorAll('.stripe-btn, .paypal-btn');

    paymentButtons.forEach(button => {
        const link = button.getAttribute('data-link');
        if (link) {
            button.addEventListener('click', () => {
                // Optional: Add analytics tracking here if needed
                window.open(link, '_blank'); // Open payment link in a new tab

                // Optional: Visual feedback (less disruptive than changing text now)
                button.style.opacity = '0.7';
                setTimeout(() => {
                   button.style.opacity = '1';
                }, 1500);
            });
        }
    });

    // --- Need More Help Button (Mailto) ---
    const helpButton = document.querySelector('.help-cta');
    if (helpButton) {
        helpButton.addEventListener('click', () => {
            const subject = "Complex Issue Inquiry / Custom Quote Request";
            let body = "Hello ErgAlign Intel,\n\nI have a more complex website issue or specific need and would like to inquire about a custom quote or further assistance.\n\nPlease contact me.\n\nThanks,";
            body += "\n\n---\nWe aim to respond within 24 business hours.";
            const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink; // Use location.href for mailto

            // Feedback
            const originalHTML = helpButton.innerHTML;
            helpButton.innerHTML = 'Check Your Email App!';
             setTimeout(() => {
                helpButton.innerHTML = originalHTML;
            }, 3000);
        });
    }


    // --- AI Optimization Interest Form (Mailto) ---
    const interestForm = document.getElementById('interest-form');
    if (interestForm) {
        interestForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

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
            window.location.href = mailtoLink; // Use location.href for mailto

            const submitButton = interestForm.querySelector('button[type="submit"]');
            if (submitButton) {
                 const originalHTML = submitButton.innerHTML;
                 submitButton.innerHTML = 'Check Your Email App!';
                 setTimeout(() => {
                    submitButton.innerHTML = originalHTML;
                    interestForm.reset(); // Optionally clear form
                }, 3000);
            }
        });
    }

    // Note: The PayPal button rendering logic is now in the HTML file
    // right after the SDK script loads and before this script file runs.

});
