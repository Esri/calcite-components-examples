import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { TabChangeEventDetail } from "./interfaces";
import { Scale } from "../interfaces";
/**
 * @slot - A slot for adding custom content.
 */
export declare class Tab {
  el: HTMLCalciteTabElement;
  /**
   * Optionally include a unique name for this tab,
   * be sure to also set this name on the associated title.
   */
  tab: string;
  /**
   * Show this tab
   */
  active: boolean;
  /** @internal Parent tabs component scale value */
  scale: Scale;
  render(): VNode;
  connectedCallback(): void;
  componentDidLoad(): void;
  componentWillRender(): void;
  disconnectedCallback(): void;
  /**
   * @internal
   */
  calciteTabRegister: EventEmitter;
  internalTabChangeHandler(event: CustomEvent<TabChangeEventDetail>): void;
  /**
   * Return the index of this tab within the tab array
   */
  getTabIndex(): Promise<number>;
  parentTabsEl: HTMLCalciteTabsElement;
  guid: string;
  labeledBy: string;
  /**
   * @internal
   */
  updateAriaInfo(tabIds?: string[], titleIds?: string[]): Promise<void>;
}
