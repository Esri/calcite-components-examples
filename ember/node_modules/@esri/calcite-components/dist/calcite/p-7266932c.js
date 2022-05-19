/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.82
 */
import{f as t}from"./p-f74193a3.js";import{c as o}from"./p-e9e1dee1.js";const n=new Set;let s;const c={childList:!0};function e(t){s||(s=o("mutation",i)),s.observe(t.el,c)}function f(t){n.delete(t.el),i(s.takeRecords()),s.disconnect();for(const[t]of n.entries())s.observe(t,c)}function i(o){o.forEach((({target:o})=>{t(o)}))}export{e as c,f as d}