import type { Components, JSX } from "../types/components";

interface CalciteTileSelect extends Components.CalciteTileSelect, HTMLElement {}
export const CalciteTileSelect: {
  prototype: CalciteTileSelect;
  new (): CalciteTileSelect;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
