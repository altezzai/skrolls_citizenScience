// tailwind.config.js
const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/@nextui-org/theme/dist/components/Tabs.js",
    "./node_modules/@nextui-org/theme/dist/components/(Tabs|snippet|code|input).js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bggrey: "#f3f3f3",
      primary: "#f36760;",
      secondary: "#ffeae9;",
      grey: "#999",
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
