import type { Components, JSX } from "../types/components";

interface CalciteDatePickerDay extends Components.CalciteDatePickerDay, HTMLElement {}
export const CalciteDatePickerDay: {
  prototype: CalciteDatePickerDay;
  new (): CalciteDatePickerDay;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
