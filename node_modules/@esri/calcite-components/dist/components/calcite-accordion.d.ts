import type { Components, JSX } from "../types/components";

interface CalciteAccordion extends Components.CalciteAccordion, HTMLElement {}
export const CalciteAccordion: {
  prototype: CalciteAccordion;
  new (): CalciteAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
