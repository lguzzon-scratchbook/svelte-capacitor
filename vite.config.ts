import { defineConfig } from 'vite'
import { ViteAliases } from 'vite-aliases'
import { svelte } from '@sveltejs/vite-plugin-svelte';

const aliases = ViteAliases();
const preprocess = require('svelte-preprocess')


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ preprocess: preprocess() })],
  publicDir: './assets/',
  build: {
    outDir: './public/'
  },
  resolve: {
    alias: aliases
  },
  optimizeDeps: { exclude: ["@roxi/routify", "@urql/svelte"] },
})
