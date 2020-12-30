import { EventEmitter, VNode } from "../../stencil-public-runtime";
export declare class CalciteSwitch {
  el: HTMLCalciteSwitchElement;
  /** True if the switch is disabled */
  disabled?: boolean;
  /** The name of the checkbox input */
  name?: string;
  /** The scale of the switch */
  scale: "s" | "m" | "l";
  /** True if the switch is initially on */
  switched?: boolean;
  /** The component's theme. */
  theme: "light" | "dark";
  /** The value of the checkbox input */
  value?: string;
  calciteSwitchChange: EventEmitter;
  private observer;
  handleLabelFocus(e: CustomEvent): void;
  onClick(e: MouseEvent): void;
  keyDownHandler(e: KeyboardEvent): void;
  switchWatcher(): void;
  private inputProxy;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillRender(): void;
  render(): VNode;
  private get tabIndex();
  private setupProxyInput;
  private syncThisToProxyInput;
  private syncProxyInputToThis;
  private updateSwitch;
}
