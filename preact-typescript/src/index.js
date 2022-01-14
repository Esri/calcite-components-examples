import "./style/index.css";
import App from "./components/app";
import "@esri/calcite-components/dist/calcite/calcite.css";
import { defineCustomElements } from "@esri/calcite-components/dist/loader";

defineCustomElements(window);

export default App;
