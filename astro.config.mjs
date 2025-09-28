import { defineConfig } from 'astro/config';
import staticAdapter from '@astrojs/static';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: staticAdapter(),
  outDir: './dist',
});
