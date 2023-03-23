import type { Components, JSX } from "../types/components";

interface CalciteInputNumber extends Components.CalciteInputNumber, HTMLElement {}
export const CalciteInputNumber: {
  prototype: CalciteInputNumber;
  new (): CalciteInputNumber;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
