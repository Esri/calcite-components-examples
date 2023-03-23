import type { Components, JSX } from "../types/components";

interface CalciteDropdownItem extends Components.CalciteDropdownItem, HTMLElement {}
export const CalciteDropdownItem: {
  prototype: CalciteDropdownItem;
  new (): CalciteDropdownItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
