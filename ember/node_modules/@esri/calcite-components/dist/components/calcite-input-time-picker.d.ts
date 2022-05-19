import type { Components, JSX } from "../types/components";

interface CalciteInputTimePicker extends Components.CalciteInputTimePicker, HTMLElement {}
export const CalciteInputTimePicker: {
  prototype: CalciteInputTimePicker;
  new (): CalciteInputTimePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
