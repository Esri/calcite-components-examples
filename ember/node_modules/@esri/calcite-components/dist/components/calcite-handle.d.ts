import type { Components, JSX } from "../types/components";

interface CalciteHandle extends Components.CalciteHandle, HTMLElement {}
export const CalciteHandle: {
  prototype: CalciteHandle;
  new (): CalciteHandle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
