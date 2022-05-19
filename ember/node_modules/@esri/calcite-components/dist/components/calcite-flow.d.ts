import type { Components, JSX } from "../types/components";

interface CalciteFlow extends Components.CalciteFlow, HTMLElement {}
export const CalciteFlow: {
  prototype: CalciteFlow;
  new (): CalciteFlow;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
