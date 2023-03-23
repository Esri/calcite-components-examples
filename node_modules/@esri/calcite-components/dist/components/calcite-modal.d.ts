import type { Components, JSX } from "../types/components";

interface CalciteModal extends Components.CalciteModal, HTMLElement {}
export const CalciteModal: {
  prototype: CalciteModal;
  new (): CalciteModal;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
