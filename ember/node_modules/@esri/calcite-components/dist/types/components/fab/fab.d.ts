import { VNode } from "../../stencil-public-runtime";
import { Appearance, Scale } from "../interfaces";
import { ButtonColor } from "../button/interfaces";
import { InteractiveComponent } from "../../utils/interactive";
export declare class Fab implements InteractiveComponent {
  /**
   * Used to set the button's appearance. Default is outline.
   */
  appearance: Extract<"solid" | "outline", Appearance>;
  /**
   * Used to set the button's color. Default is light.
   */
  color: ButtonColor;
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  disabled: boolean;
  /**
   * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
   * @default "plus"
   */
  icon?: string;
  /**
   * Label of the FAB, exposed on hover when textEnabled is false. If no label is provided, the label inherits what's provided for the `text` prop.
   */
  label?: string;
  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  loading: boolean;
  /**
   * Specifies the size of the fab.
   */
  scale: Scale;
  /**
   * Text that accompanies the FAB icon.
   */
  text?: string;
  /**
   * Indicates whether the text is displayed.
   */
  textEnabled: boolean;
  el: HTMLCalciteFabElement;
  private buttonEl;
  componentDidRender(): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  render(): VNode;
}
