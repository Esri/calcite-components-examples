import { Component, Host, h, Prop } from "@stencil/core";
export class CalciteTileSelectGroup {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Tiles by default move horizontally, stacking with each row, vertical allows single-column layouts */
    this.layout = "horizontal";
  }
  render() {
    return (h(Host, null,
      h("slot", null)));
  }
  static get is() { return "calcite-tile-select-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-tile-select-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-tile-select-group.css"]
  }; }
  static get properties() { return {
    "layout": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"vertical\" | \"horizontal\"",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Tiles by default move horizontally, stacking with each row, vertical allows single-column layouts"
      },
      "attribute": "layout",
      "reflect": true,
      "defaultValue": "\"horizontal\""
    }
  }; }
}
