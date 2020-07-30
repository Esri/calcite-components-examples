# Rollup

This repo contains a bare-bones example of how to create an application using Rollup and calcite-components. It was generated with [rollup-starter-app](https://github.com/rollup/rollup-starter-lib).

To get started using this project, use:

```
npm install
npm run dev
```

This will install dependencies and then start up a development server on [localhost:5000](http://localhost:5000).

## Calcite Components with Rollup

To install calcite components, first run:

```
npm install --save @esri/calcite-components
```

After calcite-components is installed, import the custom elements bundle and the global CSS in your `main.js` file:

```js
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath(document.currentScript.src);
defineCustomElements();
```

Using `setAssetPath` will ensure that calcite components look for assets like icons in the correct location (more on copying assets below).

Notice in the above code sample we aren't passing any arguments to `defineCustomElements`. This will define all of the available components. You can also import just what you need by selecting individual icons:

```js
import { CalciteButton } from '@esri/calcite-components/dist/custom-elements';

customElements.define('calcite-button', CalciteButton);
```

See Stencil's [custom elements documentation](https://stenciljs.com/docs/custom-elements) for more information.

## Configuring Rollup

There are a few more steps we need to take so that rollup can successfully bundle our application. In addition to the basic configuration provided by rollup-starter-app, we need to:

- copy over icons
- enable importing css into our bundle
- set the output format to `es`

To that end, at the top of your config, add the following imports:

```js
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import path from 'path';
```

### Set the Format to ES

For the module to bundle properly you'll need to use the `es` output format. _**Note**: This will not work if you need to support legacy browsers like IE11_. To set the output format, add the following to the `output` property:

```js
output: [{ dir: path.resolve('public'), format: 'es' }],
```

### Enable CSS Import

Simply add the postcss plugin to the plugins array:

```js
postcss({
  extensions: ['.css']
}),
```

### Copying Icons

To copy the icon assets over, you can use the `rollup-plugin-copy` package, adding it the the same plugins array:

```js
copy({
  targets: [
    {
      src: path.resolve(__dirname, 'node_modules/@esri/calcite-components/dist/calcite/assets'),
      dest: path.resolve(__dirname, 'public')
    },
  ]
}),
```

