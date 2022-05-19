import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ItemKeyboardEvent } from "../dropdown/interfaces";
import { FlipContext } from "../interfaces";
/**
 * @slot - A slot for adding text.
 */
export declare class DropdownItem {
  el: HTMLCalciteDropdownItemElement;
  /** Indicates whether the item is active. */
  active: boolean;
  /** flip the icon(s) in rtl */
  iconFlipRtl?: FlipContext;
  /** optionally pass an icon to display at the start of an item - accepts calcite ui icon names  */
  iconStart?: string;
  /** optionally pass an icon to display at the end of an item - accepts calcite ui icon names  */
  iconEnd?: string;
  /** optionally pass a href - used to determine if the component should render as anchor */
  href?: string;
  /** Applies to the aria-label attribute on the button or hyperlink */
  label?: string;
  /** The rel attribute to apply to the hyperlink */
  rel?: string;
  /** The target attribute to apply to the hyperlink */
  target?: string;
  /**
   * @internal
   */
  calciteDropdownItemSelect: EventEmitter;
  /** @internal */
  calciteDropdownItemKeyEvent: EventEmitter<ItemKeyboardEvent>;
  /** @internal */
  calciteDropdownCloseRequest: EventEmitter;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  componentWillLoad(): void;
  connectedCallback(): void;
  render(): VNode;
  onClick(): void;
  keyDownHandler(e: KeyboardEvent): void;
  updateActiveItemOnChange(event: CustomEvent): void;
  /** id of containing group */
  private parentDropdownGroupEl;
  /** requested group */
  private requestedDropdownGroup;
  /** requested item */
  private requestedDropdownItem;
  /** what selection mode is the parent dropdown group in */
  private selectionMode;
  /** if href is requested, track the rendered child link*/
  private childLink;
  private initialize;
  private determineActiveItem;
  private emitRequestedItem;
}
