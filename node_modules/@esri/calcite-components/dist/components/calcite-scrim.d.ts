import type { Components, JSX } from "../types/components";

interface CalciteScrim extends Components.CalciteScrim, HTMLElement {}
export const CalciteScrim: {
  prototype: CalciteScrim;
  new (): CalciteScrim;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
