import "@esri/calcite-components/dist/calcite/calcite.css";
import {
  applyPolyfills,
  defineCustomElements
} from "@esri/calcite-components/dist/loader";

// Apply polyfills and then define the custom elements
// polyfills are not needed if you don't support IE11 or Edge
applyPolyfills().then(() => {
  defineCustomElements(window);
});

document.getElementById("test").innerHTML =
  "<div><calcite-button icon-start='apps'>button</calcite-button></div>";
