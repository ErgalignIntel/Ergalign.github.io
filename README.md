# ErgAlign Intel - Simple Landing Page

## Overview

This project contains the HTML, CSS, and JavaScript code for a visually updated, mobile-first landing page for "ErgAlign Intel Home Office and Business Solutions". The page features a modern dark theme with neon green, lightning blue, and piercing purple accents. It presents several core offerings:

1.  **Speed Optimization Services:** Includes multiple options:
    * Speed Check ($9.99)
    * One-Time Speed Boost ($79)
    * Premium Ongoing Plan ($99/month)
    * Custom Help Inquiry
2.  **Upcoming AI-Powered Google Optimization:** Describes a future service and provides a styled form for users to express interest and sign up for early access.

The design uses a dark background, vibrant accent colors, CSS variables, a responsive grid layout for services on larger screens, and enhanced call-to-action buttons with icons and gradients.

## Features

* **Modern Dark Theme:** Uses a dark gray base with neon green, lightning blue, and piercing purple accents.
* **Header Image:** Includes the primary visual at the top.
* **Responsive Layout:** Mobile-first single column, transitioning to a two-column grid for service cards on wider screens.
* **Enhanced CTAs:** Buttons feature icons, gradients, and improved hover effects.
* **Styled Form:** The AI interest form is styled to match the dark theme with accent colors on focus.
* **Direct Email Integration:** All CTAs are configured to open the user's default email client with pre-filled information (subject and body indicating the specific service) directed to `ergalign@outlook.com`.
* **Clear Service Structure:** Clearly lists all available one-time, recurring, and upcoming services.
* **Privacy & Response Time:** Includes notes on privacy and expected email response time.

## Files Included

* `index.html`: The main structure and content of the landing page.
* `style.css`: Contains all the styling rules, including the dark theme, layout, responsive design, and button/form styling using CSS variables.
* `script.js`: Handles the interactive elements (button clicks and form submission) via `mailto:` links.
* `IMG_4855.jpeg`: The header image displayed on the page. **(Must be present in the same folder)**

## How to Use

1.  Ensure all four files (`index.html`, `style.css`, `script.js`, `IMG_4855.jpeg`) are in the same directory.
2.  Open the `index.html` file in any modern web browser (like Chrome, Firefox, Safari, Edge).

The landing page will be displayed with the new dark theme and layout, and all buttons/forms should function as described.

## How the CTAs Work

CTAs use `mailto:` links to open the user's default email application with pre-filled information.

* **Service Buttons:** Clicking a service button (Speed Check, Boost, Premium, Help) opens an email draft with a subject line clearly indicating the specific service requested.
* **AI Interest Form:** Submitting the form gathers the entered details and opens an email draft with the subject "Early Access Interest: AI-Powered Google Optimization" and the user's information in the body.

**Note:** The user must have a default email client configured for `mailto:` links to work. They need to manually click "Send" in their email client.

## Customization

* **Recipient Email Address:** Change the `userEmail` variable at the top of `script.js`.
* **Color Scheme:** Modify the CSS variables (e.g., `--bg-dark`, `--accent-green`, etc.) at the top of `style.css`.
* **Header Image:** Replace `IMG_4855.jpeg` and update the `src` attribute in `index.html`.
* **Content & Pricing:** Edit text, descriptions, pricing, and features directly within `index.html`.
* **Styling:** Further adjust layout, fonts, spacing, etc., in `style.css`.

## Technologies Used

* HTML5
* CSS3 (including CSS Variables, Flexbox, Grid)
* JavaScript (ES6)
* Inline SVG (for icons)
