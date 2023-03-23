import type { Components, JSX } from "../types/components";

interface CalciteOptionGroup extends Components.CalciteOptionGroup, HTMLElement {}
export const CalciteOptionGroup: {
  prototype: CalciteOptionGroup;
  new (): CalciteOptionGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
