import { Placement, Instance as Popper, StrictModifiers } from "@popperjs/core";
declare type PlacementRtl = "leading-start" | "leading" | "leading-end" | "trailing-end" | "trailing" | "trailing-start";
export declare type CalcitePlacement = Placement | PlacementRtl;
export declare const CSS: {
  animation: string;
  animationActive: string;
};
export declare function getPlacement(el: HTMLElement, placement: CalcitePlacement): Placement;
export declare function createPopper({ referenceEl, el, placement, modifiers }: {
  el: HTMLElement;
  modifiers: Partial<StrictModifiers>[];
  placement: CalcitePlacement;
  referenceEl: HTMLElement;
}): Popper | null;
export declare function updatePopper({ el, modifiers, placement: calcitePlacement, popper }: {
  el: HTMLElement;
  modifiers: Partial<StrictModifiers>[];
  popper: Popper;
  placement: CalcitePlacement;
}): void;
export declare function hypotenuse(sideA: number, sideB: number): number;
export declare const defaultOffsetDistance: number;
export {};
