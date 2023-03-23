import type { Components, JSX } from "../types/components";

interface CalciteTipGroup extends Components.CalciteTipGroup, HTMLElement {}
export const CalciteTipGroup: {
  prototype: CalciteTipGroup;
  new (): CalciteTipGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
