import type { Components, JSX } from "../types/components";

interface CalciteShellPanel extends Components.CalciteShellPanel, HTMLElement {}
export const CalciteShellPanel: {
  prototype: CalciteShellPanel;
  new (): CalciteShellPanel;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
