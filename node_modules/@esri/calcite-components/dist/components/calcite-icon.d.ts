import type { Components, JSX } from "../types/components";

interface CalciteIcon extends Components.CalciteIcon, HTMLElement {}
export const CalciteIcon: {
  prototype: CalciteIcon;
  new (): CalciteIcon;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
