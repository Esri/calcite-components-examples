import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { LabelableComponent } from "../../utils/label";
import { CheckableFormCompoment } from "../../utils/form";
import { InteractiveComponent } from "../../utils/interactive";
export declare class Switch implements LabelableComponent, CheckableFormCompoment, InteractiveComponent {
  el: HTMLCalciteSwitchElement;
  /** True if the switch is disabled */
  disabled: boolean;
  /** Applies to the aria-label attribute on the switch */
  label?: string;
  /** The name of the switch input */
  name: string;
  /** The scale of the switch */
  scale: Scale;
  /** True if the switch is initially on
   * @deprecated use 'checked' instead.
   */
  switched: boolean;
  switchedWatcher(switched: boolean): void;
  /** True if the switch is initially on */
  checked: boolean;
  /** The value of the switch input */
  value: any;
  labelEl: HTMLCalciteLabelElement;
  switchEl: HTMLDivElement;
  formEl: HTMLFormElement;
  defaultValue: Switch["checked"];
  defaultChecked: boolean;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  keyDownHandler: (e: KeyboardEvent) => void;
  onLabelClick(): void;
  private toggle;
  private clickHandler;
  private setSwitchEl;
  /**
   * Fires when the checked value has changed.
   */
  calciteSwitchChange: EventEmitter;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  render(): VNode;
}
