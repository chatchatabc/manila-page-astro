import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { astroImageTools } from "astro-imagetools";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://manila.page",
  integrations: [tailwind(), mdx(), astroImageTools, sitemap(), robotsTxt()],
});
