import type { Components, JSX } from "../types/components";

interface CalciteCheckbox extends Components.CalciteCheckbox, HTMLElement {}
export const CalciteCheckbox: {
  prototype: CalciteCheckbox;
  new (): CalciteCheckbox;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
