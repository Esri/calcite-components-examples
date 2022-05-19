import type { Components, JSX } from "../types/components";

interface CalciteSwitch extends Components.CalciteSwitch, HTMLElement {}
export const CalciteSwitch: {
  prototype: CalciteSwitch;
  new (): CalciteSwitch;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
