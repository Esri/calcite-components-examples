import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { CheckableFormCompoment } from "../../utils/form";
import { LabelableComponent } from "../../utils/label";
import { InteractiveComponent } from "../../utils/interactive";
export declare class Checkbox implements LabelableComponent, CheckableFormCompoment, InteractiveComponent {
  el: HTMLCalciteCheckboxElement;
  /** The checked state of the checkbox. */
  checked: boolean;
  /** True if the checkbox is disabled */
  disabled: boolean;
  /** The id attribute of the checkbox.  When omitted, a globally unique identifier is used. */
  guid: string;
  /**
   * The hovered state of the checkbox.
   * @internal
   */
  hovered: boolean;
  /**
   * True if the checkbox is initially indeterminate,
   * which is independent from its checked state
   * https://css-tricks.com/indeterminate-checkboxes/
   * */
  indeterminate: boolean;
  /**
   * The label of the checkbox input
   * @internal
   */
  label?: string;
  /** The name of the checkbox input */
  name: any;
  /**
   * When true, makes the component required for form-submission.
   *
   * @internal
   */
  required: boolean;
  /** specify the scale of the checkbox, defaults to m */
  scale: Scale;
  /** The value of the checkbox input */
  value: any;
  readonly checkedPath = "M5.5 12L2 8.689l.637-.636L5.5 10.727l8.022-7.87.637.637z";
  readonly indeterminatePath = "M13 8v1H3V8z";
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: Checkbox["checked"];
  toggleEl: HTMLDivElement;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  getPath: () => string;
  toggle: () => void;
  keyDownHandler: (event: KeyboardEvent) => void;
  clickHandler: () => void;
  /**
   * Emitted when the checkbox is blurred
   *
   * @internal
   */
  calciteInternalCheckboxBlur: EventEmitter;
  /** Emitted when the checkbox checked status changes */
  calciteCheckboxChange: EventEmitter;
  /**
   * Emitted when the checkbox is focused
   *
   * @internal
   */
  calciteInternalCheckboxFocus: EventEmitter;
  onToggleBlur: () => void;
  onToggleFocus: () => void;
  onLabelClick: () => void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  render(): VNode;
}
