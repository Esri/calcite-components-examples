import type { Components, JSX } from "../types/components";

interface CalciteOption extends Components.CalciteOption, HTMLElement {}
export const CalciteOption: {
  prototype: CalciteOption;
  new (): CalciteOption;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
