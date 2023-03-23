import type { Components, JSX } from "../types/components";

interface CalciteTabTitle extends Components.CalciteTabTitle, HTMLElement {}
export const CalciteTabTitle: {
  prototype: CalciteTabTitle;
  new (): CalciteTabTitle;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
