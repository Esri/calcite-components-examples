import type { Components, JSX } from "../types/components";

interface CalciteGraph extends Components.CalciteGraph, HTMLElement {}
export const CalciteGraph: {
  prototype: CalciteGraph;
  new (): CalciteGraph;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
