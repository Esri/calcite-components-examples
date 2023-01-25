import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    copy({
      // copy over the calcite-components assets
      targets: [
        {
          src: 'node_modules/@esri/calcite-components/dist/calcite/assets/',
          dest: 'public/'
        }
      ]
    })
  ]
});
