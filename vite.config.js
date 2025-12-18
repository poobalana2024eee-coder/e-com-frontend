import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  // 👇 REQUIRED for S3 static hosting
  base: '/',

  // 👇 Dev server only (ignored in build, but safe to keep)
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
})
