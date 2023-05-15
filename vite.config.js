import { fileURLToPath, URL } from 'node:url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  // 影響 running build 產生 index.html 檔案之路徑
  // https://stackoverflow.com/questions/69744253/vite-build-always-using-static-paths
  base: '/dist/',
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
        // secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
