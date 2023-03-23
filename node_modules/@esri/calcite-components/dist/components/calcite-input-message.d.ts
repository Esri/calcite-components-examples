import type { Components, JSX } from "../types/components";

interface CalciteInputMessage extends Components.CalciteInputMessage, HTMLElement {}
export const CalciteInputMessage: {
  prototype: CalciteInputMessage;
  new (): CalciteInputMessage;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
