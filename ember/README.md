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

To install calcite components in your current project or in a new project:

```
npm i @esri/calcite-components --save-dev
```

### Dependencies

#### ember-auto-import
There is a dependency on `ember-auto-import`. With the most recent version of Ember (> 3.16), this package is part of the initial project definition. Verify that this package is already part of your project, if not then install it.

```ember i ember-auto-import```

ember-auto-import will automatically import calcite components inside the build when it finds an import reference in your code (see next section).

Most of the time, ember-auto-import doesn't require configuration. It should just work for calcite-components.

#### broccoli-funnel
broccoli-funnel is used to copy files during the build.

```npm i broccoli-funnel --save-dev```

### Initializing calcite components when the app starts

The best place to define the calcite-components is in an initializer.

```ember g initializer calcite-components```

```js
// src/initializers/calcite-components.js
import { defineCustomElements } from "@esri/calcite-components/dist/loader";

defineCustomElements(window, {
  resourcesUrl: "assets/calcite/",
});

export function initialize() {}

export default {
  initialize,
};

```

This is basically a no-op initializer from an ember point of view. However, it allows:
- to reference `@esri/calcite-components/dist/loader`. It will allow  ember-auto-import to discover the reference and use webpack to build the calcite components into the the app. This is used at build time.
- define the calcite components inside `window` when the app starts. This is used at runtime.

### Adding the calcite CSS and assets

The ember build needs to be updated to import the calcite css and copy in the build the calcite assets.

The `ember-cli-build.js` file needs to be updated to include:

```js
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Funnel } = require('broccoli-funnel');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {});

  // Import the calcite style sheet inside the app css
  app.import('node_modules/@esri/calcite-components/dist/calcite/calcite.css');

  // Funnel the static assets into the build assets directory
  const calciteAssetsTree = new Funnel('./node_modules/@esri/calcite-components/dist', {
    srcDir: '/',
    include: ['calcite/assets/*/*'],
    destDir: '/assets'
  });

  return app.toTree([calciteAssetsTree]);
};
```

### Using ember-cli-stencil

ember-cli-stencil is interesting but it doesn't allow controlling where the calcite assets are copied in the build.

You can read more at [ember-cli-stencil](https://github.com/alexlafroscia/ember-cli-stencil).

After following [their installation instructions](https://github.com/alexlafroscia/ember-cli-stencil#installation) you will need to [configure an ember-auto-import `alias`](https://github.com/ef4/ember-auto-import#customizing-build-behavior).

```js
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Funnel } = require('broccoli-funnel');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {
    autoImport: {
      alias: {
        '@esri/calcite-components/loader': '@esri/calcite-components/dist/loader/index.mjs'
      }
    }
  });

  // Import the calcite style sheet inside the app css
  app.import('node_modules/@esri/calcite-components/dist/calcite/calcite.css');

  // Funnel the calcite assets into the build assets directory
  const calciteAssetsTree = new Funnel('./node_modules/@esri/calcite-components/dist/calcite/assets', {
    srcDir: '/',
    include: ['*/*'],
    destDir: '/assets'
  });

  return app.toTree([calciteAssetsTree]);
};
```

## Using with JSAPI

You will need to use ember-cli-amd version 3.1.0 or above.
Long story short, ember-cli-amd allows to build an ember app in an AMD compliant way.

```ember i ember-cli-amd```

ember-cli-build.js file without using ember-cli-stencil:

```js
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Funnel } = require('broccoli-funnel');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    amd: {
      loader: 'https://js.arcgis.com/4.16/',
      packages: ['esri', 'dojo'],
    }
  });

  app.import('node_modules/@esri/calcite-components/dist/calcite/calcite.css');

  const trees = [];

  trees.push(new Funnel('./node_modules/@esri/calcite-components/dist', {
    srcDir: '/',
    include: ['calcite/assets/*/*'],
    destDir: '/assets'
  }));

  return app.toTree(trees);
};
```
