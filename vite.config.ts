import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss()],
   publicDir: 'public',
  server: {
    watch: {
      usePolling: true,
      interval: 100, // Vérifie les changements toutes les 100ms
    },

  },
})
