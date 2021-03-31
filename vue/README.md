# Vue

## Project setup

To install dependencies, run:

```
npm install
```

After installation, you can use `npm run serve` to start up a development server at `http://localhost:8080/`.

## Calcite Components with Vue.js

To install calcite components, first run:

```
npm install --save @esri/calcite-components
```

After calcite-components is installed, import the set up the loader in your `src/main.js` file:

```ts
import { applyPolyfills, defineCustomElements } from "@esri/calcite-components/dist/loader";

// Apply polyfills and then define the custom elements
// polyfills are not needed if you don't support IE11 or Edge
applyPolyfills().then(() => {
  defineCustomElements(window);
});

// tell Vue.js to ignore Calcite Components
Vue.config.ignoredElements = [/calcite-\w*/];

new Vue({
  render: h => h(App)
}).$mount("#app");
```

## Adding the CSS

The global calcite components CSS can be added by adding a `<style>` tag in `App.vue`:

```
<style src='@esri/calcite-components/dist/calcite/calcite.css'></style>
```

## Adding the assets

Static assets must be copied over to the public folder manually. A `copy` script has been created to make this process easier:

```
npm run copy
```

This will copy the JSON assets required by the icon component to your project's `public/assets` directory.

