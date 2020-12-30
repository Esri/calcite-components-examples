import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { CalcitePosition, CalciteScale } from "../interfaces";
/**
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the panel.
 * @slot - A slot for adding content to the shell panel.
 */
export declare class CalciteShellPanel {
  /**
   * Hide the content panel.
   */
  collapsed: boolean;
  watchHandler(): void;
  /**
   * This property makes the content area appear like a "floating" panel.
   */
  detached: boolean;
  /**
   * Specifies the maxiumum height of the contents when detached.
   */
  detachedHeightScale: CalciteScale;
  /**
   * This sets width of the content area.
   */
  widthScale: CalciteScale;
  /**
   * Arranges the component depending on the elements 'dir' property.
   */
  position: CalcitePosition;
  /**
   * Emitted when collapse has been toggled.
   */
  calciteShellPanelToggle: EventEmitter;
  render(): VNode;
}
