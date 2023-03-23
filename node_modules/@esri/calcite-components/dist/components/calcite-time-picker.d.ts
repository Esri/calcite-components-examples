import type { Components, JSX } from "../types/components";

interface CalciteTimePicker extends Components.CalciteTimePicker, HTMLElement {}
export const CalciteTimePicker: {
  prototype: CalciteTimePicker;
  new (): CalciteTimePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
