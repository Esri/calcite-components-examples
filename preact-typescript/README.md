# Preact

This project was bootstrapped with [Preact CLI](https://github.com/preactjs/preact-cli).

In the project directory, you can run:

```
npm install
npm run dev
```

This will install dependencies and then start up a development server on [localhost:8080](http://localhost:8080).

## Calcite Components with Preact

To install calcite components, first run:

```
npm install --save @esri/calcite-components
```

After calcite-components is installed, import the loader in your `index.js` file:

```js
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';

// Apply polyfills and then define the custom elements
// polyfills are not needed if you don't support IE11 or Edge
applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

## Adding the CSS

The global calcite components CSS can be imported into your `index.js` file as well:

```js
import '@esri/calcite-components/dist/calcite/calcite.css';
```

## Adding the icons

The icon assets must be copied over to the assets folder manually. A `copy` script has been created to make this process easier:

```
npm run copy
```

This will copy the JSON assets required by the icon component to your project's `assets` directory.


## Using TypeScript

When you use calcite-components tags in your `tsx` files, you'll get an error when you try to use a custom element tag. To make TypeScript aware of calcite-components (and their prop types) you must also add a file to your `tsconfig.json`:

```
"files": [
  "node_modules/@esri/calcite-components/dist/types/preact.d.ts"
],
```

## Events

To add event handlers for custom events coming from calcite components, you must slightly alter the capitalization of the event name. For example, in React, you'd use `onCalciteDropdownClose`, but in Preact, you must change this to `oncalciteDropdownClose`. Preact will only fire your handler if you use this casing. You can see an example event handler in `src/routes/home/index.tsx`.
