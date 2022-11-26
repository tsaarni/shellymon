/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  darkMode: "media", // or 'class'
  theme: {
    extend: {
      keyframes: {
        press: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.95)" },
        },
      },
      animation: {
        press: "press 0.5s linear",
      },
    },
  },
  plugins: [],
};
