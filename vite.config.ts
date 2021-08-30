import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   outDir: 'prodution_dist',
  // },
  define: {
    'process.env': process.env,
    'process.argv': process.argv
  },
  plugins: [
    vue({
      include: [/\.vue$/],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
})
