import type { Components, JSX } from "../types/components";

interface CalciteProgress extends Components.CalciteProgress, HTMLElement {}
export const CalciteProgress: {
  prototype: CalciteProgress;
  new (): CalciteProgress;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
