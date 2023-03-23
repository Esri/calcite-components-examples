import type { Components, JSX } from "../types/components";

interface CalcitePanel extends Components.CalcitePanel, HTMLElement {}
export const CalcitePanel: {
  prototype: CalcitePanel;
  new (): CalcitePanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
