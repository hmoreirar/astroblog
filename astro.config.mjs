// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  base: "/astroblog",
  site: "https://hmoreirar.github.io",
  integrations: [sitemap()],
});
