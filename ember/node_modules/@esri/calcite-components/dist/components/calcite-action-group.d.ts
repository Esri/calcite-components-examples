import type { Components, JSX } from "../types/components";

interface CalciteActionGroup extends Components.CalciteActionGroup, HTMLElement {}
export const CalciteActionGroup: {
  prototype: CalciteActionGroup;
  new (): CalciteActionGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
