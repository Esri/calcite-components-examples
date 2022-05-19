import { VNode } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding `calcite-pick-list-item` elements.
 */
export declare class PickListGroup implements ConditionalSlotComponent {
  /**
   * The title used for all nested `calcite-pick-list` rows.
   *
   */
  groupTitle: string;
  /**
   * Number at which section headings should start for this component.
   */
  headingLevel: HeadingLevel;
  el: HTMLCalcitePickListGroupElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
}
