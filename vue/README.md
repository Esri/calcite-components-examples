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

After calcite-components is installed, import and call `setAssetPath` and configure the vue app:

```js
// src/main.js
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(location.href);

// tell Vue.js to ignore Calcite Components
Vue.config.ignoredElements = [/calcite-\w*/];
Vue.config.productionTip = false;
```

Import the calcite components when they are used:
```js
// src/components/HellowWorld.vue
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-date-picker";
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

