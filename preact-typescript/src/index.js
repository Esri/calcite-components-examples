import "./style/index.css";
import App from "./components/app.tsx";
import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements } from '@esri/calcite-components/dist/loader';

// define the custom elements
defineCustomElements(window);

export default App;
