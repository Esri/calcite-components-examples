import { DragStatus } from "./interfaces";
import { ValueList } from "./value-list";
export declare function getScreenReaderText(item: HTMLCalciteValueListItemElement, status: DragStatus, valueList: ValueList<HTMLCalciteValueListItemElement>): string;
export declare function getHandleAndItemElement(event: KeyboardEvent | FocusEvent): {
  handle: HTMLCalciteHandleElement;
  item: HTMLCalciteValueListItemElement;
};
export declare function replacePlaceholders(text: string, label: string, position: number, total: number): string;
