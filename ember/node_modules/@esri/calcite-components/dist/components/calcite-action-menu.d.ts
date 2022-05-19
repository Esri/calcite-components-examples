import type { Components, JSX } from "../types/components";

interface CalciteActionMenu extends Components.CalciteActionMenu, HTMLElement {}
export const CalciteActionMenu: {
  prototype: CalciteActionMenu;
  new (): CalciteActionMenu;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
