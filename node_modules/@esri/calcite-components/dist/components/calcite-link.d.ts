import type { Components, JSX } from "../types/components";

interface CalciteLink extends Components.CalciteLink, HTMLElement {}
export const CalciteLink: {
  prototype: CalciteLink;
  new (): CalciteLink;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
