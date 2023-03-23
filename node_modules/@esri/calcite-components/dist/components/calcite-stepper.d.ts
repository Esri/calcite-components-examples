import type { Components, JSX } from "../types/components";

interface CalciteStepper extends Components.CalciteStepper, HTMLElement {}
export const CalciteStepper: {
  prototype: CalciteStepper;
  new (): CalciteStepper;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
