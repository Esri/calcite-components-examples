import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Position } from "../interfaces";
export declare class RadioGroupItem {
  el: HTMLCalciteRadioGroupItemElement;
  /** Indicates whether the control is checked. */
  checked: boolean;
  protected handleCheckedChange(): void;
  /** optionally pass an icon to display - accepts Calcite UI icon names  */
  icon?: string;
  /** flip the icon in rtl */
  iconFlipRtl: boolean;
  /** optionally used with icon, select where to position the icon */
  iconPosition?: Position;
  /**
   * The control's value.
   */
  value: any | null;
  render(): VNode;
  /**
   * Fires when the item has been selected.
   * @internal
   */
  calciteRadioGroupItemChange: EventEmitter;
}
