import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { CalciteTheme } from "../interfaces";
/**
 * @slot - A slot for adding `calcite-tip`s.
 */
export declare class CalciteTipManager {
  /**
   * Alternate text for closing the `calcite-tip-manager`.
   */
  closed: boolean;
  closedChangeHandler(): void;
  /**
   * Alternate text for closing the tip.
   */
  intlClose?: string;
  /**
   * The default group title for the `calcite-tip-manager`.
   */
  intlDefaultTitle?: string;
  /**
   * Alternate text for navigating to the next tip.
   */
  intlNext?: string;
  /**
   * Label that appears on hover of pagination icon.
   */
  intlPaginationLabel?: string;
  /**
   * Alternate text for navigating to the previous tip.
   */
  intlPrevious?: string;
  /**
   * Used to set the component's color scheme.
   */
  theme: CalciteTheme;
  el: HTMLCalciteTipManagerElement;
  selectedIndex: number;
  selectedChangeHandler(): void;
  tips: HTMLCalciteTipElement[];
  total: number;
  direction: "advancing" | "retreating";
  groupTitle: string;
  observer: MutationObserver;
  container: HTMLDivElement;
  connectedCallback(): void;
  disconnectedCallback(): void;
  nextTip(): Promise<void>;
  previousTip(): Promise<void>;
  /**
   * Emitted when the `calcite-tip-manager` has been toggled open or closed.
   */
  calciteTipManagerToggle: EventEmitter;
  setUpTips(): void;
  hideTipManager: () => void;
  showSelectedTip(): void;
  updateGroupTitle(): void;
  previousClicked: () => void;
  nextClicked: () => void;
  tipManagerKeyUpHandler: (event: KeyboardEvent) => void;
  storeContainerRef: (el: HTMLDivElement) => void;
  renderPagination(): VNode;
  render(): VNode;
}
