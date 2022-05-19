import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Layout, Scale, Width } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { RadioAppearance } from "./interfaces";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-radio-group-item`s.
 */
export declare class RadioGroup implements LabelableComponent, FormComponent, InteractiveComponent {
  el: HTMLCalciteRadioGroupElement;
  /** specify the appearance style of the radio group, defaults to solid. */
  appearance: RadioAppearance;
  /** is the radio group disabled  */
  disabled: boolean;
  /**
   * When true, makes the component required for form-submission.
   *
   * @internal
   */
  required: boolean;
  /** specify the layout of the radio group, defaults to horizontal */
  layout: Layout;
  /**
   * The group's name. Gets submitted with the form.
   */
  name: string;
  /** The scale of the radio group */
  scale: Scale;
  /** The value of the selectedItem */
  value: string;
  valueHandler(value: string): void;
  /**
   * The group's selected item.
   */
  selectedItem: HTMLCalciteRadioGroupItemElement;
  protected handleSelectedItemChange<T extends HTMLCalciteRadioGroupItemElement>(newItem: T, oldItem: T): void;
  /** specify the width of the group, defaults to auto */
  width: Extract<"auto" | "full", Width>;
  componentWillLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  render(): VNode;
  protected handleClick: (event: MouseEvent) => void;
  protected handleSelected(event: Event): void;
  protected handleKeyDown(event: KeyboardEvent): void;
  /** Fired when the selected option changes, event detail is the new value */
  calciteRadioGroupChange: EventEmitter<string>;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: RadioGroup["value"];
  onLabelClick(): void;
  private getItems;
  private selectItem;
}
