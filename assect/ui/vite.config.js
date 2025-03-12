import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwind from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwind(),],
  server:{
    port:3000,
    proxy: {
            '/api':{
              target: 'http://api:8000/',
              changeOrigin: true,
              rewrite: (path) => path.replace(/^\/api/,""),
      
            },
          },
        },
      })
 