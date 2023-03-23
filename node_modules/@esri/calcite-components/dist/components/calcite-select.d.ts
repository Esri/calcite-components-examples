import type { Components, JSX } from "../types/components";

interface CalciteSelect extends Components.CalciteSelect, HTMLElement {}
export const CalciteSelect: {
  prototype: CalciteSelect;
  new (): CalciteSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
