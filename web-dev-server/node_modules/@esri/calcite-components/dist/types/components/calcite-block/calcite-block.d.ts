import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { CalciteTheme } from "../interfaces";
/**
 * @slot icon - A slot for adding a trailing header icon.
 * @slot control - A slot for adding a single HTML input element in a header.
 * @slot - A slot for adding content to the block.
 */
export declare class CalciteBlock {
  /**
   * When true, this block will be collapsible.
   */
  collapsible: boolean;
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  disabled: boolean;
  /**
   * When true, displays a drag handle in the header.
   */
  dragHandle: boolean;
  /**
   * Block heading.
   */
  heading: string;
  /**
   * Tooltip used for the toggle when expanded.
   */
  intlCollapse?: string;
  /**
   * Tooltip used for the toggle when collapsed.
   */
  intlExpand?: string;
  /** string to override English loading text */
  intlLoading?: string;
  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  loading: boolean;
  /**
   * When true, the block's content will be displayed.
   */
  open: boolean;
  /**
   * Block summary.
   */
  summary: string;
  /**
   * Used to set the component's color scheme.
   */
  theme: CalciteTheme;
  el: HTMLCalciteBlockElement;
  /**
   * Emitted when the header has been clicked.
   */
  calciteBlockToggle: EventEmitter;
  onHeaderClick: () => void;
  renderScrim(): VNode;
  render(): VNode;
}
