import { Component, Element, Host, h, Prop } from "@stencil/core";
import { getElementDir, getElementProp } from "../../utils/dom";
export class CalciteInputMessage {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    this.active = false;
    /** specify the scale of the input, defaults to m */
    this.scale = "m";
    /** specify the status of the input field, determines message and icons */
    this.status = "idle";
    /** specify the appearance of any slotted message - default (displayed under input), or floating (positioned absolutely under input) */
    this.type = "default";
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    // icons for status and validation
    this.iconDefaults = {
      valid: "check-circle",
      invalid: "exclamation-mark-triangle",
      idle: "information"
    };
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.status = getElementProp(this.el, "status", this.status);
    this.scale = getElementProp(this.el, "scale", this.scale);
  }
  render() {
    const dir = getElementDir(this.el);
    return (h(Host, { dir: dir, theme: this.theme },
      this.icon ? this.renderIcon(this.iconDefaults[this.status]) : null,
      h("slot", null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  renderIcon(iconName) {
    return h("calcite-icon", { class: "calcite-input-message-icon", icon: iconName, scale: "s" });
  }
  static get is() { return "calcite-input-message"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-input-message.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-input-message.css"]
  }; }
  static get properties() { return {
    "active": {
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
        "text": ""
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "icon": {
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
        "text": "optionally display an icon based on status"
      },
      "attribute": "icon",
      "reflect": true
    },
    "scale": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"s\" | \"m\" | \"l\"",
        "resolved": "\"l\" | \"m\" | \"s\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the scale of the input, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "status": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"invalid\" | \"valid\" | \"idle\"",
        "resolved": "\"idle\" | \"invalid\" | \"valid\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the status of the input field, determines message and icons"
      },
      "attribute": "status",
      "reflect": true,
      "defaultValue": "\"idle\""
    },
    "theme": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"light\" | \"dark\"",
        "resolved": "\"dark\" | \"light\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the theme, defaults to light"
      },
      "attribute": "theme",
      "reflect": true
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"default\" | \"floating\"",
        "resolved": "\"default\" | \"floating\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the appearance of any slotted message - default (displayed under input), or floating (positioned absolutely under input)"
      },
      "attribute": "type",
      "reflect": true,
      "defaultValue": "\"default\""
    }
  }; }
  static get elementRef() { return "el"; }
}
