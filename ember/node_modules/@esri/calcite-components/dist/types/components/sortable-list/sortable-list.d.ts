import Sortable from "sortablejs";
import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Layout } from "../interfaces";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot - A slot for adding sortable items.
 */
export declare class SortableList implements InteractiveComponent {
  /**
   * Specifies which items inside the element should be draggable.
   */
  dragSelector?: string;
  /**
   * The list's group identifier.
   *
   * To drag elements from one list into another, both lists must have the same group value.
   */
  group?: string;
  /**
   * The selector for the handle elements.
   */
  handleSelector: string;
  /**
   * Indicates the horizontal or vertical orientation of the component.
   */
  layout: Layout;
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
  mutationObserver: MutationObserver;
  sortable: Sortable;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  /**
   * Emitted when the order of the list has changed.
   */
  calciteListOrderChange: EventEmitter;
  calciteHandleNudgeHandler(event: CustomEvent): void;
  setUpDragAndDrop(): void;
  cleanUpDragAndDrop(): void;
  beginObserving(): void;
  render(): VNode;
}
