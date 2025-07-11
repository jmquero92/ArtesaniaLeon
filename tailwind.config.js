/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        diskus: ['Diskus', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'serif'], // ✅ Aquí está la solución
      },
    },
  },
  plugins: [],
};
