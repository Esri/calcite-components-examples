import { setAssetPath } from '@esri/calcite-components/dist/components';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/components/calcite-icon';
import '@esri/calcite-components/dist/components/calcite-loader';
import '@esri/calcite-components/dist/calcite/calcite.css';
import './style.css';

setAssetPath(location.href);

const loader = document.createElement('calcite-loader');
document.body.appendChild(loader);
loader.active = true;
