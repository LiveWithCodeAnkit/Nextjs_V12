/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",

    "./components/**/*.{js,ts,jsx,tsx}",

    "./modules/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      transitionProperty: {
        position: "right, left, top, bottom, margin, padding",
        textColor: "color",
      },
    },
  },
  plugins: [],
};
