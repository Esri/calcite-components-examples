import { VNode } from "../../stencil-public-runtime";
import { CalcitePosition, CalciteScale } from "../interfaces";
/**
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the panel.
 * @slot - A slot for adding content to the shell panel.
 */
export declare class CalciteShellCenterRow {
  /**
   * This property makes the content area appear like a "floating" panel.
   */
  detached: boolean;
  /**
   * Specifies the maxiumum height of the row.
   */
  heightScale: CalciteScale;
  /**
   * Arranges the component depending on the elements 'dir' property.
   */
  position: CalcitePosition;
  el: HTMLCalciteShellCenterRowElement;
  render(): VNode;
}
