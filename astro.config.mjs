// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import aws from "astro-sst";

// https://astro.build/config
export default defineConfig({
  site: "https://sammyteahan.com",
  output: "server",
  adapter: aws(),
  vite: {
    plugins: [tailwindcss()],
  },
});
