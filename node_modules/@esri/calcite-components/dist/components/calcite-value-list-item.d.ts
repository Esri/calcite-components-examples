import type { Components, JSX } from "../types/components";

interface CalciteValueListItem extends Components.CalciteValueListItem, HTMLElement {}
export const CalciteValueListItem: {
  prototype: CalciteValueListItem;
  new (): CalciteValueListItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
