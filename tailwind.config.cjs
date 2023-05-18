/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        alex: ["Alex Brush", "cursive"],
        play: ["Playfair Display", "serif"],
      },
      colors: {
        primary: "#BFD7EA",
        text: "#000",
        background: "#BFD7EA",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
