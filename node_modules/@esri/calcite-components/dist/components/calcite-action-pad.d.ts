import type { Components, JSX } from "../types/components";

interface CalciteActionPad extends Components.CalciteActionPad, HTMLElement {}
export const CalciteActionPad: {
  prototype: CalciteActionPad;
  new (): CalciteActionPad;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
