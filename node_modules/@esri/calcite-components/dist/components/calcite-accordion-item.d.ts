import type { Components, JSX } from "../types/components";

interface CalciteAccordionItem extends Components.CalciteAccordionItem, HTMLElement {}
export const CalciteAccordionItem: {
  prototype: CalciteAccordionItem;
  new (): CalciteAccordionItem;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
