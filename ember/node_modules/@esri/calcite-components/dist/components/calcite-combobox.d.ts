import type { Components, JSX } from "../types/components";

interface CalciteCombobox extends Components.CalciteCombobox, HTMLElement {}
export const CalciteCombobox: {
  prototype: CalciteCombobox;
  new (): CalciteCombobox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
