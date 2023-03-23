import type { Components, JSX } from "../types/components";

interface CalciteFlowItem extends Components.CalciteFlowItem, HTMLElement {}
export const CalciteFlowItem: {
  prototype: CalciteFlowItem;
  new (): CalciteFlowItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
