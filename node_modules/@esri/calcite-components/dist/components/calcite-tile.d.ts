import type { Components, JSX } from "../types/components";

interface CalciteTile extends Components.CalciteTile, HTMLElement {}
export const CalciteTile: {
  prototype: CalciteTile;
  new (): CalciteTile;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
