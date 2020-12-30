import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { CalciteStatusColor, CalciteScale, CalciteTheme, CalciteWidth } from "../interfaces";
/** Notices are intended to be used to present users with important-but-not-crucial contextual tips or copy. Because
 * notices are displayed inline, a common use case is displaying them on page-load to present users with short hints or contextual copy.
 * They are optionally dismissible - useful for keeping track of whether or not a user has dismissed the notice. You can also choose not
 * to display a notice on page load and set the "active" attribute as needed to contextually provide inline messaging to users.
 */
/**
 * @slot notice-title - Title of the notice (optional)
 * @slot notice-message - Main text of the notice
 * @slot notice-link - Optional action to take from the notice (undo, try again, link to page, etc.)
 */
export declare class CalciteNotice {
  el: HTMLCalciteNoticeElement;
  /** Is the notice currently active or not */
  active: boolean;
  /** Color for the notice (will apply to top border and icon) */
  color: CalciteStatusColor;
  /** Optionally show a button the user can click to dismiss the notice */
  dismissible?: boolean;
  /** when used as a boolean set to true, show a default recommended icon. You can
   * also pass a calcite-ui-icon name to this prop to display a requested icon */
  icon: string | boolean;
  /** String for the close button. */
  intlClose: string;
  /** specify the scale of the notice, defaults to m */
  scale: CalciteScale;
  /** Select theme (light or dark) */
  theme: CalciteTheme;
  /** specify the width of the notice, defaults to auto */
  width: CalciteWidth;
  updateRequestedIcon(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  render(): VNode;
  /** Fired when an notice is closed */
  calciteNoticeClose: EventEmitter;
  /** Fired when an Notice is opened */
  calciteNoticeOpen: EventEmitter;
  /** close the notice emit the `calciteNoticeClose` event - <calcite-notice> listens for this */
  close(): Promise<void>;
  /** open the notice and emit the `calciteNoticeOpen` event - <calcite-notice> listens for this  */
  open(): Promise<void>;
  /** focus the close button, if present and requested */
  setFocus(): Promise<void>;
  /** the close button element */
  private closeButton?;
  /** the notice link child element  */
  private noticeLinkEl?;
  /** the computed icon to render */
  private requestedIcon?;
}
