import type { Components, JSX } from "../types/components";

interface CalciteButton extends Components.CalciteButton, HTMLElement {}
export const CalciteButton: {
  prototype: CalciteButton;
  new (): CalciteButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
