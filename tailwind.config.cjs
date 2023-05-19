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
        // c1: "#009bff", // Primary
        // c2: "#ff6600", // Secondary
        // cl: "#e3f3fe", // Light / Primary 1
        // cd: "#004aad", // Dark / Primary 2
        // ac1: "#6600ff", // Accent 1
        // ac2: "#ff0099", // Accent 2

        bg: "#FCF8FD", // Background E0E0FF
        bg1: "#E0E0FF", // Background 1
        bg2: "#FFD7F5", // Background 2
        bg3: "#FFDDB7", // Background 3
        c1: "#343DFF", // Primary
        c2: "#9E2A9B", // Secondary
        c3: "#855400", // Tertiary
        t1: "#00006E", // Text 1
        t2: "#380038", // Text 2
        t3: "#2A1700", // Text 3
        ac1: "#5d4dbb", // Accent 1
        ac2: "#ad1788", // Accent 2
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
