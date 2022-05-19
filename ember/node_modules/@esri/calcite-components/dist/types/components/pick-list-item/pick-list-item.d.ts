import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ICON_TYPES } from "../pick-list/resources";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot actions-end - a slot for adding actions or content to the end side of the item.
 * @slot actions-start - a slot for adding actions or content to the start side of the item.
 */
export declare class PickListItem implements ConditionalSlotComponent, InteractiveComponent {
  /**
   * An optional description for this item.  This will appear below the label text.
   */
  description?: string;
  descriptionWatchHandler(): void;
  /**
   * When true, the item cannot be clicked and is visually muted.
   */
  disabled: boolean;
  /**
   * When false, the item cannot be deselected by user interaction.
   */
  disableDeselect: boolean;
  /**
   * @internal When true, the item cannot be selected by user interaction.
   */
  nonInteractive: boolean;
  /**
   * Determines the icon SVG symbol that will be shown. Options are circle, square, grip or null.
   * @see [ICON_TYPES](https://github.com/Esri/calcite-components/blob/master/src/components/pick-list/resources.ts#L5)
   */
  icon?: ICON_TYPES | null;
  /**
   * The main label for this item. This will appear next to the icon.
   */
  label: string;
  labelWatchHandler(): void;
  /**
   * Used to provide additional metadata to an item, primarily used when the parent list has a filter.
   */
  metadata?: Record<string, unknown>;
  metadataWatchHandler(): void;
  /**
   * Set this to true to display a remove action that removes the item from the list.
   */
  removable?: boolean;
  /**
   * Set this to true to pre-select an item. Toggles when an item is checked/unchecked.
   */
  selected: boolean;
  selectedWatchHandler(): void;
  /**
   * Used as an accessible label (aria-label) for the "remove item" action. Only applicable if removable is true.
   * @default "Remove"
   */
  intlRemove: string;
  /**
   * The item's associated value.
   */
  value: any;
  valueWatchHandler(newValue: any, oldValue: any): void;
  el: HTMLCalcitePickListItemElement;
  private focusEl;
  shiftPressed: boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /**
   * Emitted whenever the item is selected or unselected.
   */
  calciteListItemChange: EventEmitter<{
    item: HTMLCalcitePickListItemElement;
    value: any;
    selected: boolean;
    shiftPressed: boolean;
  }>;
  /**
   * Emitted whenever the remove button is pressed.
   */
  calciteListItemRemove: EventEmitter<void>;
  /**
   * Emitted whenever the the item's label, description, value or metadata properties are modified.
   * @internal
   */
  calciteListItemPropsChange: EventEmitter<void>;
  /**
   * Emitted whenever the the item's value property is modified.
   * @internal
   */
  calciteListItemValueChange: EventEmitter<{
    oldValue: any;
    newValue: any;
  }>;
  /**
   * Used to toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   */
  toggleSelected(coerce?: boolean): Promise<void>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  pickListClickHandler: (event: MouseEvent) => void;
  pickListKeyDownHandler: (event: KeyboardEvent) => void;
  removeClickHandler: () => void;
  renderIcon(): VNode;
  renderRemoveAction(): VNode;
  renderActionsStart(): VNode;
  renderActionsEnd(): VNode;
  render(): VNode;
}
