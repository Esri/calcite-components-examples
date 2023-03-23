import type { Components, JSX } from "../types/components";

interface CalciteInlineEditable extends Components.CalciteInlineEditable, HTMLElement {}
export const CalciteInlineEditable: {
  prototype: CalciteInlineEditable;
  new (): CalciteInlineEditable;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
