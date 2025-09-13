import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/RemoteComponent.jsx'),
      fileName: (format) => `index.${format}.js`,
      formats: ['cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        exports: 'named',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'index.css';
          }
          return assetInfo.name;
        }
      },
    },
  }
})