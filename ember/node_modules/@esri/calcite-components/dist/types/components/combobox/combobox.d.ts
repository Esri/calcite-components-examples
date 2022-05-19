/// <reference types="lodash" />
import { Event, EventEmitter, VNode } from "../../stencil-public-runtime";
import { OverlayPositioning, ComputedPlacement } from "../../utils/popper";
import { StrictModifiers } from "@popperjs/core";
import { Scale } from "../interfaces";
import { ComboboxSelectionMode, ComboboxChildElement } from "./interfaces";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
interface ItemData {
  label: string;
  value: string;
}
/**
 * @slot - A slot for adding `calcite-combobox-item`s.
 */
export declare class Combobox implements LabelableComponent, FormComponent, InteractiveComponent {
  el: HTMLCalciteComboboxElement;
  /** Opens or closes the combobox */
  active: boolean;
  activeHandler(): void;
  /** Disable combobox input */
  disabled: boolean;
  handleDisabledChange(value: boolean): void;
  /** Aria label for combobox (required) */
  label: string;
  /** Placeholder text for input */
  placeholder?: string;
  /** Specify the maximum number of combobox items (including nested children) to display before showing the scroller */
  maxItems: number;
  maxItemsHandler(): void;
  /** The name of the switch input */
  name: string;
  /** Allow entry of custom values which are not in the original set of items */
  allowCustomValues: boolean;
  /** Describes the type of positioning to use for the overlaid content. If your element is in a fixed container, use the 'fixed' value. */
  overlayPositioning: OverlayPositioning;
  /**
   * When true, makes the component required for form-submission.
   *
   * @internal
   */
  required: boolean;
  /** specify the selection mode
   * - multi: allow any number of selected items (default)
   * - single: only one selection)
   * - ancestors: like multi, but show ancestors of selected items as selected, only deepest children shown in chips
   */
  selectionMode: ComboboxSelectionMode;
  /** Specify the scale of the combobox, defaults to m */
  scale: Scale;
  /** The value(s) of the selectedItem(s) */
  value: string | string[];
  valueHandler(value: string | string[]): void;
  /** string to override the English "Remove tag" text for when an item is selected.
   * @default "Remove tag"
   */
  intlRemoveTag: string;
  /**
   * Defines the available placements that can be used when a flip occurs.
   */
  flipPlacements?: ComputedPlacement[];
  flipPlacementsHandler(): void;
  documentClickHandler(event: Event): void;
  calciteComboboxItemChangeHandler(event: CustomEvent<HTMLCalciteComboboxItemElement>): void;
  /** Updates the position of the component. */
  reposition(): Promise<void>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  /**
   * Called when the selected items set changes
   * @deprecated use calciteComboboxChange instead
   */
  calciteLookupChange: EventEmitter<HTMLCalciteComboboxItemElement[]>;
  /**
   * Called when the selected item(s) changes.
   */
  calciteComboboxChange: EventEmitter<{
    selectedItems: HTMLCalciteComboboxItemElement[];
  }>;
  /** Called when the user has entered text to filter the options list */
  calciteComboboxFilterChange: EventEmitter<{
    visibleItems: HTMLCalciteComboboxItemElement[];
    text: string;
  }>;
  /** Called when a selected item in the combobox is dismissed via its chip **/
  calciteComboboxChipDismiss: EventEmitter;
  /**
   * Fired when the combobox is opened
   * @internal
   */
  calciteComboboxOpen: EventEmitter;
  /**
   *  Fired when the combobox is closed
   * @internal
   */
  calciteComboboxClose: EventEmitter;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  disconnectedCallback(): void;
  filteredFlipPlacements: ComputedPlacement[];
  internalValueChangeFlag: boolean;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: Combobox["value"];
  items: HTMLCalciteComboboxItemElement[];
  groupItems: HTMLCalciteComboboxItemGroupElement[];
  selectedItems: HTMLCalciteComboboxItemElement[];
  selectedItemsHandler(): void;
  visibleItems: HTMLCalciteComboboxItemElement[];
  needsIcon: boolean;
  activeItemIndex: number;
  activeChipIndex: number;
  activeDescendant: string;
  text: string;
  /** when search text is cleared, reset active to  */
  textHandler(): void;
  textInput: HTMLInputElement;
  data: ItemData[];
  mutationObserver: MutationObserver;
  resizeObserver: ResizeObserver;
  private guid;
  private inputHeight;
  private popper;
  private menuEl;
  private referenceEl;
  private listContainerEl;
  private ignoreSelectedEventsFlag;
  private activeTransitionProp;
  setFilteredPlacements: () => void;
  getValue: () => string | string[];
  onLabelClick: () => void;
  private comboboxInViewport;
  keydownHandler: (event: KeyboardEvent) => void;
  private toggleCloseEnd;
  private toggleOpenEnd;
  transitionEnd: (event: TransitionEvent) => void;
  setMaxScrollerHeight: () => void;
  calciteChipDismissHandler: (event: CustomEvent<HTMLCalciteChipElement>, comboboxItem: HTMLCalciteComboboxItemElement) => void;
  clickHandler: (event: MouseEvent) => void;
  setInactiveIfNotContained: (event: Event) => void;
  setMenuEl: (el: HTMLDivElement) => void;
  setListContainerEl: (el: HTMLDivElement) => void;
  setReferenceEl: (el: HTMLDivElement) => void;
  getModifiers(): Partial<StrictModifiers>[];
  createPopper(): void;
  destroyPopper(): void;
  private getMaxScrollerHeight;
  private calculateSingleItemHeight;
  inputHandler: (event: Event) => void;
  getCombinedItems(): ComboboxChildElement[];
  filterItems: import("lodash").DebouncedFunc<(text: string) => void>;
  internalCalciteLookupChangeEvent: () => void;
  emitCalciteLookupChange: import("lodash").DebouncedFunc<() => void>;
  internalComboboxChangeEvent: () => void;
  emitComboboxChange: import("lodash").DebouncedFunc<() => void>;
  toggleSelection(item: HTMLCalciteComboboxItemElement, value?: boolean): void;
  updateAncestors(item: HTMLCalciteComboboxItemElement): void;
  getVisibleItems(): HTMLCalciteComboboxItemElement[];
  getSelectedItems(): HTMLCalciteComboboxItemElement[];
  updateItems: () => void;
  getData(): ItemData[];
  getNeedsIcon(): boolean;
  resetText(): void;
  getItems(): HTMLCalciteComboboxItemElement[];
  getGroupItems(): HTMLCalciteComboboxItemGroupElement[];
  addCustomChip(value: string, focus?: boolean): void;
  removeActiveChip(): void;
  removeLastChip(): void;
  previousChip(): void;
  nextChip(): void;
  focusChip(): void;
  private scrollToActiveItem;
  shiftActiveItemIndex(delta: number): void;
  updateActiveItemIndex(index: number): void;
  isMulti(): boolean;
  comboboxFocusHandler: () => void;
  comboboxBlurHandler: (event: FocusEvent) => void;
  renderChips(): VNode[];
  renderInput(): VNode;
  renderListBoxOptions(): VNode[];
  renderPopperContainer(): VNode;
  renderIconStart(): VNode;
  renderIconEnd(): VNode;
  render(): VNode;
}
export {};
