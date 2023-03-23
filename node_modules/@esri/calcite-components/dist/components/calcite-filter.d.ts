import type { Components, JSX } from "../types/components";

interface CalciteFilter extends Components.CalciteFilter, HTMLElement {}
export const CalciteFilter: {
  prototype: CalciteFilter;
  new (): CalciteFilter;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
