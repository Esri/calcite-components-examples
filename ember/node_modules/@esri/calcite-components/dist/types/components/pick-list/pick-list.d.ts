import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ICON_TYPES } from "./resources";
import { ListFocusId, ItemData } from "./shared-list-logic";
import { HeadingLevel } from "../functional/Heading";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-pick-list-item` elements or `calcite-pick-list-group` elements. Items are displayed as a vertical list.
 * @slot menu-actions - A slot for adding a button + menu combo for performing actions like sorting.
 */
export declare class PickList<ItemElement extends HTMLCalcitePickListItemElement = HTMLCalcitePickListItemElement> implements InteractiveComponent {
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
   * Number at which section headings should start for this component.
   */
  headingLevel: HeadingLevel;
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
  /**
   * When true and single-selection is enabled, the selection will change when navigating items via the keyboard.
   */
  selectionFollowsFocus: boolean;
  selectedValues: Map<string, ItemElement>;
  dataForFilter: ItemData;
  items: ItemElement[];
  lastSelectedItem: ItemElement;
  mutationObserver: MutationObserver;
  el: HTMLCalcitePickListElement;
  emitCalciteListChange: () => void;
  filterEl: HTMLCalciteFilterElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /**
   * Emitted when any of the item selections have changed.
   */
  calciteListChange: EventEmitter<Map<string, HTMLCalcitePickListItemElement>>;
  calciteListItemRemoveHandler(event: CustomEvent<void>): void;
  calciteListItemChangeHandler(event: CustomEvent): void;
  calciteListItemPropsChangeHandler(event: CustomEvent): void;
  calciteListItemValueChangeHandler(event: CustomEvent): void;
  calciteListFocusOutHandler(event: FocusEvent): void;
  setUpItems(): void;
  setUpFilter(): void;
  setFilterEl: (el: HTMLCalciteFilterElement) => void;
  deselectRemovedItems: any;
  deselectSiblingItems: any;
  selectSiblings: any;
  handleFilter: any;
  getItemData: any;
  keyDownHandler: any;
  /** Returns the currently selected items */
  getSelectedItems(): Promise<Map<string, HTMLCalcitePickListItemElement>>;
  /** Sets focus on the component. */
  setFocus(focusId?: ListFocusId): Promise<void>;
  getIconType(): ICON_TYPES;
  render(): VNode;
}
