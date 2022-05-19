import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Alignment, Scale, Status } from "../interfaces";
/**
 * @slot - A slot for adding text and a component that can be labeled.
 */
export declare class Label {
  el: HTMLCalciteLabelElement;
  /** specify the text alignment of the label */
  alignment: Alignment;
  /**
   * specify the status of the label and any child input / input messages
   * @deprecated set directly on child element instead
   */
  status: Status;
  /** The id of the input associated with the label */
  for: string;
  /** specify the scale of the label, defaults to m */
  scale: Scale;
  /** is the wrapped element positioned inline with the label slotted text */
  layout: "inline" | "inline-space-between" | "default";
  /** eliminates any space around the label */
  disableSpacing: boolean;
  /**
   * is the label disabled
   *
   * @deprecated use the `disabled` property on the interactive components instead
   */
  disabled: boolean;
  /**
   * @internal
   */
  calciteInternalLabelClick: EventEmitter<{
    sourceEvent: MouseEvent;
  }>;
  labelClickHandler: (event: MouseEvent) => void;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
}
