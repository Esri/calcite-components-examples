import type { Components, JSX } from "../types/components";

interface CalciteAlert extends Components.CalciteAlert, HTMLElement {}
export const CalciteAlert: {
  prototype: CalciteAlert;
  new (): CalciteAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
