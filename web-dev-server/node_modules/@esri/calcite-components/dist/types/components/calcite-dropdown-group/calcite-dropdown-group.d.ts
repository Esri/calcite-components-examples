import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { GroupRegistration, ItemRegistration } from "../../interfaces/Dropdown";
export declare class CalciteDropdownGroup {
  el: HTMLCalciteDropdownGroupElement;
  /** optionally set a group title for display */
  groupTitle?: string;
  /** specify the selection mode - multi (allow any number of (or no) active items), single (allow and require one active item),
   none (no active items), defaults to single */
  selectionMode: "multi" | "single" | "none";
  calciteDropdownGroupRegister: EventEmitter<GroupRegistration>;
  calciteDropdownItemChange: EventEmitter;
  setDropdownTitleRef: (node: HTMLSpanElement) => void;
  setDropdownSeparatorRef: (node: HTMLDivElement) => void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  render(): VNode;
  registerCalciteDropdownItem(event: CustomEvent<ItemRegistration>): void;
  updateActiveItemOnChange(event: CustomEvent): void;
  /** created list of dropdown items */
  private items;
  /** position of group within a dropdown */
  private groupPosition;
  /** the requested group */
  private requestedDropdownGroup;
  /** the requested item */
  private requestedDropdownItem;
  private separatorEl;
  private titleEl;
  private getGroupPosition;
  private sortItems;
}
