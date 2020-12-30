import { Component, Element, Host, Prop, h } from "@stencil/core";
import { CSS, SLOTS } from "./resources";
import { getElementDir, getSlotted } from "../../utils/dom";
import { CSS_UTILITY } from "../../utils/resources";
/**
 * @slot action-bar - A slot for adding a `calcite-action-bar` to the panel.
 * @slot - A slot for adding content to the shell panel.
 */
export class CalciteShellCenterRow {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * This property makes the content area appear like a "floating" panel.
     */
    this.detached = false;
    /**
     * Specifies the maxiumum height of the row.
     */
    this.heightScale = "s";
    /**
     * Arranges the component depending on the elements 'dir' property.
     */
    this.position = "end";
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el } = this;
    const rtl = getElementDir(el) === "rtl";
    const contentNode = (h("div", { class: { [CSS.content]: true, [CSS_UTILITY.rtl]: rtl } },
      h("slot", null)));
    const actionBar = getSlotted(el, SLOTS.actionBar);
    const actionBarNode = actionBar ? (h("div", { class: { [CSS.actionBarContainer]: true, [CSS_UTILITY.rtl]: rtl } },
      h("slot", { name: SLOTS.actionBar }))) : null;
    const children = [actionBarNode, contentNode];
    if ((actionBar === null || actionBar === void 0 ? void 0 : actionBar.position) === "end") {
      children.reverse();
    }
    return h(Host, null, children);
  }
  static get is() { return "calcite-shell-center-row"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-shell-center-row.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-shell-center-row.css"]
  }; }
  static get properties() { return {
    "detached": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "This property makes the content area appear like a \"floating\" panel."
      },
      "attribute": "detached",
      "reflect": true,
      "defaultValue": "false"
    },
    "heightScale": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CalciteScale",
        "resolved": "\"l\" | \"m\" | \"s\"",
        "references": {
          "CalciteScale": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Specifies the maxiumum height of the row."
      },
      "attribute": "height-scale",
      "reflect": true,
      "defaultValue": "\"s\""
    },
    "position": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CalcitePosition",
        "resolved": "\"end\" | \"start\"",
        "references": {
          "CalcitePosition": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Arranges the component depending on the elements 'dir' property."
      },
      "attribute": "position",
      "reflect": true,
      "defaultValue": "\"end\""
    }
  }; }
  static get elementRef() { return "el"; }
}
