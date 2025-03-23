import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/BookmarkletKit/', // Matches the repo name in the homepage URL
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    minify: 'esbuild', // Ensures efficient minification
    target: 'esnext' // Targets modern browsers
  },
  server: {
    open: true,
    port: 3000,
    host: true // Allows access from network during development
  }
});