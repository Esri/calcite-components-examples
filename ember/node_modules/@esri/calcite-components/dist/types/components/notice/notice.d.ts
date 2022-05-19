import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale, Width } from "../interfaces";
import { StatusColor } from "../alert/interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/** Notices are intended to be used to present users with important-but-not-crucial contextual tips or copy. Because
 * notices are displayed inline, a common use case is displaying them on page-load to present users with short hints or contextual copy.
 * They are optionally dismissible - useful for keeping track of whether or not a user has dismissed the notice. You can also choose not
 * to display a notice on page load and set the "active" attribute as needed to contextually provide inline messaging to users.
 */
/**
 * @slot title - Title of the notice (optional)
 * @slot message - Main text of the notice
 * @slot link - Optional action to take from the notice (undo, try again, link to page, etc.)
 * @slot actions-end - Allows adding a `calcite-action` at the end of the notice. It is recommended to use 2 or less actions.
 */
export declare class Notice implements ConditionalSlotComponent {
  el: HTMLCalciteNoticeElement;
  /** Is the notice currently active or not */
  active: boolean;
  /** Color for the notice (will apply to top border and icon) */
  color: StatusColor;
  /** Optionally show a button the user can click to dismiss the notice */
  dismissible: boolean;
  /** when used as a boolean set to true, show a default recommended icon. You can
   * also pass a calcite-ui-icon name to this prop to display a requested icon */
  icon: string | boolean;
  /** String for the close button.
   * @default "Close"
   */
  intlClose: string;
  /** specify the scale of the notice, defaults to m */
  scale: Scale;
  /** specify the width of the notice, defaults to auto */
  width: Width;
  updateRequestedIcon(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  render(): VNode;
  /** Fired when an notice is closed */
  calciteNoticeClose: EventEmitter;
  /** Fired when an Notice is opened */
  calciteNoticeOpen: EventEmitter;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  private close;
  /** the close button element */
  private closeButton?;
  /** the computed icon to render */
  private requestedIcon?;
}
