import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

const currentDir = dirname(fileURLToPath(import.meta.url));

function exportStandaloneHtmlPlugin(): Plugin {
  return {
    name: 'export-standalone-mr-patitas-html',
    closeBundle() {
      const sourceHtml = resolve(currentDir, 'dist', 'index.html');
      const targetDir = resolve(currentDir, '..', 'entrega');
      const targetHtml = resolve(targetDir, 'MrPatitas.html');
      mkdirSync(targetDir, { recursive: true });
      copyFileSync(sourceHtml, targetHtml);
    },
  };
}

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile({
      removeViteModuleLoader: true,
    }),
    exportStandaloneHtmlPlugin(),
  ],
  build: {
    target: 'es2020',
    assetsInlineLimit: 100_000_000,
    cssCodeSplit: false,
    outDir: 'dist',
    emptyOutDir: true,
  },
});
