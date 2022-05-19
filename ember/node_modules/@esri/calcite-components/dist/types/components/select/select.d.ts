import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale, Width } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-option`s.
 */
export declare class Select implements LabelableComponent, FormComponent, InteractiveComponent {
  /**
   * When true, it prevents the option from being selected.
   */
  disabled: boolean;
  /**
   * The component's label. This is required for accessibility purposes.
   *
   */
  label: string;
  /**
   * The select's name. Gets submitted with the form.
   */
  name: string;
  /**
   * When true, makes the component required for form-submission.
   *
   * @internal
   */
  required: boolean;
  /**
   * The component scale.
   */
  scale: Scale;
  /** The value of the selectedOption */
  value: string;
  valueHandler(value: string): void;
  /**
   * The currently selected option.
   *
   * @readonly
   */
  selectedOption: HTMLCalciteOptionElement;
  selectedOptionHandler(selectedOption: HTMLCalciteOptionElement): void;
  /**
   * The component width.
   */
  width: Width;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: Select["value"];
  el: HTMLCalciteSelectElement;
  private componentToNativeEl;
  private mutationObserver;
  private selectEl;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  /**
   * This event will fire whenever the selected option changes.
   */
  calciteSelectChange: EventEmitter<void>;
  private handleInternalSelectChange;
  protected handleOptionOrGroupChange(event: CustomEvent): void;
  onLabelClick(): void;
  private updateNativeElement;
  private populateInternalSelect;
  private clearInternalSelect;
  private storeSelectRef;
  private selectFromNativeOption;
  private toNativeElement;
  private deselectAllExcept;
  private emitChangeEvent;
  renderChevron(): VNode;
  render(): VNode;
}
