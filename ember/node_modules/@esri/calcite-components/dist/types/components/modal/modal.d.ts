import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { ModalBackgroundColor } from "./interfaces";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
/**
 * @slot header - a slot for adding a modal header
 * @slot content - a slot for adding modal content
 * @slot primary - a slot for adding a primary button
 * @slot secondary - a slot for adding a secondary button
 * @slot back - a slot for adding a back button
 */
export declare class Modal implements ConditionalSlotComponent {
  el: HTMLCalciteModalElement;
  /** Add the active attribute to open the modal */
  active: boolean;
  /** Optionally pass a function to run before close */
  beforeClose: (el: HTMLElement) => Promise<void>;
  /** Disables the display a close button within the Modal */
  disableCloseButton: boolean;
  /** Disables the closing of the Modal when clicked outside. */
  disableOutsideClose: boolean;
  /** Aria label for the close button */
  intlClose: string;
  /** Prevent the modal from taking up the entire screen on mobile */
  docked: boolean;
  /** Specify an element to focus when the modal is first opened */
  firstFocus?: HTMLElement;
  /** Flag to disable the default close on escape behavior */
  disableEscape: boolean;
  /** specify the scale of modal, defaults to m */
  scale: Scale;
  /** Set the width of the modal. Can use stock sizes or pass a number (in pixels) */
  width: Scale | number;
  /** Set the modal to always be fullscreen (overrides width) */
  fullscreen: boolean;
  /** Adds a color bar at the top for visual impact,
   * Use color to add importance to destructive/workflow dialogs. */
  color?: "red" | "blue";
  /** Background color of modal content */
  backgroundColor: ModalBackgroundColor;
  /** Turn off spacing around the content area slot */
  noPadding: boolean;
  componentWillLoad(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
  renderFooter(): VNode;
  renderCloseButton(): VNode;
  renderStyle(): VNode;
  hasFooter: boolean;
  closeButtonEl: HTMLButtonElement;
  contentId: string;
  modalContent: HTMLDivElement;
  private mutationObserver;
  previousActiveElement: HTMLElement;
  titleId: string;
  private activeTransitionProp;
  handleEscape(e: KeyboardEvent): void;
  /** Fired when the modal finishes the open animation */
  calciteModalOpen: EventEmitter;
  /** Fired when the modal finishes the close animation */
  calciteModalClose: EventEmitter;
  /**
   * Focus first interactive element
   * @deprecated use `setFocus` instead.
   */
  focusElement(el?: HTMLElement): Promise<void>;
  /**
   * Sets focus on the component.
   *
   * By default, will try to focus on any focusable content. If there is none, it will focus on the close button.
   * If you want to focus on the close button, you can use the `close-button` focus ID.
   */
  setFocus(focusId?: "close-button"): Promise<void>;
  /** Set the scroll top of the modal content */
  scrollContent(top?: number, left?: number): Promise<void>;
  transitionEnd: (event: TransitionEvent) => void;
  toggleModal(value: boolean, oldValue: boolean): Promise<void>;
  private openEnd;
  /** Open the modal */
  private open;
  handleOutsideClose: () => void;
  /** Close the modal, first running the `beforeClose` method */
  close: () => Promise<void>;
  focusFirstElement: () => void;
  focusLastElement: () => void;
  private removeOverflowHiddenClass;
  private updateFooterVisibility;
}
