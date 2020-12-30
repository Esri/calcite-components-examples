import { EventEmitter } from "../../stencil-public-runtime";
import { VNode } from "../../stencil-public-runtime";
import { CalciteScale, CalciteTheme } from "../interfaces";
/**
 * @slot header-actions-start - a slot for adding actions or content to the start side of the panel header.
 * @slot header-actions-end - a slot for adding actions or content to the end side of the panel header.
 * @slot header-content - a slot for adding custom content to the header.
 * @slot header-menu-actions - a slot for adding an overflow menu with actions inside a dropdown.
 * @slot fab - a slot for adding a `calcite-fab` (floating action button) to perform an action.
 * @slot footer-actions - a slot for adding buttons to the footer.
 * @slot footer - a slot for adding custom content to the footer.
 */
export declare class CalcitePanel {
  /**
   * Hides the panel.
   */
  dismissed: boolean;
  dismissedHandler(): void;
  /**
   * When provided, this method will be called before it is removed from the parent flow.
   */
  beforeBack?: () => Promise<void>;
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  disabled: boolean;
  /**
   * Displays a close button in the trailing side of the header.
   */
  dismissible: boolean;
  /**
   * Shows a back button in the header.
   */
  showBackButton: boolean;
  /**
   * 'Back' text string.
   */
  intlBack?: string;
  /**
   * 'Open' text string for the menu.
   */
  intlOpen?: string;
  /**
   * Specifies the maxiumum height of the panel.
   */
  heightScale: CalciteScale;
  /**
   * This sets width of the panel.
   */
  widthScale?: CalciteScale;
  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  loading: boolean;
  /**
   * 'Close' text string for the close button. The close button will only be shown when 'dismissible' is true.
   */
  intlClose?: string;
  /**
   * 'Options' text string for the actions menu.
   */
  intlOptions?: string;
  /**
   * Used to set the component's color scheme.
   */
  theme: CalciteTheme;
  /**
   * Heading text.
   */
  heading?: string;
  /**
   * Summary text. A description displayed underneath the heading.
   */
  summary?: string;
  /**
   * Opens the action menu.
   */
  menuOpen: boolean;
  el: HTMLCalcitePanelElement;
  backButtonEl: HTMLCalciteActionElement;
  dismissButtonEl: HTMLCalciteActionElement;
  menuButtonEl: HTMLCalciteActionElement;
  containerEl: HTMLElement;
  /**
   * Emitted when the close button has been clicked.
   */
  calcitePanelDismissedChange: EventEmitter;
  /**
   * Emitted when the content has been scrolled.
   */
  calcitePanelScroll: EventEmitter;
  /**
   * Emitted when the back button has been clicked.
   */
  calcitePanelBackClick: EventEmitter;
  setContainerRef: (node: HTMLElement) => void;
  setMenuButonRef: (node: HTMLCalciteActionElement) => void;
  setDismissRef: (node: HTMLCalciteActionElement) => void;
  setBackRef: (node: HTMLCalciteActionElement) => void;
  panelKeyUpHandler: (event: KeyboardEvent) => void;
  dismiss: () => void;
  panelScrollHandler: () => void;
  backButtonClick: () => void;
  queryActions(): HTMLCalciteActionElement[];
  isValidKey(key: string, supportedKeys: string[]): boolean;
  toggleMenuOpen: () => void;
  menuButtonKeyDown: (event: KeyboardEvent) => void;
  menuActionsKeydown: (event: KeyboardEvent) => void;
  menuActionsContainerKeyDown: (event: KeyboardEvent) => void;
  setFocus(focusId?: "dismiss-button" | "back-button"): Promise<void>;
  renderBackButton(): VNode;
  renderHeaderContent(): VNode;
  /**
   * Allows user to override the entire header-content node.
   */
  renderHeaderSlottedContent(): VNode;
  renderHeaderStartActions(): VNode;
  renderHeaderActionsEnd(): VNode;
  renderMenuItems(): VNode;
  renderMenuButton(): VNode;
  renderMenu(): VNode;
  renderHeaderNode(): VNode;
  /**
   * Allows user to override the entire footer node.
   */
  renderFooterSlottedContent(): VNode;
  renderFooterActions(): VNode;
  renderContent(): VNode;
  renderFab(): VNode;
  render(): VNode;
}
