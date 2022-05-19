import type { Components, JSX } from "../types/components";

interface CalciteStepperItem extends Components.CalciteStepperItem, HTMLElement {}
export const CalciteStepperItem: {
  prototype: CalciteStepperItem;
  new (): CalciteStepperItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
