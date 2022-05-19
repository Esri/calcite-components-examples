import type { Components, JSX } from "../types/components";

interface CalciteActionBar extends Components.CalciteActionBar, HTMLElement {}
export const CalciteActionBar: {
  prototype: CalciteActionBar;
  new (): CalciteActionBar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
