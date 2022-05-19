import { VNode } from "../../stencil-public-runtime";
import { ColorStop, DataSeries } from "./interfaces";
export declare class Graph {
  el: HTMLCalciteGraphElement;
  /**
   * Array of tuples describing a single data point ([x, y])
   * These data points should be sorted by x-axis value
   */
  data: DataSeries;
  /**
   * Array of values describing a single color stop ([offset, color, opacity])
   * These color stops should be sorted by offset value
   */
  colorStops: ColorStop[];
  /** Start of highlight color if highlighting range */
  highlightMin: number;
  /** End of highlight color if highlighting range */
  highlightMax: number;
  /** Lowest point of the range */
  min: number;
  /** Highest point of the range */
  max: number;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
  private graphId;
  private resizeObserver;
}
