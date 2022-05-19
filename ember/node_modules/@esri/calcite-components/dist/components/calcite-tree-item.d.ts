import type { Components, JSX } from "../types/components";

interface CalciteTreeItem extends Components.CalciteTreeItem, HTMLElement {}
export const CalciteTreeItem: {
  prototype: CalciteTreeItem;
  new (): CalciteTreeItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
