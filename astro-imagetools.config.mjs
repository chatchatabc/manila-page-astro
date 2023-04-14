import { defineConfig } from "astro-imagetools/config";

export default defineConfig({
  format: ["webp"],
  fallbackFormat: "webp",
  includeSourceFormat: false,
  attributes: {
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
});
