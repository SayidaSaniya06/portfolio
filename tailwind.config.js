/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#243c5a',
        'primary-brand': '#5A67D8',
      },
       backgroundImage: {
        'hero-pattern': "url('/assets/dev_profile.jpg')",
      }
    },
  },
  plugins: [],
}

