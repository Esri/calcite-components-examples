import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ChipColor } from "./interfaces";
import { Appearance, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding text.
 * @slot image - A slot for adding an image.
 */
export declare class Chip implements ConditionalSlotComponent {
  /** specify the appearance style of the button, defaults to solid. */
  appearance: Extract<"solid" | "clear", Appearance>;
  /** specify the color of the button, defaults to blue */
  color: ChipColor;
  /** Optionally show a button the user can click to dismiss the chip */
  dismissible: boolean;
  /** Aria label for the "x" button
   * @default "Close"
   */
  dismissLabel?: string;
  /** optionally pass an icon to display - accepts Calcite UI icon names  */
  icon?: string;
  /** flip the icon in rtl */
  iconFlipRtl: boolean;
  /** specify the scale of the chip, defaults to m */
  scale: Scale;
  /** The assigned value for the chip */
  value: any;
  el: HTMLCalciteChipElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  /** Emitted when the dismiss button is clicked */
  calciteChipDismiss: EventEmitter;
  closeClickHandler: (event: MouseEvent) => void;
  private closeButton;
  private guid;
  renderChipImage(): VNode;
  render(): VNode;
}
