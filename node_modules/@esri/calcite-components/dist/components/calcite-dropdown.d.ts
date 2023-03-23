import type { Components, JSX } from "../types/components";

interface CalciteDropdown extends Components.CalciteDropdown, HTMLElement {}
export const CalciteDropdown: {
  prototype: CalciteDropdown;
  new (): CalciteDropdown;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
