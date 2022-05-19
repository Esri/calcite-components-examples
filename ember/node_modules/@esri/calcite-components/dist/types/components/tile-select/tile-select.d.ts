import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Alignment, Width } from "../interfaces";
import { TileSelectType } from "./interfaces";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding custom content.
 */
export declare class TileSelect implements InteractiveComponent {
  el: HTMLCalciteTileSelectElement;
  /** The checked state of the tile select. */
  checked: boolean;
  checkedChanged(newChecked: boolean): void;
  /** The description text that appears beneath the heading of the tile. */
  description?: string;
  /** The disabled state of the tile select. */
  disabled: boolean;
  /** The heading text that appears between the icon and description of the tile. */
  heading?: string;
  /** The hidden state of the tile select. */
  hidden: boolean;
  /** The icon that appears at the top of the tile. */
  icon?: string;
  /** The name of the tile select.  This name will appear in form submissions as either a radio or checkbox identifier based on the `type` property. */
  name: any;
  nameChanged(newName: string): void;
  /** Display an interactive radio or checkbox. */
  inputEnabled: boolean;
  /** The side of the tile that the radio or checkbox appears on when inputEnabled is true. */
  inputAlignment: Extract<"end" | "start", Alignment>;
  /** The selection mode of the tile select: radio (single) or checkbox (multiple). */
  type: TileSelectType;
  /** The value of the tile select.  This value will appear in form submissions when this tile select is checked. */
  value?: any;
  /** specify the width of the tile, defaults to auto */
  width: Extract<"auto" | "full", Width>;
  private input;
  guid: string;
  /** The focused state of the tile-select. */
  focused: boolean;
  /**
   * Emits a custom change event.  For checkboxes, it emits when the checkbox is checked or unchecked.  For radios it only emits when it is checked.
   */
  calciteTileSelectChange: EventEmitter;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  checkboxChangeHandler(event: CustomEvent): void;
  checkboxFocusBlurHandler(event: CustomEvent): void;
  radioButtonChangeHandler(event: CustomEvent): void;
  radioButtonCheckedChangeHandler(event: CustomEvent): void;
  radioButtonFocusBlurHandler(event: CustomEvent): void;
  click(event: MouseEvent): void;
  mouseenter(): void;
  mouseleave(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  private renderInput;
  render(): VNode;
}
