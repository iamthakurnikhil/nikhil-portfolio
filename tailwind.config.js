/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      width: {
      '700': '44rem',
    },
    height: {
      '700': '44rem',
    }
  },
  },
  plugins: [ require("tailwind-scrollbar")],
}