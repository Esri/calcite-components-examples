import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Layout, Position, Scale } from "../interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding `calcite-action`s to the action pad.
 * @slot expand-tooltip - Used to set the tooltip for the expand toggle.
 */
export declare class ActionPad implements ConditionalSlotComponent {
  /**
   * When set to true, the expand-toggling behavior will be disabled.
   */
  expandDisabled: boolean;
  /**
   * Indicates whether widget is expanded.
   */
  expanded: boolean;
  expandedHandler(expanded: boolean): void;
  /**
   * Indicates the horizontal or vertical layout of the component.
   */
  layout: Layout;
  /**
   * Updates the label of the expand icon when the component is not expanded.
   */
  intlExpand?: string;
  /**
   * Updates the label of the collapse icon when the component is expanded.
   */
  intlCollapse?: string;
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
  calciteActionPadToggle: EventEmitter;
  el: HTMLCalciteActionPadElement;
  expandToggleEl: HTMLCalciteActionElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  /** Sets focus on the component. */
  setFocus(focusId?: "expand-toggle"): Promise<void>;
  actionMenuOpenChangeHandler: (event: CustomEvent<boolean>) => void;
  toggleExpand: () => void;
  setExpandToggleRef: (el: HTMLCalciteActionElement) => void;
  renderBottomActionGroup(): VNode;
  render(): VNode;
}
