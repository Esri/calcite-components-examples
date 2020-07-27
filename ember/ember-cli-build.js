'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const {
  Funnel
} = require('broccoli-funnel');

module.exports = function (defaults) {

  let app = new EmberApp(defaults, {});

  // Import the calcite CSS into the app CSS
  app.import('node_modules/@esri/calcite-components/dist/calcite/calcite.css');

  // Funnel the calcite icon into the build assets directory
  let calciteIconTree = new Funnel('./node_modules/@esri/calcite-components/dist', {
    srcDir: '/',
    include: ['calcite/assets/*.json'],
    destDir: '/assets'
  });

  return app.toTree([calciteIconTree]);
};
