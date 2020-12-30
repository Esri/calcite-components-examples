import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class CalciteSplitButton {
  el: HTMLCalciteSplitButtonElement;
  /** specify the appearance style of the button, defaults to solid. */
  appearance: "solid" | "outline" | "clear" | "transparent";
  /** specify the color of the control, defaults to blue */
  color: "blue" | "dark" | "light" | "red";
  /** is the control disabled  */
  disabled?: boolean;
  /** specify the icon used for the dropdown menu, defaults to chevron */
  dropdownIconType: "chevron" | "caret" | "ellipsis" | "overflow";
  /** aria label for overflow button */
  dropdownLabel?: string;
  /** optionally add a calcite-loader component to the control,
   disabling interaction. with the primary button */
  loading?: boolean;
  /** optionally pass an icon to display at the end of the primary button - accepts Calcite UI icon names  */
  primaryIconEnd?: string;
  /** flip the primary icon(s) in rtl */
  primaryIconFlipRtl?: "both" | "start" | "end";
  /** optionally pass an icon to display at the start of the primary button - accepts Calcite UI icon names  */
  primaryIconStart?: string;
  /** optionally pass an aria-label for the primary button */
  primaryLabel?: string;
  /** text for primary action button  */
  primaryText: string;
  /** specify the scale of the control, defaults to m */
  scale: "s" | "m" | "l";
  /** select theme (light or dark), defaults to light */
  theme: "light" | "dark";
  /** fired when the primary button is clicked */
  calciteSplitButtonPrimaryClick: EventEmitter;
  /** fired when the secondary button is clicked */
  calciteSplitButtonSecondaryClick: EventEmitter;
  render(): VNode;
  private calciteSplitButtonPrimaryClickHandler;
  private calciteSplitButtonSecondaryClickHandler;
  private get dropdownIcon();
}
