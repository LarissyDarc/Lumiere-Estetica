import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Caminhos relativos permitem publicar em qualquer repositório do GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: './',
})
