import { VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
export declare class ColorPickerSwatch {
  /**
   * When `true`, the component is active.
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
   * Specifies the size of the component.
   */
  scale: Scale;
  el: HTMLCalciteColorPickerSwatchElement;
  private internalColor;
  componentWillLoad(): void;
  render(): VNode;
}
