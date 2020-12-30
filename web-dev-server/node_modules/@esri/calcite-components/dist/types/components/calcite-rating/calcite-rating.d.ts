import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class CalciteRating {
  el: HTMLCalciteRatingElement;
  /** specify the theme of scrim, defaults to light */
  theme: "light" | "dark";
  /** specify the scale of the component, defaults to m */
  scale: "s" | "m" | "l";
  /** the value of the rating component */
  value: number;
  /** is the rating component in a selectable mode */
  readOnly: boolean;
  /** is the rating component in a selectable mode */
  disabled: boolean;
  /** display rating value */
  displayValue: boolean;
  /** optionally pass a number of previous ratings to display */
  count?: number;
  /** optionally pass a cumulative average rating to display */
  average?: number;
  /** Localized string for "Rating" (used for aria label) */
  intlRating?: string;
  /** Localized string for labelling each star, `${num}` in the string will be replaced by the number */
  intlStars?: string;
  calciteRatingChange: EventEmitter;
  handleLabelFocus(e: CustomEvent): void;
  blurHandler(): void;
  renderStars(): VNode[];
  render(): any;
  private updateValue;
  setFocus(): Promise<void>;
  hoverValue: number;
  focusValue: number;
  hasFocus: boolean;
  private guid;
}
