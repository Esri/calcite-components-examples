import { VNode } from "../../stencil-public-runtime";
import { ComboboxChildElement } from "../combobox/interfaces";
import { Scale } from "../interfaces";
/**
 * @slot - A slot for adding `calcite-combobox-item`s.
 */
export declare class ComboboxItemGroup {
  /** Parent and grandparent combobox items, this is set internally for use from combobox */
  ancestors: ComboboxChildElement[];
  /** Title of the group */
  label: string;
  connectedCallback(): void;
  el: HTMLCalciteComboboxItemGroupElement;
  guid: string;
  scale: Scale;
  render(): VNode;
}
