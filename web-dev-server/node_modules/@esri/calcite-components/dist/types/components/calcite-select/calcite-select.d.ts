import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale, Theme } from "../../interfaces/common";
import { FocusRequest } from "../../interfaces/Label";
export declare class CalciteSelect {
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
   * The component scale.
   */
  scale: Scale;
  /**
   * The currently selected option.
   *
   * @readonly
   */
  selectedOption: HTMLCalciteOptionElement;
  /**
   * The component theme.
   */
  theme: Theme;
  /**
   * The component width.
   */
  width: "auto" | "half" | "full";
  private el;
  private componentToNativeEl;
  private mutationObserver;
  private selectEl;
  connectedCallback(): void;
  disconnectedCallback(): void;
  setFocus(): Promise<void>;
  /**
   * This event will fire whenever the selected option changes.
   */
  calciteSelectChange: EventEmitter<void>;
  private handleInternalSelectChange;
  protected handleOptionOrGroupChange(event: CustomEvent): void;
  handleLabelFocus(event: CustomEvent<FocusRequest>): void;
  private updateNativeElements;
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
