import type { Components, JSX } from "../types/components";

interface CalcitePagination extends Components.CalcitePagination, HTMLElement {}
export const CalcitePagination: {
  prototype: CalcitePagination;
  new (): CalcitePagination;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
