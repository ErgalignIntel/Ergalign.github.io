document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded. Running script.js..."); // Check if script runs

    const userEmail = "ergalign@outlook.com";

    // --- Stripe & PayPal Link Buttons ---
    const paymentButtons = document.querySelectorAll('button[data-link]');
    console.log("Found Payment Link Buttons:", paymentButtons.length, paymentButtons); // Check if buttons are selected

    paymentButtons.forEach((button, index) => {
        const link = button.getAttribute('data-link');
        if (link) {
            console.log(`Attaching listener to button ${index} for link: ${link}`); // Check listener attachment
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Keep this just in case
                console.log(`Payment Button ${index} clicked! Opening link: ${link}`); // Check if click fires
                window.open(link, '_blank'); // Open in new tab (changed back from location.href)

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
    console.log("Found Help Button:", helpButton); // Check if button is selected

    if (helpButton) {
        console.log("Attaching listener to Help Button"); // Check listener attachment
        helpButton.addEventListener('click', () => {
            console.log("Help Button Clicked!"); // Check if click fires
            const subject = "Complex Issue Inquiry / Custom Quote Request";
            let body = "Hello ErgAlign Intel,\n\nI have a more complex website issue or specific need and would like to inquire about a custom quote or further assistance.\n\nPlease contact me.\n\nThanks,";
            body += "\n\n---\nWe aim to respond within 24 business hours.";
            const mailtoLink = `mailto:${userEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailtoLink;

            // Feedback
            const originalHTML = helpButton.innerHTML;
            helpButton.innerHTML = 'Check Your Email App!';
             setTimeout(() => {
                helpButton.innerHTML = originalHTML;
            }, 3000);
        });
    } else {
        console.warn("Help CTA button (.help-cta) not found.");
    }


    // --- AI Optimization Interest Form (Mailto) ---
    const interestForm = document.getElementById('interest-form');
    console.log("Found Interest Form:", interestForm); // Check if form found

    if (interestForm) {
        console.log("Attaching listener to Interest Form"); // Check listener attachment
        interestForm.addEventListener('submit', (event) => {
            console.log("Interest Form Submitted!"); // Check if submit fires
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
                 submitButton.innerHTML = 'Check Your Email App!';
                 setTimeout(() => {
                    submitButton.innerHTML = originalHTML;
                    interestForm.reset();
                }, 3000);
            }
        });
    } else {
         console.warn("Interest form (#interest-form) not found.");
    }

    console.log("script.js finished executing.");
});
