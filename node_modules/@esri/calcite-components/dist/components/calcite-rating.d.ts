import type { Components, JSX } from "../types/components";

interface CalciteRating extends Components.CalciteRating, HTMLElement {}
export const CalciteRating: {
  prototype: CalciteRating;
  new (): CalciteRating;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
