import Vue from "vue";
import App from "./App.vue";
import {defineCustomElements} from "@esri/calcite-components/dist/loader";

// define the custom elements
defineCustomElements(window);

// tell Vue.js to ignore Calcite Components
Vue.config.ignoredElements = [/calcite-\w*/];
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
