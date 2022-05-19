import type { Components, JSX } from "../types/components";

interface CalciteAvatar extends Components.CalciteAvatar, HTMLElement {}
export const CalciteAvatar: {
  prototype: CalciteAvatar;
  new (): CalciteAvatar;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
