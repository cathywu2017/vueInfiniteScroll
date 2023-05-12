import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  // 影響 running build 產生 index.html 檔案之路徑
  // https://stackoverflow.com/questions/69744253/vite-build-always-using-static-paths
  base: './',
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.github.com/orgs/nodejs/repos',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
        // configure: (proxy, options) => {
        //   proxy.on('proxyReq', (proxyReq, req, _res) => {
        //     console.log('Sending Request to the Target:', req.method, options.target + proxyReq.path);
        //   });

        //   proxy.on('proxyRes', (proxyRes, req, res) => {
        //     console.log('Receiving Response from the Target:', req.method, options.target + req.url);
        //   });

        //   proxy.on('error', (err, req, res) => {
        //     console.log('Error Occurred:', err);
        //   });
        // },
      },
    },
  },
});
