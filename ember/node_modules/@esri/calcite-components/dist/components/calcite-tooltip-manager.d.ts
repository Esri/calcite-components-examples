import type { Components, JSX } from "../types/components";

interface CalciteTooltipManager extends Components.CalciteTooltipManager, HTMLElement {}
export const CalciteTooltipManager: {
  prototype: CalciteTooltipManager;
  new (): CalciteTooltipManager;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
