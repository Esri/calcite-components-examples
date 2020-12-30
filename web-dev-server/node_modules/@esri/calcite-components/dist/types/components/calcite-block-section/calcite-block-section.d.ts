import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { CalciteBlockSectionToggleDisplay } from "../interfaces";
/**
 * @slot - A slot for adding content to the block section.
 */
export declare class CalciteBlockSection {
  /**
   * Tooltip used for the toggle when expanded.
   */
  intlCollapse?: string;
  /**
   * Tooltip used for the toggle when collapsed.
   */
  intlExpand?: string;
  /**
   * When true, the block's section content will be displayed.
   */
  open: boolean;
  /**
   * Text displayed in the button.
   */
  text: string;
  /**
   * This property determines the look of the section toggle.
   * If the value is "switch", a toggle-switch will be displayed.
   * If the value is "button", a clickable header is displayed.
   *
   * @todo revisit doc
   */
  toggleDisplay: CalciteBlockSectionToggleDisplay;
  el: HTMLCalciteBlockSectionElement;
  guid: string;
  /**
   * Emitted when the header has been clicked.
   */
  calciteBlockSectionToggle: EventEmitter;
  handleHeaderLabelKeyDown(this: HTMLLabelElement, event: KeyboardEvent): void;
  toggleSection: () => void;
  render(): VNode;
}
