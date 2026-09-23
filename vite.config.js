import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Path relatif supaya situs jalan di GitHub Pages (subfolder /portfolio/) maupun di root domain.
  base: './',
  plugins: [react(), tailwindcss()],
})
