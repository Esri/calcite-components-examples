import { VNode } from "../../stencil-public-runtime";
/**
 * @slot - A slot for adding custom content, primarily loading information.
 */
export declare class Scrim {
  /** string to override English loading text
   * @default "Loading"
   */
  intlLoading?: string;
  /**
   * Determines if the component will have the loader overlay.
   * Otherwise, will render opaque disabled state.
   */
  loading: boolean;
  el: HTMLCalciteScrimElement;
  render(): VNode;
}
