import type { Components, JSX } from "../types/components";

interface CalcitePopoverManager extends Components.CalcitePopoverManager, HTMLElement {}
export const CalcitePopoverManager: {
  prototype: CalcitePopoverManager;
  new (): CalcitePopoverManager;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
