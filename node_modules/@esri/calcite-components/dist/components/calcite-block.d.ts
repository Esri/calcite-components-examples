import type { Components, JSX } from "../types/components";

interface CalciteBlock extends Components.CalciteBlock, HTMLElement {}
export const CalciteBlock: {
  prototype: CalciteBlock;
  new (): CalciteBlock;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
