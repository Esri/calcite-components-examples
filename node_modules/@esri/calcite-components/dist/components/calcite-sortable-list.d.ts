import type { Components, JSX } from "../types/components";

interface CalciteSortableList extends Components.CalciteSortableList, HTMLElement {}
export const CalciteSortableList: {
  prototype: CalciteSortableList;
  new (): CalciteSortableList;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
