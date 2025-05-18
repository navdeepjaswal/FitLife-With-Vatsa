import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// const path = require('path')

export default defineConfig(({ command }) => ({
  base: command === 'serve'
    ? '/'                          // dev: serve at localhost:5173/
    : '/FitLife-With-Vatsa/',      // prod: build with sub-directory
  plugins: [react()],
}));
