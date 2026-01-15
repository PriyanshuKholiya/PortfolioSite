/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0a0a0a', // Rich black background
        'luxury-gold': '#D4AF37',  // Metallic gold for text
        'luxury-gold-light': '#F3E5AB',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // For elegant headings
        sans: ['"Lato"', 'sans-serif'], // For readable text
      },
    },
  },
  plugins: [],
}