/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink": "var(--pink)",
        "bg": "var(--bg)",
        "purple": "var(--purple)",
      }
    },
  },
  plugins: [],
}
