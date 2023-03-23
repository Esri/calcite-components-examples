import type { Components, JSX } from "../types/components";

interface CalciteTabNav extends Components.CalciteTabNav, HTMLElement {}
export const CalciteTabNav: {
  prototype: CalciteTabNav;
  new (): CalciteTabNav;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
