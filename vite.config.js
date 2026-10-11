import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  envDir: '..',
  base: '/goit-advancedjs-hw-03/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
});
