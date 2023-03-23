import type { Components, JSX } from "../types/components";

interface CalcitePopover extends Components.CalcitePopover, HTMLElement {}
export const CalcitePopover: {
  prototype: CalcitePopover;
  new (): CalcitePopover;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
