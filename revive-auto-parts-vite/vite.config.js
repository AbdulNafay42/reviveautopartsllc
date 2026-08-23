import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        faq: resolve(__dirname, 'faq.html'),
        parts: resolve(__dirname, 'parts.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        returns: resolve(__dirname, 'returns.html'),
        services: resolve(__dirname, 'services.html'),
        shipping: resolve(__dirname, 'shipping.html'),
        terms: resolve(__dirname, 'terms.html'),
      },
    },
  },
});
