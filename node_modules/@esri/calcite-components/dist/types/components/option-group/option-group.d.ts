import { VNode } from "../../stencil-public-runtime";
/**
 * @slot - A slot for adding `calcite-option`s.
 */
export declare class OptionGroup {
  /**
   * When `true`, interaction is prevented and the component is displayed with lower opacity.
   */
  disabled: boolean;
  /**
   * Accessible name for the component.
   */
  label: string;
  protected handlePropChange(): void;
  /**
   * @internal
   */
  private calciteInternalOptionGroupChange;
  render(): VNode;
}
