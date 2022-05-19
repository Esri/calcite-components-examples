import { FunctionalComponent } from "../../stencil-public-runtime";
import { Position, Scale } from "../interfaces";
interface ExpandToggleProps {
  expanded: boolean;
  intlExpand: string;
  intlCollapse: string;
  el: HTMLElement;
  position: Position;
  tooltip?: HTMLCalciteTooltipElement;
  toggle: () => void;
  ref?: (el: HTMLElement) => void;
  scale?: Scale;
}
export declare function toggleChildActionText({ parent, expanded }: {
  parent: HTMLElement;
  expanded: boolean;
}): void;
export declare const ExpandToggle: FunctionalComponent<ExpandToggleProps>;
export {};
