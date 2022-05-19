import { Placement, ComputedPlacement as PopperComputedPlacement, Instance as Popper, StrictModifiers, PositioningStrategy } from "@popperjs/core";
declare type PlacementRtl = "leading-start" | "leading" | "leading-end" | "trailing-end" | "trailing" | "trailing-start";
declare type VariationRtl = "leading-leading" | "leading-trailing" | "trailing-leading" | "trailing-trailing" | "top-leading" | "top-trailing" | "bottom-leading" | "bottom-trailing" | "right-leading" | "right-trailing" | "left-leading" | "left-trailing";
export declare type ComputedPlacement = PopperComputedPlacement;
export declare type PopperPlacement = Placement | PlacementRtl | VariationRtl;
export declare type OverlayPositioning = PositioningStrategy;
export declare const popperPlacements: PopperPlacement[];
export declare const popperComputedPlacements: ComputedPlacement[];
export declare type MenuPlacement = Extract<PopperPlacement, "top-start" | "top" | "top-end" | "bottom-start" | "bottom" | "bottom-end" | "top-leading" | "top-trailing" | "bottom-leading" | "bottom-trailing">;
export declare const defaultMenuPlacement: MenuPlacement;
export declare const popperMenuPlacements: MenuPlacement[];
export declare const popperMenuComputedPlacements: ComputedPlacement[];
export declare const CSS: {
  animation: string;
  animationActive: string;
};
export declare function filterComputedPlacements(placements: string[], el: HTMLElement): PopperComputedPlacement[];
export declare function getPlacement(el: HTMLElement, placement: PopperPlacement): Placement;
export declare function createPopper({ referenceEl, el, placement, overlayPositioning, modifiers }: {
  el: HTMLElement;
  modifiers: Partial<StrictModifiers>[];
  overlayPositioning: PositioningStrategy;
  placement: PopperPlacement;
  referenceEl: HTMLElement;
}): Popper | null;
export declare function updatePopper({ el, modifiers, placement: PopperPlacement, popper }: {
  el: HTMLElement;
  modifiers: Partial<StrictModifiers>[];
  popper: Popper;
  placement: PopperPlacement;
}): Promise<void>;
export declare function hypotenuse(sideA: number, sideB: number): number;
export declare const defaultOffsetDistance: number;
export {};
