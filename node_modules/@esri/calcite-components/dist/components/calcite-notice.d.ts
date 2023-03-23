import type { Components, JSX } from "../types/components";

interface CalciteNotice extends Components.CalciteNotice, HTMLElement {}
export const CalciteNotice: {
  prototype: CalciteNotice;
  new (): CalciteNotice;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
