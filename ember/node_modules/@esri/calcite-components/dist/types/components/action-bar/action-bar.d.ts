/// <reference types="lodash" />
import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Position, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding `calcite-action`s that will appear at the top of the action bar.
 * @slot bottom-actions - A slot for adding `calcite-action`s that will appear at the bottom of the action bar, above the collapse/expand button.
 * @slot expand-tooltip - Used to set the tooltip for the expand toggle.
 */
export declare class ActionBar implements ConditionalSlotComponent {
  /**
   * When set to true, the expand-toggling behavior will be disabled.
   */
  expandDisabled: boolean;
  expandHandler(): void;
  /**
   * Indicates whether widget is expanded.
   */
  expanded: boolean;
  expandedHandler(expanded: boolean): void;
  /**
   * Updates the label of the expand icon when the component is not expanded.
   */
  intlExpand?: string;
  /**
   * Updates the label of the collapse icon when the component is expanded.
   */
  intlCollapse?: string;
  /**
   * Disables automatically overflowing actions that won't fit into menus.
   */
  overflowActionsDisabled: boolean;
  overflowDisabledHandler(overflowActionsDisabled: boolean): void;
  /**
   * Arranges the component depending on the elements 'dir' property.
   */
  position: Position;
  /**
   * Specifies the size of the expand action.
   */
  scale: Scale;
  /**
   * Emitted when expanded has been toggled.
   */
  calciteActionBarToggle: EventEmitter;
  el: HTMLCalciteActionBarElement;
  mutationObserver: MutationObserver;
  resizeObserver: ResizeObserver;
  expandToggleEl: HTMLCalciteActionElement;
  componentDidLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * Overflows actions that won't fit into menus.
   * @internal
   */
  overflowActions(): Promise<void>;
  /** Sets focus on the component. */
  setFocus(focusId?: "expand-toggle"): Promise<void>;
  actionMenuOpenChangeHandler: (event: CustomEvent<boolean>) => void;
  resizeHandlerEntries: (entries: ResizeObserverEntry[]) => void;
  resizeHandler: (entry: ResizeObserverEntry) => void;
  resize: import("lodash").DebouncedFunc<(height: number) => void>;
  conditionallyOverflowActions: () => void;
  toggleExpand: () => void;
  setExpandToggleRef: (el: HTMLCalciteActionElement) => void;
  renderBottomActionGroup(): VNode;
  render(): VNode;
}
