import Sortable from "sortablejs";
import { EventEmitter, VNode } from "../../stencil-public-runtime";
/**
 * @slot - A slot for adding sortable items
 */
export declare class CalciteSortableList {
  /**
   * The class on the handle elements.
   */
  handleSelector: string;
  /**
   * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
   */
  disabled: boolean;
  /**
   * When true, content is waiting to be loaded. This state shows a busy indicator.
   */
  loading: boolean;
  el: HTMLCalciteSortableListElement;
  handleActivated: boolean;
  items: Element[];
  observer: MutationObserver;
  sortable: Sortable;
  connectedCallback(): void;
  disconnectedCallback(): void;
  /**
   * Emmitted when the order of the list has changed.
   * @event calciteListOrderChange
   */
  calciteListOrderChange: EventEmitter;
  calciteHandleNudgeHandler(event: CustomEvent): void;
  setUpDragAndDrop(): void;
  cleanUpDragAndDrop(): void;
  beginObserving(): void;
  render(): VNode;
}
