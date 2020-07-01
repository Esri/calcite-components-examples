# Ember

This is an example of how to use [@esri/calcite-components](https://github.com/Esri/calcite-components/) in an Ember application.

## Running the Application

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

### Installing Calcite Components

To install calcite components, first run:

```
npm install --save @esri/calcite-components
```

### Loading the JavaScript

#### With ember-cli-stencil

The typical way to use Stencil components in an Ember application is to use [ember-cli-stencil](https://github.com/alexlafroscia/ember-cli-stencil). This might be a good option if you are using other Stencil libraries besides calcite components in your Ember application.

After following [their installation instructions](https://github.com/alexlafroscia/ember-cli-stencil#installation) you will need to [configure an ember-auto-import `alias`](https://github.com/ef4/ember-auto-import#customizing-build-behavior) for calcite components as follows:

```
module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    alias: {
      // see: https://github.com/alexlafroscia/ember-cli-stencil/issues/14#issuecomment-580053297
      '@esri/calcite-components/loader': '@esri/calcite-components/dist/loader/index.mjs',
    },
  });
};
```

Finally, you will need add the [CSS](#adding-the-css) and [icons](#adding-the-icons).

#### Without ember-cli-stencil

Alternatively, you can import the custom element definitions and polyfills (if you support IE11/Edge) in yourself. This is what ember-cli-stencil does under the hood, but by doing it yourself you have more control over when/how the scripts are loaded:

```
// app/app.js
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';

// applying polyfills is only necessary if you support IE11/Edge
applyPolyfills().then(() => {
  // define calcite components' custom elements on the window
  defineCustomElements(window);

  loadInitializers(App, config.modulePrefix);
});
```

Finally, you will need add the [CSS](#adding-the-css) and [icons](#adding-the-icons).

### Adding the CSS

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

### Adding the icons

Other calcite assets must be copied over to the public folder manually. A `copy` script has been created to make this process easier:

```
npm run copy
```

This will copy the JSON assets required by the icon component to your project's `public/assets` directory.


