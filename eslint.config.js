// eslint.config.js
// Basic ESLint configuration using recommended rules

import globals from "globals";
import js from "@eslint/js";

export default [
  // Use ESLint's recommended default rules
  js.configs.recommended,

  // Add some global variables common in browser scripts
  {
    languageOptions: {
      globals: {
        ...globals.browser // Allows things like 'document', 'window', 'alert' etc.
      }
    },
    rules: {
      // You can customize rules here later if needed.
      "no-unused-vars": "warn" // Treat unused variables as warnings, not errors
    }
  }
];
