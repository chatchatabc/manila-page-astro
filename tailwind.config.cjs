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
        c1: "#009bff", // Primary
        c2: "#ff6600", // Secondary
        cl: "#e3f3fe", // Light / Primary 1
        cd: "#004aad", // Dark / Primary 2
        ac1: "#6600ff", // Accent 1
        ac2: "#ff0099", // Accent 2

        // c1: "#FFA303", // Primary
        // c2: "#A2ABCE", // Secondary
        // cl: "#FFE0AE", // Light / Primary 1
        // cd: "#F5631A", // Dark / Primary 2
        // ac1: "#59ff00", // Accent 1
        // ac2: "#00ffa6", // Accent 2
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
