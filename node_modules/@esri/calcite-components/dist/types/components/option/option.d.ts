import { VNode } from "../../stencil-public-runtime";
export declare class Option {
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /**
   * Accessible name for the component.
   */
  label: string;
  /**
   * When `true`, the component is selected.
   */
  selected: boolean;
  /**
   * The component's value.
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
  private calciteInternalOptionChange;
  private ensureTextContentDependentProps;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
}
