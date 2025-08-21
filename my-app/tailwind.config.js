/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#1a1d20',
        'secondary-dark': '#212529',
        'tertiary-dark': '#343a40',
        'primary-light': '#ffffff',
        'secondary-light': '#f8f9fa',
        'border-dark': '#495057',
        'border-light': '#dee2e6',
        'text-primary-dark': '#dee2e6',
        'text-secondary-dark': '#adb5bd',
        'text-primary-light': '#212529',
        'text-secondary-light': '#495057',
        'event-blue': '#0000FF',
        'event-green': '#00FF00',
        'event-red': '#FF0000',
      },
    },
  },
  plugins: [],
}
