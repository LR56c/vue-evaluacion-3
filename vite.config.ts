import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// import Components from 'unplugin-vue-components/vite'
// import {BootstrapVueNextResolver} from 'bootstrap-vue-next'
import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'
import Components from 'unplugin-vue-components/vite'
import RadixVueResolver from 'radix-vue/resolver'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    // Components({
    //   resolvers: [BootstrapVueNextResolver()],
    // }),
    Components({
      dts: true,
      resolvers: [
        RadixVueResolver()
      ],
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
