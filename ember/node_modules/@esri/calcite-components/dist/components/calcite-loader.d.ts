import type { Components, JSX } from "../types/components";

interface CalciteLoader extends Components.CalciteLoader, HTMLElement {}
export const CalciteLoader: {
  prototype: CalciteLoader;
  new (): CalciteLoader;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
