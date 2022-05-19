import type { Components, JSX } from "../types/components";

interface CalciteChip extends Components.CalciteChip, HTMLElement {}
export const CalciteChip: {
  prototype: CalciteChip;
  new (): CalciteChip;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
