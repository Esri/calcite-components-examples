import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class CalciteRadioGroupItem {
  el: HTMLCalciteRadioGroupItemElement;
  /** Indicates whether the control is checked. */
  checked: boolean;
  protected handleCheckedChange(): void;
  /** optionally pass an icon to display - accepts Calcite UI icon names  */
  icon?: string;
  /** flip the icon in rtl */
  iconFlipRtl?: boolean;
  /** optionally used with icon, select where to position the icon */
  iconPosition?: "start" | "end";
  /**
   * The control's value.
   */
  value: any | null;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  render(): VNode;
  calciteRadioGroupItemChange: EventEmitter;
  private useFallback;
  private inputProxy;
  private mutationObserver;
  private getMutationObserver;
  private syncFromExternalInput;
  private syncToExternalInput;
}
