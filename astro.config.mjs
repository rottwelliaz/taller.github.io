import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages (repositorio de proyecto):
  // https://rottwelliaz.github.io/taller.github.io/
  site: 'https://rottwelliaz.github.io/taller.github.io/',
  base: '/taller.github.io/',

  vite: {
    plugins: [tailwindcss()],
  },
});