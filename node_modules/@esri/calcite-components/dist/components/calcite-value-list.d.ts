import type { Components, JSX } from "../types/components";

interface CalciteValueList extends Components.CalciteValueList, HTMLElement {}
export const CalciteValueList: {
  prototype: CalciteValueList;
  new (): CalciteValueList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
