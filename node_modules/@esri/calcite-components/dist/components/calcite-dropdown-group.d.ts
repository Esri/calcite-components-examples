import type { Components, JSX } from "../types/components";

interface CalciteDropdownGroup extends Components.CalciteDropdownGroup, HTMLElement {}
export const CalciteDropdownGroup: {
  prototype: CalciteDropdownGroup;
  new (): CalciteDropdownGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
