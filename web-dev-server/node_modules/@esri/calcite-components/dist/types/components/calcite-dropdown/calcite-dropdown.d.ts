import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { GroupRegistration, ItemKeyboardEvent } from "../../interfaces/Dropdown";
import { CalcitePlacement } from "../../utils/popper";
import { StrictModifiers } from "@popperjs/core";
export declare class CalciteDropdown {
  el: HTMLCalciteDropdownElement;
  active: boolean;
  activeHandler(): void;
  /** specify the alignment of dropdown, defaults to start */
  alignment: "start" | "center" | "end";
  /**
   allow the dropdown to remain open after a selection is made
   if the selection-mode of the selected item's containing group is "none", the dropdown will always close
   */
  disableCloseOnSelect: boolean;
  /** is the dropdown disabled  */
  disabled?: boolean;
  alignmentHandler(): void;
  /**
   specify the maximum number of calcite-dropdown-items to display before showing the scroller, must be greater than 0 -
   this value does not include groupTitles passed to calcite-dropdown-group
  */
  maxItems: number;
  /** specify the scale of dropdown, defaults to m */
  scale: "s" | "m" | "l";
  /**
   * **read-only** The currently selected items
   *
   * @readonly
   */
  selectedItems: HTMLCalciteDropdownItemElement[];
  /** specify the theme of the dropdown, defaults to light */
  theme: "light" | "dark";
  /** specify whether the dropdown is opened by hover or click of a trigger element */
  type: "hover" | "click";
  /** specify the width of dropdown, defaults to m */
  width: "s" | "m" | "l";
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): VNode;
  reposition(): Promise<void>;
  /** fires when a dropdown item has been selected or deselected **/
  calciteDropdownSelect: EventEmitter<void>;
  /** fires when a dropdown has been opened **/
  calciteDropdownOpen: EventEmitter<void>;
  /** fires when a dropdown has been closed **/
  calciteDropdownClose: EventEmitter<void>;
  closeCalciteDropdownOnClick(e: Event): void;
  closeCalciteDropdownOnEvent(): void;
  closeCalciteDropdownOnOpenEvent(e: Event): void;
  mouseEnterHandler(): void;
  mouseLeaveHandler(): void;
  calciteDropdownItemKeyEvent(e: CustomEvent<ItemKeyboardEvent>): void;
  handleItemSelect(event: CustomEvent): void;
  registerCalciteDropdownGroup(e: CustomEvent<GroupRegistration>): void;
  /** created list of dropdown items */
  private items;
  /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
  private maxScrollerHeight;
  /** keep track of whether the groups have been sorted so we don't re-sort */
  private sorted;
  /** trigger elements */
  private triggers;
  private popper;
  private menuEl;
  private referenceEl;
  setReferenceEl: (el: HTMLDivElement) => void;
  setMenuEl: (el: HTMLDivElement) => void;
  getModifiers(): Partial<StrictModifiers>[];
  getPlacement(): CalcitePlacement;
  createPopper(): void;
  destroyPopper(): void;
  private openDropdown;
  private keyDownHandler;
  private updateSelectedItems;
  private getMaxScrollerHeight;
  private closeCalciteDropdown;
  private focusOnFirstActiveOrFirstItem;
  private focusFirstItem;
  private focusLastItem;
  private focusNextItem;
  private focusPrevItem;
  private itemIndex;
  private getFocusableElement;
  private openCalciteDropdown;
}
