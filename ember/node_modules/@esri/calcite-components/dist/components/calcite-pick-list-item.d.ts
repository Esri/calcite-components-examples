import type { Components, JSX } from "../types/components";

interface CalcitePickListItem extends Components.CalcitePickListItem, HTMLElement {}
export const CalcitePickListItem: {
  prototype: CalcitePickListItem;
  new (): CalcitePickListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
