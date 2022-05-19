import { VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
export declare class ColorPickerSwatch {
  /**
   * Used to display whether the swatch is active or not.
   */
  active: boolean;
  /**
   * The color value.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
   */
  color: string;
  handleColorChange(color: string): void;
  /**
   * The component scale.
   */
  scale: Scale;
  el: HTMLCalciteColorPickerSwatchElement;
  private internalColor;
  componentWillLoad(): void;
  render(): VNode;
}
