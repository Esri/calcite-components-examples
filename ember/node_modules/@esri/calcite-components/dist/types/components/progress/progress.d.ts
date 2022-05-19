import { VNode } from "../../stencil-public-runtime";
export declare class Progress {
  el: HTMLCalciteProgressElement;
  /** Use indeterminate if finding actual progress value is impossible */
  type: "indeterminate" | "determinate";
  /** Fraction completed, in the range of 0 - 1.0 */
  value: number;
  /** Label for the progress indicator */
  label: string;
  /** Text to display for the progress indicator */
  text: string;
  /** For indeterminate progress bars, reverse the animation direction */
  reversed: boolean;
  render(): VNode;
}
