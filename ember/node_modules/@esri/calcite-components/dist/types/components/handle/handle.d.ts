import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class Handle {
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
   * Emitted when the the handle is activated and the up or down arrow key is pressed.
   */
  calciteHandleNudge: EventEmitter;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  handleKeyDown: (event: KeyboardEvent) => void;
  handleBlur: () => void;
  render(): VNode;
}
