# Ember

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Installation

First, install dependencies:

```
npm install
```

After that, start up a dev server with:

```
ember serve
```

This will run the app in the development mode. Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

## Calcite Components with Ember

To install calcite components, first run:

```
npm install --save @esri/calcite-components
```

Then import the custom element definitions and polyfills (if you support IE11/Edge) in `app/app.js`:

```
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';

// applying polyfills is only necessary if you support IE11/Edge
applyPolyfills().then(() => {
  // define calcite components' custom elements on the window
  defineCustomElements(window);

  loadInitializers(App, config.modulePrefix);
});
```

## Adding the CSS

In Ember, you can add the CSS for calcite components by adding a line in your `ember-cli-build.js` file:

```
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {});

  // tell the app to import the global stylesheet
  app.import('node_modules/@esri/calcite-components/dist/calcite/calcite.css');

  return app.toTree();
};
```

## Adding the icons

Other calcite assets must be copied over to the public folder manually. A `copy` script has been created to make this process easier:

```
npm run copy
```

This will copy the JSON assets required by the icon component to your project's `public/assets` directory.


