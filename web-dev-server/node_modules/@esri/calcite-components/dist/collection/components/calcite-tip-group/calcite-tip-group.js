import { Component, Prop, h } from "@stencil/core";
export class CalciteTipGroup {
  render() {
    return h("slot", null);
  }
  static get is() { return "calcite-tip-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./calcite-tip-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-tip-group.css"]
  }; }
  static get properties() { return {
    "groupTitle": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The title used for all nested tips."
      },
      "attribute": "group-title",
      "reflect": false
    }
  }; }
}
