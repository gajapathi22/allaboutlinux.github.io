import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    include: "**/*.{js,jsx}",
  })],
  base:'/allaboutlinux/',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  server: {
    port: 5173,
    open: true
  }
})
