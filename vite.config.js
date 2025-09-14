import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import packageJson from './package.json'
const name = packageJson.name
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: resolve(fileURLToPath(new URL('.', import.meta.url)), 'src/RemoteComponent.jsx'),
      fileName: (format) => `${name}.${format}.js`,
      formats: ['cjs']
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        exports: 'named'
      },
    },
  }
})