import { VNode } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
/**
 * @slot - A slot for adding `calcite-list-item` and `calcite-list-item-group` elements.
 */
export declare class ListItemGroup {
  /**
   * The title used for all nested `calcite-list-item` rows.
   *
   */
  heading: string;
  /**
   * Number at which section headings should start for this component.
   */
  headingLevel: HeadingLevel;
  el: HTMLCalciteListItemGroupElement;
  render(): VNode;
}
