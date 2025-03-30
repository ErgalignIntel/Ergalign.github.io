document.addEventListener('DOMContentLoaded', () => {
    const userEmail = "ergalign@outlook.com"; // Define your email here

    // --- Service Buttons (Speed, Help, Recurring) ---
    // Selector targets buttons with specific classes within the services section
    const serviceButtons = document.querySelectorAll('#speed-services .speed-cta, #speed-services .help-cta, #speed-services .recurring-cta');

    serviceButtons.forEach(button => {
        button.addEventListener('click', () => {
            const subject = button.getAttribute('data-subject') || "Website Service Inquiry";
            let body = button.getAttribute('data-body') || "Please provide more details about your services.";
            body += "\n\n---\nWe aim to respond within 24 hours.";
            const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;

            const originalText = button.innerHTML; // Use innerHTML to preserve icon
            button.innerHTML = 'Check Your Email App!';
             setTimeout(() => {
                button.innerHTML = originalText;
            }, 3000);
        });
    });

    // --- AI Optimization Interest Form ---
    const interestForm = document.getElementById('interest-form');
    if (interestForm) {
        interestForm.addEventListener('submit', (event) => {
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
            body += "\n\n---\nWe aim to respond within 24 hours.";
            const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;

            const submitButton = interestForm.querySelector('button[type="submit"]');
            if (submitButton) {
                 const originalText = submitButton.innerHTML; // Use innerHTML to preserve icon
                 submitButton.innerHTML = 'Check Your Email App!';
                 setTimeout(() => {
                    submitButton.innerHTML = originalText;
                    // interestForm.reset(); // Optionally clear form
                }, 3000);
            }
        });
    }
});
