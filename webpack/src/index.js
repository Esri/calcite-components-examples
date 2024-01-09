import '@esri/calcite-components/dist/components/calcite-modal';
import '@esri/calcite-components/dist/components/calcite-button';
import '@esri/calcite-components/dist/calcite/calcite.css';
import { setAssetPath } from '@esri/calcite-components/dist/components';

setAssetPath(location.href);

const html = ` <calcite-modal open id='modal1'>
    <div slot='header'>Modal 1</div>
    <div slot='content'>
      <calcite-button id='openBtn'>open second modal</calcite-button>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur.
      </div>
    </div>
  </calcite-modal>`;

document.getElementById('test').innerHTML = html;

const btn = document.getElementById('openBtn');
btn.addEventListener('click', () => {
  const content = document.createElement('calcite-button');
  content.innerHTML = 'focusable';
  content.slot = 'content';
  const modal2 = document.createElement('calcite-modal');
  modal2.appendChild(content);
  modal2.addEventListener('calciteModalClose', () => {
    document.body.removeChild(modal2);
  });
  document.body.appendChild(modal2);
  modal2.open = true;
});
