import { VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
export declare class Icon {
  el: HTMLCalciteIconElement;
  /**
   * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
   */
  icon: string;
  /**
   * When true, the icon will be flipped when the element direction is 'rtl'.
   */
  flipRtl: boolean;
  /**
   * Icon scale.
   */
  scale: Scale;
  /**
   * The icon label.
   *
   * It is recommended to set this value if your icon is semantic.
   */
  textLabel: string;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): Promise<void>;
  render(): VNode;
  private intersectionObserver;
  private pathData;
  private visible;
  private loadIconPathData;
  private waitUntilVisible;
}
