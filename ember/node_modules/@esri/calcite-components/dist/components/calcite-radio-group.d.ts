import type { Components, JSX } from "../types/components";

interface CalciteRadioGroup extends Components.CalciteRadioGroup, HTMLElement {}
export const CalciteRadioGroup: {
  prototype: CalciteRadioGroup;
  new (): CalciteRadioGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
