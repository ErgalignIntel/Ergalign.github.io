# ErgAlign Intel - Simple Landing Page

## Overview

This project contains the HTML, CSS, and JavaScript code for a simple, mobile-first landing page for "ErgAlign Intel Home Office and Business Solutions". The page presents two core offerings:

1.  **Cloudflare Speed Optimization Service:** Details two pricing plans (Basic and Premium) and includes a Call to Action (CTA) button.
2.  **Upcoming AI-Powered Google Optimization:** Describes a future service and provides a simple form for users to express interest and sign up for early access.

The design follows principles of simplicity, minimalism, and mobile-first responsiveness.

## Features

* **Minimalist Design:** Focuses on essential information to improve clarity and conversion.
* **Mobile-First Layout:** Designed to look and function well on small screens (like iPhones) using a single-column layout.
* **Clear Calls to Action (CTAs):** Prominent buttons ("Optimize Your Site Now", "Be the First to Access AI Optimization") encourage user interaction.
* **Direct Email Integration:** CTAs are configured to open the user's default email client with pre-filled information directed to `ergalign@outlook.com`.
* **Simple Structure:** Easy-to-understand HTML structure, straightforward CSS for styling, and minimal JavaScript for interaction.
* **Basic Interest Form:** Collects Name, Email, and optional Business Name for the upcoming AI service waitlist.
* **Privacy Note:** Includes a brief statement about data privacy.

## Files Included

* `index.html`: The main structure and content of the landing page.
* `style.css`: Contains all the styling rules for the page's appearance and layout.
* `script.js`: Handles the interactive elements, specifically the logic for the CTA buttons and the interest form submission via `mailto:` links.

## How to Use

1.  Ensure all three files (`index.html`, `style.css`, `script.js`) are in the same directory.
2.  Open the `index.html` file in any modern web browser (like Chrome, Firefox, Safari, Edge).

The landing page will be displayed, and the buttons/form will function as described.

## How the CTAs Work

Instead of linking to separate pages or complex backend systems, the CTAs in this version use `mailto:` links.

* **"Optimize Your Site Now" Button:** When clicked, it opens the user's default email client with a pre-composed email addressed to `ergalign@outlook.com`. The email prompts the user to specify which Cloudflare plan they are interested in.
* **"Be the First to Access AI Optimization" Form:** When submitted, it gathers the Name, Email, and Business Name from the form fields. It then opens the user's default email client with a pre-composed email containing this information, addressed to `ergalign@outlook.com`.

**Note:** The user must have a default email client configured on their device for the `mailto:` links to function correctly. They will also need to manually click "Send" in their email client after reviewing the pre-filled message.

## Customization

* **Recipient Email Address:** To change the email address where the CTA information is sent, modify the `mailto:ergalign@outlook.com` parts within the `script.js` file.
* **Content & Pricing:** All text, descriptions, benefits, and pricing details can be edited directly within the `index.html` file.
* **Styling:** Colors, fonts, spacing, and layout can be adjusted by modifying the rules in the `style.css` file.

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
