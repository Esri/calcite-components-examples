import { VNode } from "../../stencil-public-runtime";
/**
 * @slot - A slot for adding `calcite-option`s.
 */
export declare class OptionGroup {
  /**
   * When true, it prevents selection from any of its associated options.
   */
  disabled: boolean;
  /**
   * The group label. This property is required.
   */
  label: string;
  protected handlePropChange(): void;
  /**
   * @internal
   */
  private calciteOptionGroupChange;
  render(): VNode;
}
