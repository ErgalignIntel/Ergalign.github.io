document.addEventListener('DOMContentLoaded', () => {
    const userEmail = "ergalign@outlook.com"; // Define your email here

    // --- NEW Speed Optimization Service Buttons ---
    const speedButtons = document.querySelectorAll('.speed-cta, .help-cta'); // Select all new service buttons

    speedButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get subject and body from the button's data attributes
            const subject = button.getAttribute('data-subject') || "Website Service Inquiry"; // Fallback subject
            let body = button.getAttribute('data-body') || "Please provide more details about your services."; // Fallback body

            // Add the 24-hour response note to the body
            body += "\n\n---\nWe aim to respond within 24 hours.";

            // Construct mailto link
            const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open the user's default email client
            window.location.href = mailtoLink;

            // Optional: Provide feedback
            const originalText = button.textContent;
            button.textContent = 'Check Your Email App!';
             setTimeout(() => {
                button.textContent = originalText;
            }, 3000);
        });
    });

    // --- AI Optimization Interest Form ---
    const interestForm = document.getElementById('interest-form');
    if (interestForm) {
        interestForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            // Get form data
            const name = document.getElementById('interest-name').value;
            const email = document.getElementById('interest-email').value;
            const business = document.getElementById('interest-business').value;

            // Construct mailto link
            const subject = "Early Access Interest: AI-Powered Google Optimization";
            let body = `Hello ErgAlign Intel,\n\nI'm interested in getting early access to the AI-Powered Google Optimization service.\n\nDetails:\nName: ${name}\nEmail: ${email}`;
            if (business) {
                body += `\nBusiness Name: ${business}`;
            }
            body += "\n\nPlease keep me updated on the launch and special pricing!";
            // Add the 24-hour response note
             body += "\n\n---\nWe aim to respond within 24 hours.";

            const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open the user's default email client
            window.location.href = mailtoLink;

            // Optional: Provide feedback to the user
            const submitButton = interestForm.querySelector('button[type="submit"]');
            if (submitButton) {
                 const originalText = submitButton.textContent;
                 submitButton.textContent = 'Check Your Email App!';
                 setTimeout(() => {
                    submitButton.textContent = originalText;
                    // Optionally clear the form
                    // interestForm.reset();
                }, 3000); // Reset button text after 3 seconds
            }
        });
    }

});
