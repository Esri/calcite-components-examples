import {
  applyPolyfills,
  defineCustomElements
} from '@esri/calcite-components/dist/loader';

// Applying polyfills is only necessary if you support IE11/Edge
applyPolyfills().then(() => {
  // define calcite components' custom elements on the window
  // define the resource Url as well
  defineCustomElements(window, {
    resourcesUrl: "assets/calcite/"
  });

});

export function initialize() {}

export default {
  initialize
};
