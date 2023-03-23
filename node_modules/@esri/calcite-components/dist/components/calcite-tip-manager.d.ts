import type { Components, JSX } from "../types/components";

interface CalciteTipManager extends Components.CalciteTipManager, HTMLElement {}
export const CalciteTipManager: {
  prototype: CalciteTipManager;
  new (): CalciteTipManager;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
