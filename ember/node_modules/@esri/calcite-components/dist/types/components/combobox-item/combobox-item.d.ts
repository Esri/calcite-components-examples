import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ComboboxChildElement } from "../combobox/interfaces";
import { Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding nested `calcite-combobox-item`s.
 */
export declare class ComboboxItem implements ConditionalSlotComponent, InteractiveComponent {
  /** When true, the item cannot be clicked and is visually muted. */
  disabled: boolean;
  /** Set this to true to pre-select an item. Toggles when an item is checked/unchecked. */
  selected: boolean;
  /** True when item is highlighted either from keyboard or mouse hover */
  active: boolean;
  /** Parent and grandparent combobox items, this is set internally for use from combobox */
  ancestors: ComboboxChildElement[];
  /** Unique identifier, used for accessibility */
  guid: string;
  /** Custom icon to display both in combobox chips and next to combobox item text */
  icon?: string;
  selectedWatchHandler(): void;
  /** The main label for this item. */
  textLabel: string;
  /** The item's associated value */
  value: any;
  /** Don't filter this item based on the search text */
  constant: boolean;
  el: HTMLCalciteComboboxItemElement;
  isNested: boolean;
  scale: Scale;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /**
   * Emitted whenever the item is selected or unselected.
   */
  calciteComboboxItemChange: EventEmitter;
  /**
   * Used to toggle the selection state. By default this won't trigger an event.
   * The first argument allows the value to be coerced, rather than swapping values.
   */
  toggleSelected(coerce?: boolean): Promise<void>;
  itemClickHandler: (event: MouseEvent) => void;
  renderIcon(isSingle: boolean): VNode;
  renderChildren(): VNode;
  render(): VNode;
}
