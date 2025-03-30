# ErgAlign Intel - Advanced Landing Page

## Overview

This project contains the HTML, CSS, and JavaScript code for a visually dynamic, mobile-first landing page for "ErgAlign Intel Home Office and Business Solutions". The page features a modern dark theme with neon green, lightning blue, and piercing purple accents and integrates both Stripe and PayPal payment options.

The page presents several core offerings:

1.  **Speed Optimization Services:** Includes multiple options with distinct pricing and payment methods:
    * Speed Check ($9.99 - One-Time)
    * Basic Plan ($49 Setup + $29/month - Subscription)
    * Premium Plan ($99/month - Subscription)
    * One-Time Speed Boost ($139 - One-Time)
    * Custom Help Inquiry (via Email)
2.  **Upcoming AI-Powered Google Optimization:** Describes a future service and provides a styled form for users to express interest via email.

## Features

* **Modern Dark Theme:** Uses a dark gray base with vibrant neon green, lightning blue, and piercing purple accents defined via CSS variables.
* **Header Image:** Includes the primary visual.
* **Responsive Layout:** Mobile-first single column, transitioning to a custom 1-2-1-1 grid layout for service cards on wider screens.
* **Dual Payment Options:** Integrates both Stripe (Payment Links) and PayPal (Payment Links / JS Buttons) for most paid services.
    * Handles the Basic Plan's $49 setup + $29/mo structure via separate Stripe links or a single PayPal subscription button with a setup fee.
* **Enhanced CTAs:** All buttons feature a consistent "pill" shape. Payment buttons often use icons or provider names. Email buttons include relevant icons.
* **Styled Form:** The AI interest form is styled to match the dark theme with accent colors on focus and pill-shaped inputs/button.
* **Clear Service Structure:** Lists all available services in a logical order.
* **Privacy & Response Time:** Includes notes on privacy and expected email response time.

## Files Included

* `index.html`: The main structure and content, including embedded PayPal JS button code.
* `style.css`: Contains all styling rules (dark theme, layout, responsive design, grid, buttons, form) using CSS variables.
* `script.js`: Handles click events for Stripe/PayPal links (opening them) and mailto links (Ask Us Anything, AI Form). *Note: PayPal button functionality is handled by PayPal's SDK scripts embedded in the HTML.*
* `IMG_4855.jpeg`: The header image displayed on the page. **(Must be present in the same folder)**

## How to Use

1.  Ensure all four files (`index.html`, `style.css`, `script.js`, `IMG_4855.jpeg`) are in the same directory.
2.  Open the `index.html` file in any modern web browser (Chrome, Firefox, Safari, Edge).

The landing page will be displayed with the new dark theme and layout. Stripe/PayPal links will open in a new tab. PayPal subscription buttons will render. Mailto links will open the user's email client.

## Payment Integration Notes

* This implementation uses direct links (Stripe, PayPal one-time) and embedded JS buttons (PayPal subscriptions).
* **Stripe Basic Plan:** Requires the customer to complete two transactions via separate links ($49 setup, then $29/mo subscription start).
* **PayPal Basic Plan:** Uses a single PayPal button that handles the $49 setup fee and starts the $29/mo subscription automatically (based on the plan created in PayPal).
* **PayPal SDK:** The necessary PayPal SDK script is loaded directly in the HTML. The rendering logic for the PayPal buttons is also included in `<script>` tags at the bottom of the HTML.
* **Security:** Payment processing occurs securely on Stripe's or PayPal's domains.

## Customization

* **Payment Links/Codes:** Replace the placeholder Stripe URLs (`data-link` attributes in `index.html`) and PayPal Plan IDs / Client ID (in the `<script>` blocks in `index.html`) with your actual generated ones.
* **Recipient Email Address:** Change the `userEmail` variable at the top of `script.js` for the mailto links.
* **Color Scheme:** Modify the CSS variables (e.g., `--bg-dark`, `--accent-green`, etc.) at the top of `style.css`.
* **Header Image:** Replace `IMG_4855.jpeg` and update the `src` attribute in `index.html`.
* **Content & Pricing:** Edit text, descriptions, pricing, and features directly within `index.html`.
* **Styling:** Further adjust layout, fonts, spacing, etc., in `style.css`.

## Technologies Used

* HTML5
* CSS3 (including CSS Variables, Flexbox, Grid)
* JavaScript (ES6)
* Inline SVG (for icons)
* PayPal JS SDK (for subscription buttons)
