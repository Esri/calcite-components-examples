import type { Components, JSX } from "../types/components";

interface CalciteInputText extends Components.CalciteInputText, HTMLElement {}
export const CalciteInputText: {
  prototype: CalciteInputText;
  new (): CalciteInputText;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
