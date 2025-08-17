import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Sets the root of the frontend app to the 'client' folder
  root: 'client',

  // Defines aliases for easier import paths
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'client/src'),
    },
  },

  build: {
    // Correctly places the build output in a 'dist' folder at the top level
    outDir: '../dist',
    emptyOutDir: true,
  },
})