import type { Components, JSX } from "../types/components";

interface CalciteListItemGroup extends Components.CalciteListItemGroup, HTMLElement {}
export const CalciteListItemGroup: {
  prototype: CalciteListItemGroup;
  new (): CalciteListItemGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
