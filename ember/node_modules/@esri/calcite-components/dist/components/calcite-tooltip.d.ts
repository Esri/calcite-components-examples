import type { Components, JSX } from "../types/components";

interface CalciteTooltip extends Components.CalciteTooltip, HTMLElement {}
export const CalciteTooltip: {
  prototype: CalciteTooltip;
  new (): CalciteTooltip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
