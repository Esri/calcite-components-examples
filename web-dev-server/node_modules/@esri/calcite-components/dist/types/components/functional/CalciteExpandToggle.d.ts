import { FunctionalComponent } from "../../stencil-public-runtime";
import { CalcitePosition } from "../interfaces";
interface CalciteExpandToggleProps {
  expanded: boolean;
  intlExpand: string;
  intlCollapse: string;
  el: HTMLElement;
  position: CalcitePosition;
  tooltip?: HTMLCalciteTooltipElement;
  toggle: () => void;
  ref?: (el: HTMLElement) => void;
}
export declare function toggleChildActionText({ parent, expanded }: {
  parent: HTMLElement;
  expanded: boolean;
}): void;
export declare const CalciteExpandToggle: FunctionalComponent<CalciteExpandToggleProps>;
export {};
