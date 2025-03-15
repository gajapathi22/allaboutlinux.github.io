import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/allaboutlinux/',
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react': 'react',
      'react-dom': 'react-dom'
    }
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  },
  css: {
    devSourcemap: true,
  },
  server: {
    port: 5173,
    open: true
  }
})
