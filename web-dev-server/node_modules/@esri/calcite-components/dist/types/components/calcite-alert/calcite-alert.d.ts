import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { CalciteScale, CalciteStatusColor, CalciteTheme } from "../interfaces";
/** Alerts are meant to provide a way to communicate urgent or important information to users, frequently as a result of an action they took in your app. Alerts are positioned
 * at the bottom of the page. Multiple opened alerts will be added to a queue, allowing users to dismiss them in the order they are provided.
 */
/**
 * @slot alert-title - Title of the alert (optional)
 * @slot alert-message - Main text of the alert
 * @slot alert-link - Optional action to take from the alert (undo, try again, link to page, etc.)
 */
export declare class CalciteAlert {
  el: HTMLCalciteAlertElement;
  /** Is the alert currently active or not */
  active: boolean;
  watchActive(): void;
  /** Close the alert automatically (recommended for passive, non-blocking alerts) */
  autoDismiss: boolean;
  /** Duration of autoDismiss (only used with `autoDismiss`) */
  autoDismissDuration: "fast" | "medium" | "slow";
  /** Color for the alert (will apply to top border and icon) */
  color: CalciteStatusColor;
  /** when used as a boolean set to true, show a default recommended icon. You can
   * also pass a calcite-ui-icon name to this prop to display a requested icon */
  icon: string | boolean;
  /** string to override English close text */
  intlClose: string;
  /** Accessible name for the component */
  label: string;
  /** specify the scale of the button, defaults to m */
  scale: CalciteScale;
  /** Select theme (light or dark) */
  theme: CalciteTheme;
  updateRequestedIcon(): void;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  render(): VNode;
  /** Fired when an alert is closed */
  calciteAlertClose: EventEmitter;
  /** Fired when an alert is opened */
  calciteAlertOpen: EventEmitter;
  /**
   * Fired to sync queue when opened or closed
   *
   * @internal
   */
  calciteAlertSync: EventEmitter;
  /**
   * Fired when an alert is added to dom - used to receive initial queue
   *
   * @internal
   */
  calciteAlertRegister: EventEmitter;
  alertSync(event: CustomEvent): void;
  alertRegister(): void;
  /** focus either the slotted alert-link or the close button */
  setFocus(): Promise<void>;
  /** the list of queued alerts */
  queue: HTMLCalciteAlertElement[];
  /** the count of queued alerts */
  queueLength: number;
  /** is the alert queued */
  queued: boolean;
  /** the close button element */
  private closeButton?;
  /** the slotted alert link child element  */
  private alertLinkEl?;
  /** the computed icon to render */
  requestedIcon?: string;
  /** determine which alert is active */
  private determineActiveAlert;
  /** close and emit the closed alert and the queue */
  private closeAlert;
  /** emit the opened alert and the queue */
  private openAlert;
}
