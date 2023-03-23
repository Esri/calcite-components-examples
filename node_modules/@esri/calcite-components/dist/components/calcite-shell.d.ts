import type { Components, JSX } from "../types/components";

interface CalciteShell extends Components.CalciteShell, HTMLElement {}
export const CalciteShell: {
  prototype: CalciteShell;
  new (): CalciteShell;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
