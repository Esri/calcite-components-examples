import type { Components, JSX } from "../types/components";

interface CalciteAction extends Components.CalciteAction, HTMLElement {}
export const CalciteAction: {
  prototype: CalciteAction;
  new (): CalciteAction;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
