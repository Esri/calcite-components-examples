import { defineCustomElements } from "@esri/calcite-components/dist/loader";

defineCustomElements(window, {
  resourcesUrl: "assets/calcite/",
});

export function initialize() {}

export default {
  initialize,
};
