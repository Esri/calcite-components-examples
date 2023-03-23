import { VNode } from "../../stencil-public-runtime";
import { ComboboxChildElement } from "../combobox/interfaces";
import { Scale } from "../interfaces";
/**
 * @slot - A slot for adding `calcite-combobox-item`s.
 */
export declare class ComboboxItemGroup {
  /** Specifies the parent and grandparent `calcite-combobox-item`s, which are set on `calcite-combobox`. */
  ancestors: ComboboxChildElement[];
  /** Specifies the title of the component. */
  label: string;
  connectedCallback(): void;
  el: HTMLCalciteComboboxItemGroupElement;
  guid: string;
  scale: Scale;
  render(): VNode;
}
