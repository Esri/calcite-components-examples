import { VNode } from "../../stencil-public-runtime";
import { Position, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding content to the shell panel.
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the panel.
 */
export declare class ShellCenterRow implements ConditionalSlotComponent {
  /**
   * This property makes the content area appear like a "floating" panel.
   */
  detached: boolean;
  /**
   * Specifies the maximum height of the row.
   */
  heightScale: Scale;
  /**
   * Arranges the component depending on the elements 'dir' property.
   */
  position: Position;
  el: HTMLCalciteShellCenterRowElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
}
