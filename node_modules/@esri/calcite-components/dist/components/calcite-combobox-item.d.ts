import type { Components, JSX } from "../types/components";

interface CalciteComboboxItem extends Components.CalciteComboboxItem, HTMLElement {}
export const CalciteComboboxItem: {
  prototype: CalciteComboboxItem;
  new (): CalciteComboboxItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
