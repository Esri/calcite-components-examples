import { Component, Host, h } from "@stencil/core";
/**
 * @slot - A slot for adding a group of `calcite-action`s.
 */
export class CalciteActionGroup {
  // --------------------------------------------------------------------------
  //
  //  Component Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "calcite-action-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-action-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-action-group.css"]
  }; }
}
