document.addEventListener('DOMContentLoaded', () => {

    // --- Cloudflare Service CTA ---
    const optimizeBtn = document.getElementById('optimize-btn');
    if (optimizeBtn) {
        optimizeBtn.addEventListener('click', () => {
            const subject = "Interest in Cloudflare Speed Optimization Service";
            const body = "Hello ErgAlign Intel,\n\nI am interested in your Cloudflare Speed Optimization service. \n\nPlease specify which plan you are interested in:\n[ ] Basic Plan ($49 setup + $29/month)\n[ ] Premium Plan ($99/month)\n\nPlease provide details on how to proceed.\n\nThanks,\n[Your Name]";
            const mailtoLink = `mailto:ergalign@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open the user's default email client
            window.location.href = mailtoLink;
        });
    }

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
            body += "\n\nPlease keep me updated on the launch and special pricing!\n\nThanks,";

            const mailtoLink = `mailto:ergalign@outlook.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Open the user's default email client
            window.location.href = mailtoLink;

            // Optional: Provide feedback to the user
            const submitButton = interestForm.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.textContent = 'Check Your Email App!';
                setTimeout(() => {
                    submitButton.textContent = 'Be the First to Access AI Optimization';
                    // Optionally clear the form
                    // interestForm.reset();
                }, 3000); // Reset button text after 3 seconds
            }
        });
    }

});
