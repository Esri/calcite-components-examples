import { VNode } from "../../stencil-public-runtime";
import { FlowDirection } from "./interfaces";
/**
 * @slot - A slot for adding `calcite-panel`s to the flow.
 */
export declare class Flow {
  /**
   * Removes the currently active `calcite-panel`.
   */
  back(): Promise<HTMLCalcitePanelElement>;
  el: HTMLCalciteFlowElement;
  panelCount: number;
  flowDirection: FlowDirection;
  panels: HTMLCalcitePanelElement[];
  connectedCallback(): void;
  disconnectedCallback(): void;
  handleCalcitePanelBackClick(): void;
  getFlowDirection: (oldPanelCount: number, newPanelCount: number) => FlowDirection | null;
  updateFlowProps: () => void;
  panelItemMutationObserver: MutationObserver;
  render(): VNode;
}
