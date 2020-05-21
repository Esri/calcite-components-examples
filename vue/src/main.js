import Vue from "vue";
import App from "./App.vue";
import {
  applyPolyfills,
  defineCustomElements
} from "@esri/calcite-components/dist/loader";

// Apply polyfills and then define the custom elements
// polyfills are not needed if you don't support IE11 or Edge
applyPolyfills().then(() => {
  defineCustomElements(window);
});

// tell Vue.js to ignore Calcite Components
Vue.config.ignoredElements = [/calcite-\w*/];
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
