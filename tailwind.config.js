/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors:{
        primary: "#0f1111",
        secondary: "#B12704"
      },
      fontSize:{
        small: "14px"
      }
    },
  },
  plugins: [],
}

