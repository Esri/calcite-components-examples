import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ICON_TYPES } from "./resources";
import { ItemData } from "./shared-list-logic";
/**
 * @slot - A slot for adding `calcite-pick-list-item` elements or `calcite-pick-list-group` elements. Items are displayed as a vertical list.
 * @slot menu-actions - A slot for adding a button + menu combo for performing actions like sorting.
 */
export declare class CalcitePickList<ItemElement extends HTMLCalcitePickListItemElement = HTMLCalcitePickListItemElement> {
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  disabled: boolean;
  /**
   * When true, an input appears at the top of the list that can be used by end users to filter items in the list.
   */
  filterEnabled: boolean;
  /**
   * Placeholder text for the filter input field.
   */
  filterPlaceholder: string;
  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  loading: boolean;
  /**
   * Multiple works similar to standard radio buttons and checkboxes.
   * When true, a user can select multiple items at a time.
   * When false, only a single item can be selected at a time
   * and selecting a new item will deselect any other selected items.
   */
  multiple: boolean;
  selectedValues: Map<string, ItemElement>;
  dataForFilter: ItemData;
  items: ItemElement[];
  lastSelectedItem: ItemElement;
  observer: MutationObserver;
  el: HTMLCalcitePickListElement;
  emitCalciteListChange: () => void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * Emitted when any of the item selections have changed.
   * @event calciteListChange
   */
  calciteListChange: EventEmitter;
  calciteListItemRemoveHandler(event: CustomEvent<void>): void;
  calciteListItemChangeHandler(event: CustomEvent): void;
  calciteListItemPropsChangeHandler(event: CustomEvent): void;
  calciteListItemValueChangeHandler(event: CustomEvent): void;
  setUpItems(): void;
  setUpFilter(): void;
  deselectSiblingItems: any;
  selectSiblings: any;
  handleFilter: any;
  getItemData: any;
  keyDownHandler: any;
  getSelectedItems(): Promise<Map<string, HTMLCalcitePickListItemElement>>;
  setFocus(): Promise<void>;
  getIconType(): ICON_TYPES;
  render(): VNode;
}
