// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      primary: "#f36760",
      secondary: "#ffeae9",
      "bg-primary": "#f3f3f3",
      "bg-secondary": "#ffffff",
      "bg-muted": "#f5f5f6",
      "bg-muted-transparent": "#e7e7e740",
      "bg-transparent": "#000000b8",
      "bg-transparent-muted": "#00000066",
      textarea: "#f6f6ff",
      "border-primary": "#a3a3a3",
      "border-muted": "#dddddd",
      "text-primary": "#000000",
      "text-secondary": "#6c757d",
      "text-muted": "#c6c6c6",
      "text-hard": "#3c3c3c",
      shadow: "rgba(0, 0, 0, 0.05)",
      grey: "#999",
      white: "#fff",
    },
    transitionProperty: {
      padding: "padding",
      margin: "margin",
    },
  },
};
export const darkMode = "class";
export const plugins = [];
