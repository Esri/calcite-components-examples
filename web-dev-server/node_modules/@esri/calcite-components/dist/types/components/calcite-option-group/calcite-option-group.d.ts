import { VNode } from "../../stencil-public-runtime";
export declare class CalciteOptionGroup {
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
