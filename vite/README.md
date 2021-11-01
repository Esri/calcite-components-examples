# Vite

This repo contains a bare-bones example of how to create an application using Vite and calcite-components. It was generated with [Vite](https://vitejs.dev/).

To get started using this project, use:

```
npm install
npm run dev
```

This will install dependencies and then start up a development server on [localhost:3000](http://localhost:3000).

## Calcite Components with Vite

To install calcite components, first run:

```
npm install --save @esri/calcite-components
```

After calcite-components is installed, import the custom elements bundle and the global CSS in your `main.js` file:

```js
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath(location.href)
defineCustomElements();
```

Using `setAssetPath` will ensure that calcite components look for assets like icons in the correct location (more on copying assets below).

Notice in the above code sample we aren't passing any arguments to `defineCustomElements`. This will define all of the available components. You can also import just what you need by selecting individual icons:

```js
import { CalciteButton } from '@esri/calcite-components/dist/custom-elements';

customElements.define('calcite-button', CalciteButton);
```

See Stencil's [custom elements documentation](https://stenciljs.com/docs/custom-elements) for more information.

## Configuring Vite

There are a few more steps we need to take so that Vite can successfully bundle our application. In addition to the basic configuration provided by Vite, we need to:

- copy over icons

To that end, at the top of your config, add the following import:

```js
import { defineConfig } from 'vite';
import copy from 'rollup-plugin-copy';
```

### Copying Icons

To copy the icon assets over, you can use the `rollup-plugin-copy` package, adding it the the same plugins array:

```js
export default defineConfig({
	plugins: [
		copy({
			targets: [
				{
					src: 'node_modules/@esri/calcite-components/dist/calcite/assets/',
					dest: 'public/'
				}
			]
		})
	]
})
```

