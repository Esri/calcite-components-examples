import type { Components, JSX } from "../types/components";

interface CalciteTabs extends Components.CalciteTabs, HTMLElement {}
export const CalciteTabs: {
  prototype: CalciteTabs;
  new (): CalciteTabs;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
