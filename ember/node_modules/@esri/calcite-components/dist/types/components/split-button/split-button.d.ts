import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { ButtonAppearance, ButtonColor, DropdownIconType } from "../button/interfaces";
import { FlipContext, Scale, Width } from "../interfaces";
import { OverlayPositioning } from "../../utils/popper";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-dropdown` content.
 */
export declare class SplitButton implements InteractiveComponent {
  el: HTMLCalciteSplitButtonElement;
  /** specify the appearance style of the button, defaults to solid. */
  appearance: ButtonAppearance;
  /** specify the color of the control, defaults to blue */
  color: ButtonColor;
  /** is the control disabled  */
  disabled: boolean;
  handleDisabledChange(value: boolean): void;
  /**
   * Is the dropdown currently active or not
   * @internal
   */
  active: boolean;
  activeHandler(): void;
  /** specify the icon used for the dropdown menu, defaults to chevron */
  dropdownIconType: DropdownIconType;
  /** aria label for overflow button */
  dropdownLabel?: string;
  /** optionally add a calcite-loader component to the control,
   disabling interaction. with the primary button */
  loading: boolean;
  /** Describes the type of positioning to use for the dropdown. If your element is in a fixed container, use the 'fixed' value. */
  overlayPositioning: OverlayPositioning;
  /** optionally pass an icon to display at the end of the primary button - accepts Calcite UI icon names  */
  primaryIconEnd?: string;
  /** flip the primary icon(s) in rtl */
  primaryIconFlipRtl?: FlipContext;
  /** optionally pass an icon to display at the start of the primary button - accepts Calcite UI icon names  */
  primaryIconStart?: string;
  /** optionally pass an aria-label for the primary button */
  primaryLabel?: string;
  /** text for primary action button  */
  primaryText: string;
  /** specify the scale of the control, defaults to m */
  scale: Scale;
  /** specify the width of the button, defaults to auto */
  width: Width;
  /** fired when the primary button is clicked */
  calciteSplitButtonPrimaryClick: EventEmitter;
  /** fired when the secondary button is clicked */
  calciteSplitButtonSecondaryClick: EventEmitter;
  componentDidRender(): void;
  render(): VNode;
  private calciteSplitButtonPrimaryClickHandler;
  private calciteSplitButtonSecondaryClickHandler;
  private get dropdownIcon();
}
