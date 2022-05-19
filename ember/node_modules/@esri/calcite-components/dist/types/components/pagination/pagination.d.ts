import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
export interface PaginationDetail {
  start: number;
  total: number;
  num: number;
}
export declare class Pagination {
  /** number of items per page */
  num: number;
  /** index of item that should begin the page */
  start: number;
  /** total number of items */
  total: number;
  /** Used as an accessible label (aria-label) for the next button
   * @default "Next"
   */
  textLabelNext: string;
  /** Used as an accessible label (aria-label) of the previous button
   * @default "Previous"
   */
  textLabelPrevious: string;
  /** The scale of the pagination */
  scale: Scale;
  el: HTMLCalcitePaginationElement;
  /**
   * Emitted whenever the selected page changes.
   * @deprecated use calcitePaginationChange instead
   */
  calcitePaginationUpdate: EventEmitter<PaginationDetail>;
  /**
   * Emitted whenever the selected page changes.
   * @see [PaginationDetail](https://github.com/Esri/calcite-components/blob/master/src/components/pagination/calcite-pagination.tsx#L18)
   */
  calcitePaginationChange: EventEmitter<PaginationDetail>;
  /** Go to the next page of results */
  nextPage(): Promise<void>;
  /** Go to the previous page of results */
  previousPage(): Promise<void>;
  private getLastStart;
  private previousClicked;
  private nextClicked;
  private showLeftEllipsis;
  private showRightEllipsis;
  private emitUpdate;
  renderPages(): VNode[];
  renderPage(start: number): VNode;
  renderLeftEllipsis(): VNode;
  renderRightEllipsis(): VNode;
  render(): VNode;
}
