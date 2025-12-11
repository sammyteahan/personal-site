import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import aws from 'astro-sst';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: aws(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
