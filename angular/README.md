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

```ts
// src/app/app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

Next, import and call `setAssetPath`:

```ts
// src/main.ts
import { setAssetPath } from "@esri/calcite-components/dist/components";
setAssetPath(location.href);
```

Now that everything is set up, you can import the components:

```ts
// src/app/app.component.ts
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-date-picker";
```

## Adding the CSS

Calcite Components has a single stylesheet which provides CSS variables for colors. You can import it as a CSS import in `styles.css`:

```
@import "@esri/calcite-components/dist/calcite/calcite.css";
```

## Adding the assets

There are a few static assets (calendar nls data, icon paths) used by calcite components. You can add the following to `architect.build.options.assets` in the `angular.json` file to serve these assets directly from the calcite components library in `node_modules`:

```json
{
  "glob": "**/*.json",
  "input": "./node_modules/@esri/calcite-components/dist/calcite/assets/",
  "output": "./assets/"
}
```
