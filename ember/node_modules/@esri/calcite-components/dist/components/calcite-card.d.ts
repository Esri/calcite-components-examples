import type { Components, JSX } from "../types/components";

interface CalciteCard extends Components.CalciteCard, HTMLElement {}
export const CalciteCard: {
  prototype: CalciteCard;
  new (): CalciteCard;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
