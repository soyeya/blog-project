import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import babel from 'vite-plugin-babel';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    babel({
      presets: [
        ['@babel/preset-env', {
          targets: '> 0.25%, not dead', // 최신 브라우저 대상
          useBuiltIns: 'usage',
          corejs: 3
        }]
      ],
      plugins: ['@babel/plugin-transform-runtime']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    target: 'es5', // ES5 호환성 추가
  }
})

