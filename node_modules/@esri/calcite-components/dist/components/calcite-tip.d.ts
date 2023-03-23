import type { Components, JSX } from "../types/components";

interface CalciteTip extends Components.CalciteTip, HTMLElement {}
export const CalciteTip: {
  prototype: CalciteTip;
  new (): CalciteTip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
