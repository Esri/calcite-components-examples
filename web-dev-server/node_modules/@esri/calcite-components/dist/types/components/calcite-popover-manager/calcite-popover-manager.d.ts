import { VNode } from "../../stencil-public-runtime";
export declare class CalcitePopoverManager {
  el: HTMLCalcitePopoverManagerElement;
  /**
   * CSS Selector to match reference elements for popovers.
   */
  selector: string;
  /**
   * Automatically close popovers when clicking outside of them.
   */
  autoClose?: boolean;
  render(): VNode;
  getRelatedPopover: (el: HTMLElement) => HTMLCalcitePopoverElement;
  closeOpenPopovers(event: Event): void;
}
