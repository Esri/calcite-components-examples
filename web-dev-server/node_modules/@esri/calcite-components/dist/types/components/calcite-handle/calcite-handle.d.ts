import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class CalciteHandle {
  /**
   * @internal - stores the activated state of the drag handle.
   */
  activated: boolean;
  /**
   * Value for the button title attribute
   */
  textTitle: string;
  el: HTMLCalciteHandleElement;
  handleButton: HTMLElement;
  /**
   * Emmitted when the the handle is activated and the up or down arrow key is pressed.
   * @event calciteHandleNudge
   */
  calciteHandleNudge: EventEmitter;
  setFocus(): Promise<void>;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleBlur: () => void;
  render(): VNode;
}
