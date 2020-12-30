import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class CalciteRadioGroup {
  el: HTMLCalciteRadioGroupElement;
  /** specify the appearance style of the radio group, defaults to solid. */
  appearance: "solid" | "outline";
  /** is the radio group disabled  */
  disabled?: boolean;
  /** specify the layout of the radio group, defaults to horizontal */
  layout: "horizontal" | "vertical";
  /**
   * The group's name. Gets submitted with the form.
   */
  name: string;
  protected handleNameChange(value: string): void;
  /** The scale of the radio group */
  scale: "s" | "m" | "l";
  /**
   * The group's selected item.
   */
  selectedItem: HTMLCalciteRadioGroupItemElement;
  protected handleSelectedItemChange<T extends HTMLCalciteRadioGroupItemElement>(newItem: T, oldItem: T): void;
  /** The component's theme. */
  theme: "light" | "dark";
  /** specify the width of the group, defaults to auto */
  width: "auto" | "full";
  connectedCallback(): void;
  componentDidLoad(): void;
  render(): VNode;
  handleLabelFocus(e: Record<string, any>): void;
  protected handleClick(event: MouseEvent): void;
  protected handleSelected(event: Event): void;
  protected handleKeyDown(event: KeyboardEvent): void;
  calciteRadioGroupChange: EventEmitter;
  /** Focuses the selected item. If there is no selection, it focuses the first item. */
  setFocus(): Promise<void>;
  private hiddenInput;
  private hasLoaded;
  private getItems;
  private selectItem;
  private syncWithInputProxy;
}
