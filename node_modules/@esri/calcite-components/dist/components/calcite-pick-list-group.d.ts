import type { Components, JSX } from "../types/components";

interface CalcitePickListGroup extends Components.CalcitePickListGroup, HTMLElement {}
export const CalcitePickListGroup: {
  prototype: CalcitePickListGroup;
  new (): CalcitePickListGroup;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
