var __rest = (this && this.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
import { h, Host } from "@stencil/core";
import { CSS } from "./resources";
import { getElementDir, getElementTheme } from "../../utils/dom";
export const List = (_a) => {
  var { props: { disabled, loading, filterEnabled, dataForFilter, handleFilter, filterPlaceholder, el } } = _a, rest = __rest(_a, ["props"]);
  const defaultSlot = h("slot", null);
  return (h(Host, Object.assign({ "aria-busy": loading.toString(), "aria-disabled": disabled.toString(), role: "menu" }, rest),
    h("section", null,
      h("header", { class: { [CSS.sticky]: true } },
        filterEnabled ? (h("calcite-filter", { "aria-label": filterPlaceholder, data: dataForFilter, dir: getElementDir(el), onCalciteFilterChange: handleFilter, placeholder: filterPlaceholder })) : null,
        h("slot", { name: "menu-actions" })),
      loading || disabled ? (h("calcite-scrim", { loading: loading, theme: getElementTheme(el) }, defaultSlot)) : (defaultSlot))));
};
export default List;
