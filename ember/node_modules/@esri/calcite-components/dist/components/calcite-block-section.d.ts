import type { Components, JSX } from "../types/components";

interface CalciteBlockSection extends Components.CalciteBlockSection, HTMLElement {}
export const CalciteBlockSection: {
  prototype: CalciteBlockSection;
  new (): CalciteBlockSection;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
