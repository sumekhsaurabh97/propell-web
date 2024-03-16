const colors = require("./styles/colors/index");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      //fonts
      fontFamily: {
        Primary: ['League Spartan', 'sans-serif'],
      },
      //colors
      colors: colors
    },
  },
  plugins: [],
}
