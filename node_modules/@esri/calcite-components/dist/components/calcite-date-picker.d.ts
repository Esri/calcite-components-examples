import type { Components, JSX } from "../types/components";

interface CalciteDatePicker extends Components.CalciteDatePicker, HTMLElement {}
export const CalciteDatePicker: {
  prototype: CalciteDatePicker;
  new (): CalciteDatePicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
