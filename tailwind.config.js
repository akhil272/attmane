/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      saira: ["Saira", "sans-serif"],
    },
    extend: {
      colors: {
        att_primary: "#F4A950",
        att_black: "#1D1D1D",
      },
    },
  },
  plugins: [],
};
