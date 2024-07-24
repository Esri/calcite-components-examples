import { resolve } from 'path';
import { defineConfig, normalizePath } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(resolve(
            'node_modules',
            '@esri',
            'calcite-components',
            'dist',
            'calcite',
            'assets'
          )),
          dest: normalizePath('.')
        }
      ]
    })
  ]
});
