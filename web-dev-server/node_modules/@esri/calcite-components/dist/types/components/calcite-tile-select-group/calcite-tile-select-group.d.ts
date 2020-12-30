import { VNode } from "../../stencil-public-runtime";
export declare class CalciteTileSelectGroup {
  /** Tiles by default move horizontally, stacking with each row, vertical allows single-column layouts */
  layout?: "vertical" | "horizontal";
  render(): VNode;
}
