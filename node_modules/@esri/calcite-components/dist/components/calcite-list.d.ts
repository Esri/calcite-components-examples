import type { Components, JSX } from "../types/components";

interface CalciteList extends Components.CalciteList, HTMLElement {}
export const CalciteList: {
  prototype: CalciteList;
  new (): CalciteList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
