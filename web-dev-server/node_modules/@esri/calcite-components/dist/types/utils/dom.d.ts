import { CalciteTheme } from "../components/interfaces";
export declare function nodeListToArray<T extends Element>(nodeList: HTMLCollectionOf<T> | NodeListOf<T> | T[]): T[];
declare type Direction = "ltr" | "rtl";
export declare function getElementDir(el: HTMLElement): Direction;
export declare function getElementTheme(el: HTMLElement): CalciteTheme;
export declare function getElementProp(el: Element, prop: string, fallbackValue: any, crossShadowBoundary?: boolean): any;
export interface CalciteFocusableElement extends HTMLElement {
  setFocus?: () => void;
}
export declare function focusElement(el: CalciteFocusableElement): void;
interface GetSlottedOptions {
  all?: boolean;
  direct?: boolean;
  selector?: string;
}
export declare function getSlotted<T extends Element = Element>(element: Element, slotName: string, options: GetSlottedOptions & {
  all: true;
}): T[];
export declare function getSlotted<T extends Element = Element>(element: Element, slotName: string, options?: GetSlottedOptions): T | null;
export declare function filterDirectChildren<T extends Element>(el: Element, selector: string): T[];
export declare function getElementByAttributeId<T extends Element>(element: Element, attrName: string): T | HTMLElement | null;
export declare function hasLabel(labelEl: HTMLCalciteLabelElement, el: HTMLElement): boolean;
export declare function setRequestedIcon(iconObject: Record<string, string>, iconValue: string | boolean, matchedValue: string): string;
export {};
