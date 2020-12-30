import { createPopper as setupPopper } from "@popperjs/core";
import { getElementDir } from "./dom";
export const CSS = {
  animation: "calcite-popper-anim",
  animationActive: "calcite-popper-anim--active"
};
export function getPlacement(el, placement) {
  const values = ["left", "right"];
  if (getElementDir(el) === "rtl") {
    values.reverse();
  }
  return placement.replace(/leading/gi, values[0]).replace(/trailing/gi, values[1]);
}
export function createPopper({ referenceEl, el, placement, modifiers }) {
  if (!referenceEl) {
    return null;
  }
  return setupPopper(referenceEl, el, {
    placement: getPlacement(el, placement),
    modifiers
  });
}
export function updatePopper({ el, modifiers, placement: calcitePlacement, popper }) {
  const placement = getPlacement(el, calcitePlacement);
  popper.setOptions({
    modifiers,
    placement
  });
}
export function hypotenuse(sideA, sideB) {
  return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
}
const visiblePointerSize = 4;
export const defaultOffsetDistance = Math.ceil(hypotenuse(visiblePointerSize, visiblePointerSize));
