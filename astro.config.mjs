import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { astroImageTools } from "astro-imagetools";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
const isProd = import.meta.env.PROD;
const isDev = import.meta.env.DEV;


// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  // base: '.', // Set a path prefix.
  site: "https://example.com/",
  // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: isDev ? "never" : "always",
  // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: "monokai"
    }
  },
  integrations: [react(), sitemap(), robotsTxt(), astroImageTools, tailwind({
    applyBaseStyles: false
  })],
});