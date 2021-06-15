# React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

```
yarn start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Calcite Components with React

To install calcite components, first run:

```
npm install --save @esri/calcite-components @esri/calcite-components-react
```

After calcite-components is installed, import the set up the loader in your `index.js` file:

```
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';

// Apply polyfills and then define the custom elements
// polyfills are not needed if you don't support IE11 or Edge
applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

## Adding the CSS

The global calcite components CSS can be added by importing it into your `src/App.js` file:

```
import '@esri/calcite-components/dist/calcite/calcite.css';
```

## Adding the components

Then import any components you'd like to use:

```
import { CalciteAvatar, CalciteButton, CalciteIcon, CalciteSlider } from "@esri/calcite-components-react";
```

## Adding the assets

The static assets must be copied over to the public folder manually. A `copy` script has been created to make this process easier:

```
npm run copy
```

This will copy the JSON assets required by the icon component to your project's `public/assets` directory.


## Why not just use the web components directly?

Because React uses a synthetic event system, the custom events emitted from calcite components won't work with JSX in React. For example, say you want to update some value when the calcite-slider component changes. When using the standard web components, you need to save a ref to the element, and add a listener:

```
const sliderEl = useRef(null);
const [sliderValue, setSliderValue] = useState(50);

function onUpdate(event) {
  setSliderValue(event.target.value);
}

// need to access the dom node to set custom event listeners or props that aren't strings / numbers
// https://stenciljs.com/docs/react#properties-and-events
useEffect(
  (_) => {
    sliderEl.current.addEventListener("calciteSliderUpdate", onUpdate);
  },
  [sliderEl]
);
```

Using calcite-components-react, these events are connected for you:

```
const [sliderValue, setSliderValue] = useState(50);
<CalciteSlider onCalciteSliderUpdate={(e) => setSliderValue(e.target.value)} />;
```