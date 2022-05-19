import { VNode, EventEmitter } from "../../stencil-public-runtime";
import { Layout, Scale } from "../interfaces";
/**
 * @slot - A slot for adding `calcite-radio-button`s.
 */
export declare class RadioButtonGroup {
  el: HTMLCalciteRadioButtonGroupElement;
  /** The disabled state of the radio button group. */
  disabled: boolean;
  onDisabledChange(): void;
  /** The radio button group's hidden status.  When a radio button group is hidden none of its options are focusable or checkable. */
  hidden: boolean;
  onHiddenChange(): void;
  /** The layout direction of the radio buttons in a group. */
  layout: Layout;
  onLayoutChange(): void;
  /** The name of the radio button group. `name` must be unique to other radio button group instances. */
  name: string;
  /** Requires that a value is selected for the radio button group before the parent form will submit. */
  required: boolean;
  /** The scale (size) of the radio button group. */
  scale: Scale;
  onScaleChange(): void;
  mutationObserver: MutationObserver;
  connectedCallback(): void;
  disconnectedCallback(): void;
  private passPropsToRadioButtons;
  /**
   * Emitted when the radio button group has changed.
   */
  calciteRadioButtonGroupChange: EventEmitter;
  radioButtonChangeHandler(event: CustomEvent): void;
  render(): VNode;
}
