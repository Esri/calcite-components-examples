import type { Components, JSX } from "../types/components";

interface CalciteInput extends Components.CalciteInput, HTMLElement {}
export const CalciteInput: {
  prototype: CalciteInput;
  new (): CalciteInput;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
