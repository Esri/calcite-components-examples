import { VNode } from "../../stencil-public-runtime";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding `calcite-list-item` and `calcite-list-item-group` elements.
 * @slot actions-start - A slot for adding actionable `calcite-action` elements before the content of the list item.
 * @slot content-start - A slot for adding non-actionable elements before the label and description of the list item.
 * @slot content-end - A slot for adding non-actionable elements after the label and description of the list item.
 * @slot actions-end - A slot for adding actionable `calcite-action` elements after the content of the list item.
 */
export declare class ListItem implements ConditionalSlotComponent, InteractiveComponent {
  /**
   * When true, prevents the content of the list item from user interaction.
   */
  nonInteractive: boolean;
  /**
   * An optional description for this item.  This will appear below the label text.
   */
  description: string;
  /**
   * When true, disabled prevents interaction.
   */
  disabled: boolean;
  /**
   * The label text of the list item. This will appear above the description text.
   */
  label: string;
  el: HTMLCalciteListItemElement;
  focusEl: HTMLButtonElement;
  componentDidRender(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  renderActionsStart(): VNode;
  renderActionsEnd(): VNode;
  renderContentStart(): VNode;
  renderContentEnd(): VNode;
  renderContent(): VNode;
  renderContentContainer(): VNode;
  render(): VNode;
}
