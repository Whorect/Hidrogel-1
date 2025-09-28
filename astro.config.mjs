import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import staticAdapter from '@astrojs/static';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://<nama-project>.pages.dev',
  integrations: [sitemap()],
  output: 'static',
  adapter: staticAdapter(),
});
