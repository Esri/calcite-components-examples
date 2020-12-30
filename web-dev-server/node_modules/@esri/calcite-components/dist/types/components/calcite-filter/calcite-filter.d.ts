/// <reference types="lodash" />
import { Event, EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class CalciteFilter {
  /**
   * The input data. The filter uses this as the starting point, and returns items
   * that contain the string entered in the input, using a partial match and recursive search.
   */
  data: object[];
  /**
   * A text label that will appear on the clear button.
   */
  intlClear?: string;
  /**
   * A text label that will appear next to the input field.
   */
  intlLabel?: string;
  /**
   * Placeholder text for the input element's placeholder attribute
   */
  placeholder?: string;
  el: HTMLCalciteFilterElement;
  empty: boolean;
  textInput: HTMLInputElement;
  calciteFilterChange: EventEmitter;
  filter: import("lodash").DebouncedFunc<(value: string) => void>;
  inputHandler: (event: Event) => void;
  clear: () => void;
  render(): VNode;
}
