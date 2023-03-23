import type { Components, JSX } from "../types/components";

interface CalciteRadioButton extends Components.CalciteRadioButton, HTMLElement {}
export const CalciteRadioButton: {
  prototype: CalciteRadioButton;
  new (): CalciteRadioButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
