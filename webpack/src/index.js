import "@esri/calcite-components/dist/calcite/calcite.css";
import {defineCustomElements} from "@esri/calcite-components/dist/loader";

// define the custom elements
defineCustomElements(window);

document.getElementById("test").innerHTML =
  "<div><calcite-button icon-start='apps'>button</calcite-button></div>";
