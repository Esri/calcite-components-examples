import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { CheckableFormCompoment } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
export declare class RadioButton implements LabelableComponent, CheckableFormCompoment, InteractiveComponent {
  el: HTMLCalciteRadioButtonElement;
  /** The checked state of the radio button. */
  checked: boolean;
  checkedChanged(newChecked: boolean): void;
  /** The disabled state of the radio button. */
  disabled: boolean;
  /**
   * The focused state of the radio button.
   * @internal
   */
  focused: boolean;
  /** The id attribute of the radio button.  When omitted, a globally unique identifier is used. */
  guid: string;
  /** The radio button's hidden status.  When a radio button is hidden it is not focusable or checkable. */
  hidden: boolean;
  /**
   * The hovered state of the radio button.
   * @internal
   */
  hovered: boolean;
  /**
   * The label of the radio input
   * @internal
   */
  label?: string;
  /** The name of the radio button. `name` is passed as a property automatically from `calcite-radio-button-group`. */
  name: string;
  nameChanged(): void;
  /** Requires that a value is selected for the radio button group before the parent form will submit. */
  required: boolean;
  /** The scale (size) of the radio button. `scale` is passed as a property automatically from `calcite-radio-button-group`. */
  scale: Scale;
  /** The value of the radio button. */
  value: any;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: RadioButton["value"];
  rootNode: HTMLElement;
  containerEl: HTMLDivElement;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  selectItem: (items: HTMLCalciteRadioButtonElement[], selectedIndex: number) => void;
  queryButtons: () => HTMLCalciteRadioButtonElement[];
  isDefaultSelectable: () => boolean;
  check: () => void;
  private clickHandler;
  onLabelClick(event: CustomEvent): void;
  private checkLastRadioButton;
  /** @internal */
  emitCheckedChange(): Promise<void>;
  private setContainerEl;
  private uncheckAllRadioButtonsInGroup;
  private uncheckOtherRadioButtonsInGroup;
  private getTabIndex;
  /**
   * Fires when the radio button is blurred.
   * @internal
   */
  calciteInternalRadioButtonBlur: EventEmitter;
  /**
   * Fires only when the radio button is checked.  This behavior is identical to the native HTML input element.
   * Since this event does not fire when the radio button is unchecked, it's not recommended to attach a listener for this event
   * directly on the element, but instead either attach it to a node that contains all of the radio buttons in the group
   * or use the calciteRadioButtonGroupChange event if using this with calcite-radio-button-group.
   */
  calciteRadioButtonChange: EventEmitter;
  /**
   * Fires when the checked property changes.  This is an internal event used for styling purposes only.
   * Use calciteRadioButtonChange or calciteRadioButtonGroupChange for responding to changes in the checked value for forms.
   * @internal
   */
  calciteInternalRadioButtonCheckedChange: EventEmitter;
  /**
   * Fires when the radio button is focused.
   * @internal
   */
  calciteInternalRadioButtonFocus: EventEmitter;
  mouseenter(): void;
  mouseleave(): void;
  handleKeyDown: (event: KeyboardEvent) => void;
  private onContainerBlur;
  private onContainerFocus;
  connectedCallback(): void;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  render(): VNode;
}
