import type { Components, JSX } from "../types/components";

interface CalciteSlider extends Components.CalciteSlider, HTMLElement {}
export const CalciteSlider: {
  prototype: CalciteSlider;
  new (): CalciteSlider;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
