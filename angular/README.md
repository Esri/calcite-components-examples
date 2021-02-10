# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.6.

## Installation

First, install dependencies with

```
npm install
```

After that, you can run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Calcite Components with Angular

To install the calcite-components in an Angular project, run:

```
npm install --save @esri/calcite-components
```

To use custom components in Angular, you have to tell the module to include the schema for custom elements. Fortunately, Angular makes this pretty easy. Add something like the following to your `app.module.ts` file:

```
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

To import the custom elements that make up calcite components, import their definition function from the loader, and call it. Add the following to your `main.ts` file:

```
// import
import { defineCustomElements } from "@esri/calcite-compomnents/dist/loader";
// define the elements, passing in the window
defineCustomElements(window);
```

## Adding the CSS

Calcite Components has a single stylesheet which provides CSS variables for colors. You can import it as a CSS import in `styles.css`:

```
@import "@esri/calcite-components/dist/calcite/calcite.css";
```

## Adding the assets

There are a few static assets (calendar nls data, icon paths) that must be copied over to the assets folder manually. A `copy` script has been created to make this process easier:

```
npm run copy
```

This will copy the JSON assets required by the icon component to your project's `assets` directory.

## Edge and IE11 polyfills

For IE11 and Edge support, you'll need to call the `applyPolyfills()` method prior to defining the elements:

```
import { applyPolyfills, defineCustomElements } from "@esri/calcite-components/dist/loader";
// ...
applyPolyfills().then(() => {
  defineCustomElements(window)
})
```

