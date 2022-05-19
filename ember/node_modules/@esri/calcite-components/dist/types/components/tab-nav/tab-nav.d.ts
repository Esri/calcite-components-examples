import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { TabChangeEventDetail } from "../tab/interfaces";
import { TabID, TabLayout } from "../tabs/interfaces";
import { TabPosition } from "../tabs/interfaces";
import { Scale } from "../interfaces";
/**
 * @slot - A slot for adding `calcite-tab-title`s.
 */
export declare class TabNav {
  el: HTMLCalciteTabNavElement;
  /**
   * Name to use when saving selected tab data to localStorage
   */
  storageId: string;
  /**
   * Pass the same string to multiple tab navs to keep them all in sync if one changes
   */
  syncId: string;
  /** @internal Parent tabs component scale value */
  scale: Scale;
  /** @internal Parent tabs component layout value */
  layout: TabLayout;
  /** @internal Parent tabs component position value */
  position: TabPosition;
  /** @internal Parent tabs component bordered value when layout is "inline" */
  bordered: boolean;
  /**
   * @internal
   */
  indicatorOffset: number;
  /**
   * @internal
   */
  indicatorWidth: number;
  selectedTabChanged(): Promise<void>;
  selectedTabElChanged(): void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  componentDidRender(): void;
  render(): VNode;
  focusPreviousTabHandler(e: CustomEvent): void;
  focusNextTabHandler(e: CustomEvent): void;
  internalActivateTabHandler(e: CustomEvent<TabChangeEventDetail>): void;
  activateTabHandler(e: CustomEvent<TabChangeEventDetail>): void;
  /**
   * Check for active tabs on register and update selected
   */
  updateTabTitles(e: CustomEvent<TabID>): void;
  globalInternalTabChangeHandler(e: CustomEvent<TabChangeEventDetail>): void;
  /**
   * Emitted when the active tab changes
   * @see [TabChangeEventDetail](https://github.com/Esri/calcite-components/blob/master/src/components/tab/interfaces.ts#L1)
   */
  calciteTabChange: EventEmitter<TabChangeEventDetail>;
  /**
   * @internal
   */
  calciteInternalTabChange: EventEmitter<TabChangeEventDetail>;
  selectedTab: TabID;
  selectedTabEl: HTMLCalciteTabTitleElement;
  parentTabsEl: HTMLCalciteTabsElement;
  tabNavEl: HTMLDivElement;
  activeIndicatorEl: HTMLElement;
  activeIndicatorContainerEl: HTMLDivElement;
  animationActiveDuration: number;
  resizeObserver: ResizeObserver;
  handleContainerScroll: () => void;
  updateOffsetPosition(): void;
  updateActiveWidth(): void;
  getIndexOfTabTitle(el: HTMLCalciteTabTitleElement, tabTitles?: HTMLCalciteTabTitleElement[]): number;
  getTabTitleById(id: TabID): Promise<HTMLCalciteTabTitleElement | null>;
  get tabTitles(): HTMLCalciteTabTitleElement[];
  get enabledTabTitles(): HTMLCalciteTabTitleElement[];
}
