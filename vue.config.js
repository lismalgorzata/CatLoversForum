const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: 'Cat Lovers Forum',
    themeColor: '#000000',
    msTileColor: '#ffffff',
    manifestOptions: {
      icons: [
        {
          src: 'src/assets/favicon.ico',
          sizes: '64x64 32x32 24x24 16x16',
          type: 'image/x-icon'
        },
        {
          src: 'src/assets/cat192.png',
          type: 'image/png',
          sizes: '192x192'
        },
        {
          src: 'src/assets/cat512.png',
          type: 'image/png',
          sizes: '512x512'
        }
      ]
    }
  }
});
