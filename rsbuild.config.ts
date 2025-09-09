// rsbuild.config.ts
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  server: {
    port: 3001,
    cors: {
      origin: '*',
    },
  },
  output: {
    assetPrefix: 'auto',
    distPath: {
      root: 'dist'
    }
  },
  dev: {
    hmr: true,
    liveReload: true,
  },
  plugins: [
    pluginVue(),
    pluginModuleFederation({
      name: 'remote1',
      shareStrategy:'version-first',
      exposes: {
        './export-app': './src/export-app.ts',
      },
      shared: {
        vue: {
          eager: true,
          singleton: true,
        },
        'vue-router': {
          eager: true,
          singleton: true,
        },
      },
    }),
  ],
});
