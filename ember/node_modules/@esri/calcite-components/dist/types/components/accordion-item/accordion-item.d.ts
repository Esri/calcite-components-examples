import { EventEmitter, VNode } from "../../stencil-public-runtime";
/**
 * @slot - A slot for adding custom content, including nested `calcite-accordion-item`s.
 */
export declare class AccordionItem {
  el: HTMLCalciteAccordionItemElement;
  /** Indicates whether the item is active. */
  active: boolean;
  /** pass a title for the accordion item */
  itemTitle?: string;
  /** pass a title for the accordion item */
  itemSubtitle?: string;
  /** optionally pass an icon to display - accepts Calcite UI icon names  */
  icon?: string;
  /**
   * @internal
   */
  calciteAccordionItemKeyEvent: EventEmitter;
  /**
   * @internal
   */
  calciteAccordionItemSelect: EventEmitter;
  /**
   * @internal
   */
  calciteAccordionItemClose: EventEmitter;
  /**
   * @internal
   */
  calciteAccordionItemRegister: EventEmitter;
  connectedCallback(): void;
  componentDidLoad(): void;
  render(): VNode;
  keyDownHandler(e: KeyboardEvent): void;
  updateActiveItemOnChange(event: CustomEvent): void;
  private guid;
  /** the containing accordion element */
  private parent;
  /** position within parent */
  private itemPosition;
  /** the latest requested item */
  private requestedAccordionItem;
  /** what selection mode is the parent accordion in */
  private selectionMode;
  /** what icon position does the parent accordion specify */
  private iconPosition;
  /** what icon type does the parent accordion specify */
  private iconType;
  /** handle clicks on item header */
  private itemHeaderClickHandler;
  private determineActiveItem;
  private emitRequestedItem;
  private getItemPosition;
}
