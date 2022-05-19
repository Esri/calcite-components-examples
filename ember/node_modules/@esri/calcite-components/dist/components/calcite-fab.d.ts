import type { Components, JSX } from "../types/components";

interface CalciteFab extends Components.CalciteFab, HTMLElement {}
export const CalciteFab: {
  prototype: CalciteFab;
  new (): CalciteFab;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
