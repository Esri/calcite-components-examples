import { VNode } from "../../stencil-public-runtime";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot - A slot for adding content to the shell. This content will appear between any leading and trailing panels added to the shell. (eg. a map)
 * @slot header - A slot for adding header content. This content will be positioned at the top of the shell.
 * @slot footer - A slot for adding footer content. This content will be positioned at the bottom of the shell.
 * @slot primary-panel - A slot for adding the leading `calcite-shell-panel`.
 * @slot contextual-panel - A slot for adding the trailing `calcite-shell-panel`.
 * @slot center-row - A slot for adding custom content in the center row.
 */
export declare class Shell implements ConditionalSlotComponent {
  /**
   * Positions the center content behind any calcite-shell-panels.
   */
  contentBehind: boolean;
  el: HTMLCalciteShellElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  renderHeader(): VNode;
  renderContent(): VNode[];
  renderFooter(): VNode;
  renderMain(): VNode;
  render(): VNode;
}
