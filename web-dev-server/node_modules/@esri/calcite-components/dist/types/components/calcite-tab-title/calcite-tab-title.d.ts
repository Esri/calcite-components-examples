import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { TabChangeEventDetail } from "../../interfaces/TabChange";
import { TabID } from "../calcite-tabs/interfaces";
export declare class CalciteTabTitle {
  el: HTMLCalciteTabTitleElement;
  /** Show this tab title as selected */
  active: boolean;
  /** Disable this tab title  */
  disabled: boolean;
  /** optionally pass an icon to display at the end of a tab title - accepts calcite ui icon names  */
  iconEnd?: string;
  /** flip the icon(s) in rtl */
  iconFlipRtl?: "both" | "start" | "end";
  /** optionally pass an icon to display at the start of a tab title - accepts calcite ui icon names  */
  iconStart?: string;
  /** @internal Parent tabs component layout value */
  layout: "center" | "inline";
  /** @internal Parent tabs component position value */
  position: "above" | "below";
  /**
   * Optionally include a unique name for the tab title,
   * be sure to also set this name on the associated tab.
   */
  tab?: string;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentWillRender(): void;
  render(): VNode;
  componentDidLoad(): Promise<void>;
  tabChangeHandler(event: CustomEvent<TabChangeEventDetail>): void;
  onClick(): void;
  keyDownHandler(e: KeyboardEvent): void;
  /**
   * Fires when a specific tab is activated. `event.details`: [TabChangeEventDetail](../../interfaces/TabChange.ts)
   */
  calciteTabsActivate: EventEmitter<TabChangeEventDetail>;
  /**
   * @internal
   */
  calciteTabsFocusNext: EventEmitter;
  /**
   * @internal
   */
  calciteTabsFocusPrevious: EventEmitter;
  /**
   * @internal
   */
  calciteTabTitleRegister: EventEmitter<TabID>;
  /**
   * Return the index of this title within the nav
   */
  getTabIndex(): Promise<number>;
  /**
   * @internal
   */
  getTabIdentifier(): Promise<TabID>;
  /**
   * @internal
   */
  updateAriaInfo(tabIds?: string[], titleIds?: string[]): Promise<void>;
  /** watches for changing text content **/
  private observer;
  private controls;
  /** determine if there is slotted text for styling purposes */
  private hasText?;
  /**
   * @internal
   */
  private parentTabNavEl;
  private updateHasText;
  private setupTextContentObserver;
  private emitActiveTab;
  /**
   * @internal
   */
  private guid;
}
