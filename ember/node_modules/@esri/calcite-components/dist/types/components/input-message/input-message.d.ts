import { VNode } from "../../stencil-public-runtime";
import { Scale, Status } from "../interfaces";
/**
 * @slot - A slot for adding text.
 */
export declare class InputMessage {
  el: HTMLCalciteInputMessageElement;
  /** Indicates whether the message is displayed. */
  active: boolean;
  /** when used as a boolean set to true, show a default icon based on status. You can
   * also pass a calcite-ui-icon name to this prop to display a custom icon */
  icon: boolean | string;
  /** specify the scale of the input, defaults to m */
  scale: Scale;
  /** specify the status of the input field, determines message and icons */
  status: Status;
  /** specify the appearance of any slotted message - default (displayed under input), or floating (positioned absolutely under input)
   * @deprecated "floating" type is no longer supported
   */
  type: "default";
  handleIconEl(): void;
  connectedCallback(): void;
  render(): VNode;
  /** the computed icon to render */
  private requestedIcon?;
  private renderIcon;
}
