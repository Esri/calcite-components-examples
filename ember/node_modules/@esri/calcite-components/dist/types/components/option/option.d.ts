import { VNode } from "../../stencil-public-runtime";
export declare class Option {
  /**
   * When true, it prevents the option from being selected.
   */
  disabled: boolean;
  /**
   * The option label.
   */
  label: string;
  /**
   * When true, this option is selected. Otherwise, false.
   */
  selected: boolean;
  /**
   * The value associated with this option.
   */
  value: any;
  protected handlePropChange(_newValue: any, _oldValue: any, propName: string): void;
  private el;
  private internallySetLabel;
  private internallySetValue;
  private mutationObserver;
  /**
   * @internal
   */
  private calciteOptionChange;
  private ensureTextContentDependentProps;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
}
