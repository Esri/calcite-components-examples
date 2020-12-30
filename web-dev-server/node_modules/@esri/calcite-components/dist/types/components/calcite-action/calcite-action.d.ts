import { CalciteAppearance, CalciteScale, CalciteTheme } from "../interfaces";
import { VNode } from "../../stencil-public-runtime";
/**
 * @slot - A slot for adding a `calcite-icon`.
 */
export declare class CalciteAction {
  /** Specify the appearance style of the action, defaults to solid. */
  appearance: CalciteAppearance;
  /**
   * Indicates whether the action is highlighted.
   */
  active: boolean;
  /**
   * Compact mode is used internally by components to reduce side padding, e.g. calcite-block-section.
   */
  compact: boolean;
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  disabled: boolean;
  /**
   * The name of the icon to display. The value of this property must match the icon name from https://esri.github.io/calcite-ui-icons/.
   */
  icon?: string;
  /**
   * Indicates unread changes.
   */
  indicator: boolean;
  /** string to override English loading text */
  intlLoading?: string;
  /**
   * Label of the action, exposed on hover. If no label is provided, the label inherits what's provided for the `text` prop.
   */
  label?: string;
  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  loading: boolean;
  /**
   * Specifies the size of the action.
   */
  scale: CalciteScale;
  /**
   * Text that accompanies the action icon.
   */
  text: string;
  /**
   * Indicates whether the text is displayed.
   */
  textEnabled: boolean;
  /**
   * Used to set the component's color scheme.
   */
  theme: CalciteTheme;
  el: HTMLCalciteActionElement;
  buttonEl: HTMLButtonElement;
  observer: MutationObserver;
  connectedCallback(): void;
  disconnectedCallback(): void;
  setFocus(): Promise<void>;
  renderTextContainer(): VNode;
  renderIconContainer(): VNode;
  render(): VNode;
}
