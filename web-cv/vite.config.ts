import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/cvai/',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use './vars.scss' as *;`
      }
    }
  }
})
