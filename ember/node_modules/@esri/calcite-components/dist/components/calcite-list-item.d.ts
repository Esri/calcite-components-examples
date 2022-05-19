import type { Components, JSX } from "../types/components";

interface CalciteListItem extends Components.CalciteListItem, HTMLElement {}
export const CalciteListItem: {
  prototype: CalciteListItem;
  new (): CalciteListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
