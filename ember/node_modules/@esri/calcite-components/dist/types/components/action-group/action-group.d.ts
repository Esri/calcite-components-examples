import { VNode } from "../../stencil-public-runtime";
import { Columns, Layout, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding a group of `calcite-action`s.
 * @slot menu-actions - a slot for adding an overflow menu with actions inside a dropdown.
 * @slot menu-tooltip - a slot for adding an tooltip for the menu.
 */
export declare class ActionGroup implements ConditionalSlotComponent {
  /**
   * Indicates whether widget is expanded.
   */
  expanded: boolean;
  expandedHandler(): void;
  /**
   * Indicates the horizontal, vertical, or grid layout of the component.
   */
  layout: Layout;
  /**
   * Indicates number of columns.
   */
  columns?: Columns;
  /**
   * Text string for the actions menu.
   */
  intlMore?: string;
  /**
   * Opens the action menu.
   */
  menuOpen: boolean;
  /**
   * Specifies the size of the action-menu.
   */
  scale: Scale;
  el: HTMLCalciteActionGroupElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  renderTooltip(): VNode;
  renderMenu(): VNode;
  render(): VNode;
  setMenuOpen: (event: CustomEvent<boolean>) => void;
}
