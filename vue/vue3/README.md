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

After calcite-components is installed, import and call `setAssetPath` to load the assets:

```js
// src/main.js
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(location.href);
```

Import the calcite components when they are used:
```js
// src/components/HelloWorld.vue
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-date-picker";
```

## Adding the CSS

The global calcite components CSS can be added with a `<style>` tag in `HelloWorld.vue`:

```html
<style src='@esri/calcite-components/dist/calcite/calcite.css'></style>
```

## Adding the assets

Static assets must be copied over to the public folder manually. A `copy` script has been created to make this process easier:

```
npm run copy
```

This will copy the JSON assets required by the icon component to your project's `public/assets` directory.


## Recognize custom elements

Set the compiler options to recognize tags starting with `calcite-` as custom elements.

```js
// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => ({
        ...options,
        compilerOptions: {
          // treat any tag that starts with calcite- as custom elements
          isCustomElement: (tag) => tag.startsWith('calcite-'),
        },
      }));
  },
};
```

Check out Vue's [web components documentation](https://v3.vuejs.org/guide/web-components.html) for more information.