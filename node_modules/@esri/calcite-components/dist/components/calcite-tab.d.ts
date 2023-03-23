import type { Components, JSX } from "../types/components";

interface CalciteTab extends Components.CalciteTab, HTMLElement {}
export const CalciteTab: {
  prototype: CalciteTab;
  new (): CalciteTab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
