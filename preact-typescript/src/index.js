import "./style/index.css";
import App from "./components/app.tsx";
import '@esri/calcite-components/dist/calcite/calcite.css';
import { applyPolyfills, defineCustomElements } from '@esri/calcite-components/dist/loader';

applyPolyfills().then(() => {
  defineCustomElements(window);
});

export default App;
