import type { Components, JSX } from "../types/components";

interface CalciteLabel extends Components.CalciteLabel, HTMLElement {}
export const CalciteLabel: {
  prototype: CalciteLabel;
  new (): CalciteLabel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
