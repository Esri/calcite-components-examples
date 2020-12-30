import { VNode } from "../../stencil-public-runtime";
import { StrictModifiers, Instance as Popper } from "@popperjs/core";
import { CalcitePlacement } from "../../utils/popper";
export declare class CalciteTooltip {
  /** Accessible name for the component */
  label: string;
  /**
   * Offset the position of the popover away from the reference element.
   */
  offsetDistance: number;
  offsetDistanceOffsetHandler(): void;
  /**
   * Offset the position of the popover along the reference element.
   */
  offsetSkidding: number;
  offsetSkiddingHandler(): void;
  /**
   * Display and position the component.
   */
  open: boolean;
  openHandler(): void;
  /**
   * Determines where the component will be positioned relative to the referenceElement.
   */
  placement: CalcitePlacement;
  placementHandler(): void;
  /**
   * Reference HTMLElement used to position this component.
   */
  referenceElement: HTMLElement | string;
  referenceElementHandler(): void;
  /** Select theme (light or dark) */
  theme: "light" | "dark";
  el: HTMLCalciteTooltipElement;
  _referenceElement: HTMLElement;
  arrowEl: HTMLDivElement;
  popper: Popper;
  guid: string;
  componentDidLoad(): void;
  disconnectedCallback(): void;
  reposition(): Promise<void>;
  getId: () => string;
  addReferences: () => void;
  removeReferences: () => void;
  show: () => void;
  hide: () => void;
  getReferenceElement(): HTMLElement;
  getModifiers(): Partial<StrictModifiers>[];
  createPopper(): void;
  destroyPopper(): void;
  render(): VNode;
}
