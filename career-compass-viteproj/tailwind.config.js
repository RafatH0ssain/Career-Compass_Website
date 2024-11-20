/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        josefin: ['"Josefin Sans"', 'sans-serif'], // Add the font
        poppins: ['"Poppins"', 'sans-serif'],    // Optional if you plan to use Poppins
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

