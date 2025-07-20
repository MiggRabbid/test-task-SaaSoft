import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), tailwindcss()],
  define: {
    'process.env.MY_ENV_VAR': JSON.stringify(process.env.MY_ENV_VAR),
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      input: {
        main: 'index.html',
      },
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    host: true,
  },
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: '@use "@/styles/global.styles.scss" as *;\n',
      },
    },
  },
  appType: 'spa',
});
