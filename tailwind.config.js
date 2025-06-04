/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",  // si usas app router
  ],
  theme: {
    extend: {
      fontFamily: {
        diskus: ['Diskus', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
