import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Define rewrites here for development purposes
    port: 5173,
    open: true,
    proxy: {
      // '/': {
      //   target: '/index.html',
      //   rewrite: (path) => path.replace(/^(\/.*)/, '/index.html'),
      // },
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false
      }
    },
  },
});
