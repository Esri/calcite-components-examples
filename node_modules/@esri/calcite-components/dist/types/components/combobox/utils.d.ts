import { ComboboxChildElement } from "./interfaces";
export declare function getAncestors(element: HTMLElement): ComboboxChildElement[];
export declare function getItemAncestors(item: HTMLCalciteComboboxItemElement): HTMLCalciteComboboxItemElement[];
export declare function getItemChildren(item: HTMLCalciteComboboxItemElement): HTMLCalciteComboboxItemElement[];
export declare function hasActiveChildren(node: HTMLCalciteComboboxItemElement): boolean;
export declare function getDepth(element: HTMLElement): number;
