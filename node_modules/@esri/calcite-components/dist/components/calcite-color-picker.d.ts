import type { Components, JSX } from "../types/components";

interface CalciteColorPicker extends Components.CalciteColorPicker, HTMLElement {}
export const CalciteColorPicker: {
  prototype: CalciteColorPicker;
  new (): CalciteColorPicker;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
