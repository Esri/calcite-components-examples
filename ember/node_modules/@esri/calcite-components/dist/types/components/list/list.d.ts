import { VNode } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * A general purpose list that enables users to construct list items that conform to Calcite styling.
 * @slot - A slot for adding `calcite-list-item` elements.
 */
export declare class List implements InteractiveComponent {
  /**
   * When true, disabled prevents user interaction.
   */
  disabled: boolean;
  /**
   * Number at which section headings should start for this component.
   */
  headingLevel: HeadingLevel;
  componentDidRender(): void;
  el: HTMLCalciteListElement;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  render(): VNode;
}
