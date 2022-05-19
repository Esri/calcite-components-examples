import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { AlertDuration, AlertPlacement, StatusColor } from "./interfaces";
/** Alerts are meant to provide a way to communicate urgent or important information to users, frequently as a result of an action they took in your app. Alerts are positioned
 * at the bottom of the page. Multiple opened alerts will be added to a queue, allowing users to dismiss them in the order they are provided.
 */
/**
 * @slot title - Title of the alert (optional)
 * @slot message - Main text of the alert
 * @slot link - Optional action to take from the alert (undo, try again, link to page, etc.)
 */
export declare class Alert {
  el: HTMLCalciteAlertElement;
  /** Is the alert currently active or not */
  active: boolean;
  watchActive(): void;
  /** Close the alert automatically (recommended for passive, non-blocking alerts) */
  autoDismiss: boolean;
  /** Duration of autoDismiss (only used with `autoDismiss`) */
  autoDismissDuration: AlertDuration;
  /** Color for the alert (will apply to top border and icon) */
  color: StatusColor;
  /** when used as a boolean set to true, show a default recommended icon. You can
   * also pass a calcite-ui-icon name to this prop to display a requested icon */
  icon: string | boolean;
  /** string to override English close text
   * @default "Close"
   */
  intlClose: string;
  /** Accessible name for the component */
  label: string;
  /** specify the placement of the alert */
  placement: AlertPlacement;
  /** specify the scale of the alert, defaults to m */
  scale: Scale;
  updateRequestedIcon(): void;
  updateDuration(): void;
  connectedCallback(): void;
  componentWillLoad(): void;
  disconnectedCallback(): void;
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
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  /** the list of queued alerts */
  queue: HTMLCalciteAlertElement[];
  /** the count of queued alerts */
  queueLength: number;
  /** is the alert queued */
  queued: boolean;
  /** the close button element */
  private closeButton?;
  private autoDismissTimeoutId;
  private queueTimeout;
  private trackTimer;
  /** the computed icon to render */
  requestedIcon?: string;
  private activeTransitionProp;
  /** determine which alert is active */
  private determineActiveAlert;
  /** close and emit the closed alert and the queue */
  private closeAlert;
  transitionEnd: (event: TransitionEvent) => void;
  /** emit the opened alert and the queue */
  private openAlert;
}
