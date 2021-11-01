import './style.css'

import '@esri/calcite-components/dist/calcite/calcite.css';
import { defineCustomElements, setAssetPath } from '@esri/calcite-components/dist/custom-elements';

setAssetPath(location.href)
defineCustomElements();

const loader = document.createElement('calcite-loader');
document.body.appendChild(loader);
loader.active = true;
