import { VNode } from "../../stencil-public-runtime";
import { CalciteAppearance, CalciteColor, CalciteScale, CalciteTheme } from "../interfaces";
export declare class CalciteFab {
  /**
   * Used to set the button's appearance. Default is outline.
   */
  appearance: CalciteAppearance;
  /**
   * Used to set the button's color. Default is light.
   */
  color: CalciteColor;
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  disabled: boolean;
  /**
   * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
   */
  icon?: string;
  /**
   * Label of the FAB, exposed on hover. If no label is provided, the label inherits what's provided for the `text` prop.
   */
  label?: string;
  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  loading: boolean;
  /**
   * Specifies the size of the fab.
   */
  scale: CalciteScale;
  /**
   * Text that accompanies the FAB icon.
   */
  text?: string;
  /**
   * Indicates whether the text is displayed.
   */
  textEnabled: boolean;
  /**
   * Used to set the component's color scheme.
   */
  theme: CalciteTheme;
  el: HTMLCalciteFabElement;
  private buttonEl;
  setFocus(): Promise<void>;
  render(): VNode;
}
