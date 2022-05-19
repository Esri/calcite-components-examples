/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
function e(){}function n(n,t=!1){if(n.disabled)return n.el.setAttribute("tabindex","-1"),n.el.setAttribute("aria-disabled","true"),n.el.contains(document.activeElement)&&document.activeElement.blur(),void(n.el.click=e);n.el.click=HTMLElement.prototype.click,"function"==typeof t?n.el.setAttribute("tabindex",t.call(n)?"0":"-1"):!0===t?n.el.setAttribute("tabindex","0"):!1===t&&n.el.removeAttribute("tabindex"),n.el.removeAttribute("aria-disabled")}export{n as u}