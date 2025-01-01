/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables class-based dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transformStyle: {
        "preserve-3d": "preserve-3d",
      },
      backface: {
        hidden: "hidden",
      },
    },
  },
  plugins: [],
}