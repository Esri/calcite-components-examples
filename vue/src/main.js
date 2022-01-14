import Vue from "vue";
import App from "./App.vue";
import { setAssetPath } from '@esri/calcite-components/dist/components';

setAssetPath(location.href);

// tell Vue.js to ignore Calcite Components
Vue.config.ignoredElements = [/calcite-\w*/];
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
