import { EventEmitter } from "../../stencil-public-runtime";
import { CalciteTheme } from "../interfaces";
import { VNode } from "../../stencil-public-runtime";
/**
 * @slot thumbnail - A slot for adding an HTML image element to the tip.
 */
export declare class CalciteTip {
  /**
   * No longer displays the tip.
   */
  dismissed: boolean;
  /**
   * Indicates whether the tip can be dismissed.
   */
  nonDismissible: boolean;
  /**
   * The heading of the tip.
   */
  heading?: string;
  /**
   * The selected state of the tip if it is being used inside a `calcite-tip-manager`.
   */
  selected?: boolean;
  /**
   * Alternate text for closing the tip.
   */
  intlClose?: string;
  /**
   * Used to set the component's color scheme.
   */
  theme: CalciteTheme;
  el: HTMLCalciteTipElement;
  /**
   * Emitted when the component has been dismissed.
   */
  calciteTipDismiss: EventEmitter;
  hideTip: () => void;
  renderHeader(): VNode;
  renderDismissButton(): VNode;
  renderImageFrame(): VNode;
  renderInfoNode(): VNode;
  renderContent(): VNode;
  render(): VNode;
}
