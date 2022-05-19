import type { Components, JSX } from "../types/components";

interface CalcitePickList extends Components.CalcitePickList, HTMLElement {}
export const CalcitePickList: {
  prototype: CalcitePickList;
  new (): CalcitePickList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
