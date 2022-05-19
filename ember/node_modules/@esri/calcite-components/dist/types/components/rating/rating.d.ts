import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { FormComponent } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
export declare class Rating implements LabelableComponent, FormComponent, InteractiveComponent {
  el: HTMLCalciteRatingElement;
  /** specify the scale of the component, defaults to m */
  scale: Scale;
  /** the value of the rating component */
  value: number;
  /** is the rating component in a selectable mode */
  readOnly: boolean;
  /** is the rating component in a selectable mode */
  disabled: boolean;
  /** Show average and count data summary chip (if available) */
  showChip: boolean;
  /** optionally pass a number of previous ratings to display */
  count?: number;
  /** optionally pass a cumulative average rating to display */
  average?: number;
  /** The name of the rating */
  name: string;
  /** Localized string for "Rating" (used for aria label)
   * @default "Rating"
   */
  intlRating?: string;
  /** Localized string for labelling each star, `${num}` in the string will be replaced by the number
   * @default "Stars: ${num}"
   */
  intlStars?: string;
  /**
   * When true, makes the component required for form-submission.
   *
   * @internal
   */
  required: boolean;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /**
   * Fires when the rating value has changed.
   */
  calciteRatingChange: EventEmitter<{
    value: number;
  }>;
  blurHandler(): void;
  renderStars(): VNode[];
  render(): any;
  onLabelClick(): void;
  private updateValue;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  labelEl: HTMLCalciteLabelElement;
  formEl: HTMLFormElement;
  defaultValue: Rating["value"];
  hoverValue: number;
  focusValue: number;
  hasFocus: boolean;
  private guid;
  private inputFocusRef;
}
