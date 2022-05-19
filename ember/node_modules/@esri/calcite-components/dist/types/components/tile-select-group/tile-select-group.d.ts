import { VNode } from "../../stencil-public-runtime";
import { TileSelectGroupLayout } from "./interfaces";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-tile-select`s.
 */
export declare class TileSelectGroup implements InteractiveComponent {
  el: HTMLCalciteTileSelectGroupElement;
  /** The disabled state of the tile select. */
  disabled: boolean;
  /** Tiles by default move horizontally, stacking with each row, vertical allows single-column layouts */
  layout?: TileSelectGroupLayout;
  componentDidRender(): void;
  render(): VNode;
}
