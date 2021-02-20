# Tailwind

A simple starter project for using Tailwind with calcite components.

To get started:

1. Install the dependencies:

   ```bash
   # Using npm
   npm install

   # Using Yarn
   yarn
   ```

2. Start the development server:

   ```bash
   # Using npm
   npm run serve

   # Using Yarn
   yarn serve
   ```

   Now you should be able to see the project running at localhost:8080.

4. Open `public/index.html` in your editor and start experimenting!

## Using calcite components

To use calcite components in the sandbox page, you must first copy over the library into the `build` folder. This step is performed for you automatically before every `npm run serve`.

## Sharing the calcite component Tailwind configuration

Calcite components makes their tailwind configuration available as part of the npm package so that other projects can share those styles. By using these styles within your own app, you'll be able to ensure your app looks and feels like it's part of the same calcite family. To import the config, simply require it from your own `tailwind.config.js` file:

```js
var calciteTheme = require("@esri/calcite-components/tailwind.config");

module.exports = {
  purge: ["./public/**/*.html"],
  ...calciteTheme
};
```

## Building for production

Even though this isn't necessarily a starter kit for a proper project, we've included an example of setting up [cssnano](https://cssnano.co/) to optimize your CSS for production.

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production

# Using Yarn
yarn production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.
