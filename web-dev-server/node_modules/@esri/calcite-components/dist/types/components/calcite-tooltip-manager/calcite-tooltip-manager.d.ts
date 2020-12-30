import { VNode } from "../../stencil-public-runtime";
export declare class CalciteTooltipManager {
  tooltipEl: HTMLCalciteTooltipElement;
  hoverTimeouts: WeakMap<HTMLCalciteTooltipElement, number>;
  /**
   * CSS Selector to match reference elements for tooltips.
   */
  selector: string;
  queryTooltip: (el: HTMLElement) => HTMLCalciteTooltipElement;
  clearHoverTimeout: (tooltip: HTMLCalciteTooltipElement) => void;
  closeExistingTooltip: () => void;
  focusTooltip: ({ tooltip, value }: {
    tooltip: HTMLCalciteTooltipElement;
    value: boolean;
  }) => void;
  toggleTooltip: (tooltip: HTMLCalciteTooltipElement, value: boolean) => void;
  hoverToggle: ({ tooltip, value }: {
    tooltip: HTMLCalciteTooltipElement;
    value: boolean;
  }) => void;
  hoverTooltip: ({ tooltip, value }: {
    tooltip: HTMLCalciteTooltipElement;
    value: boolean;
  }) => void;
  activeTooltipHover: (event: MouseEvent) => void;
  hoverEvent: (event: MouseEvent, value: boolean) => void;
  focusEvent: (event: FocusEvent, value: boolean) => void;
  render(): VNode;
  keyUpHandler(event: KeyboardEvent): void;
  mouseEnterShow(event: MouseEvent): void;
  mouseLeaveHide(event: MouseEvent): void;
  focusShow(event: FocusEvent): void;
  blurHide(event: FocusEvent): void;
}
