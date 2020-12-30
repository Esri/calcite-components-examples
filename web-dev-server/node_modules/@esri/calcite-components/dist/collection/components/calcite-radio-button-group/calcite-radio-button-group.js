import { Component, Host, h, Element, Prop, Watch, Event, Listen } from "@stencil/core";
export class CalciteRadioButtonGroup {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** The disabled state of the radio button group. */
    this.disabled = false;
    /** The radio button group's hidden status.  When a radio button group is hidden none of its options are focusable or checkable. */
    this.hidden = false;
    /** The layout direction of the radio buttons in a group. */
    this.layout = "horizontal";
    /** Requires that a value is selected for the radio button group before the parent form will submit. */
    this.required = false;
    /** The scale (size) of the radio button group. */
    this.scale = "m";
    /** The color theme of the radio button group. */
    this.theme = "light";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.passPropsToRadioButtons = () => {
      const radioButtons = this.el.querySelectorAll("calcite-radio-button");
      if (radioButtons.length > 0) {
        radioButtons.forEach((radioButton) => {
          radioButton.disabled = this.disabled || radioButton.disabled;
          radioButton.hidden = this.hidden;
          radioButton.name = this.name;
          radioButton.required = this.required;
          radioButton.scale = this.scale;
          radioButton.theme = this.theme;
        });
      }
    };
  }
  onDisabledChange() {
    this.passPropsToRadioButtons();
  }
  onHiddenChange() {
    this.passPropsToRadioButtons();
  }
  onLayoutChange() {
    this.passPropsToRadioButtons();
  }
  onScaleChange() {
    this.passPropsToRadioButtons();
  }
  onThemeChange() {
    this.passPropsToRadioButtons();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.passPropsToRadioButtons();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  radioButtonChangeHandler(event) {
    this.calciteRadioButtonGroupChange.emit(event.target.value);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return (h(Host, { role: "radiogroup" },
      h("slot", null)));
  }
  static get is() { return "calcite-radio-button-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-radio-button-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-radio-button-group.css"]
  }; }
  static get properties() { return {
    "disabled": {
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
        "text": "The disabled state of the radio button group."
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "hidden": {
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
        "text": "The radio button group's hidden status.  When a radio button group is hidden none of its options are focusable or checkable."
      },
      "attribute": "hidden",
      "reflect": true,
      "defaultValue": "false"
    },
    "layout": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"horizontal\" | \"vertical\"",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The layout direction of the radio buttons in a group."
      },
      "attribute": "layout",
      "reflect": true,
      "defaultValue": "\"horizontal\""
    },
    "name": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": true,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The name of the radio button group. <code>name</code> must be unique to other radio button group instances."
      },
      "attribute": "name",
      "reflect": true
    },
    "required": {
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
        "text": "Requires that a value is selected for the radio button group before the parent form will submit."
      },
      "attribute": "required",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "The scale (size) of the radio button group."
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
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
        "text": "The color theme of the radio button group."
      },
      "attribute": "theme",
      "reflect": true,
      "defaultValue": "\"light\""
    }
  }; }
  static get events() { return [{
      "method": "calciteRadioButtonGroupChange",
      "name": "calciteRadioButtonGroupChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "disabled",
      "methodName": "onDisabledChange"
    }, {
      "propName": "hidden",
      "methodName": "onHiddenChange"
    }, {
      "propName": "layout",
      "methodName": "onLayoutChange"
    }, {
      "propName": "scale",
      "methodName": "onScaleChange"
    }, {
      "propName": "theme",
      "methodName": "onThemeChange"
    }]; }
  static get listeners() { return [{
      "name": "calciteRadioButtonChange",
      "method": "radioButtonChangeHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
