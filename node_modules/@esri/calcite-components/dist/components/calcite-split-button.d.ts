import type { Components, JSX } from "../types/components";

interface CalciteSplitButton extends Components.CalciteSplitButton, HTMLElement {}
export const CalciteSplitButton: {
  prototype: CalciteSplitButton;
  new (): CalciteSplitButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
