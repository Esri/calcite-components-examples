import type { Components, JSX } from "../types/components";

interface CalciteTree extends Components.CalciteTree, HTMLElement {}
export const CalciteTree: {
  prototype: CalciteTree;
  new (): CalciteTree;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
