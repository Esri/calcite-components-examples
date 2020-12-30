import { Component, Element, Event, h, Host, Listen, Method, Prop, Watch } from "@stencil/core";
import { getElementDir, getElementProp, setRequestedIcon } from "../../utils/dom";
import { getKey } from "../../utils/key";
import { INPUT_TYPE_ICONS } from "./calcite-input.resources";
export class CalciteInput {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** specify the alignment of the value of the input */
    this.alignment = "start";
    /** should the input autofocus */
    this.autofocus = false;
    /** specify if the input is in loading state */
    this.loading = false;
    /** specify the placement of the number buttons */
    this.numberButtonType = "vertical";
    /** is the input required */
    this.required = false;
    /** specify the scale of the input, defaults to m */
    this.scale = "m";
    /** specify the status of the input field, determines message and icons */
    this.status = "idle";
    /** specify the input type */
    this.type = "text";
    /** input value */
    this.value = "";
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** keep track of the rendered child type */
    this.childElType = "input";
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.inputInputHandler = (e) => {
      this.value = e.target.value;
    };
    this.inputBlurHandler = () => {
      this.calciteInputBlur.emit({
        element: this.childEl,
        value: this.value
      });
    };
    this.inputFocusHandler = (e) => {
      if (e.target !== this.slottedActionEl)
        this.setFocus();
      this.calciteInputFocus.emit({
        element: this.childEl,
        value: this.value
      });
    };
    this.clearInputValue = () => {
      this.value = "";
    };
    this.updateNumberValue = (e) => {
      // todo, when dropping ie11 support, refactor to use stepup/stepdown
      // prevent blur and re-focus of input on mousedown
      e.preventDefault();
      if (this.childElType === "input" && this.type === "number") {
        const inputMax = this.maxString ? parseFloat(this.maxString) : null;
        const inputMin = this.minString ? parseFloat(this.minString) : null;
        const inputStep = this.stepString ? parseFloat(this.stepString) : 1;
        let inputVal = this.value && this.value !== "" ? parseFloat(this.value) : 0;
        switch (e.target.dataset.adjustment) {
          case "up":
            if ((!inputMax && inputMax !== 0) || inputVal < inputMax)
              this.childEl.value = (inputVal += inputStep).toString();
            break;
          case "down":
            if ((!inputMin && inputMin !== 0) || inputVal > inputMin)
              this.childEl.value = (inputVal -= inputStep).toString();
            break;
        }
        this.value = this.childEl.value.toString();
      }
    };
  }
  disabledWatcher() {
    if (this.disabled)
      this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    var _a;
    this.maxString = ((_a = this.max) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    var _a;
    this.minString = ((_a = this.min) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  stepWatcher() {
    var _a;
    this.maxString = ((_a = this.max) === null || _a === void 0 ? void 0 : _a.toString()) || null;
  }
  valueWatcher() {
    this.calciteInputInput.emit({
      element: this.childEl,
      value: this.value
    });
  }
  updateRequestedIcon() {
    this.requestedIcon = setRequestedIcon(INPUT_TYPE_ICONS, this.icon, this.type);
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
  componentWillLoad() {
    this.childElType = this.type === "textarea" ? "textarea" : "input";
    this.requestedIcon = setRequestedIcon(INPUT_TYPE_ICONS, this.icon, this.type);
  }
  componentDidLoad() {
    var _a, _b, _c;
    this.minString = (_a = this.min) === null || _a === void 0 ? void 0 : _a.toString();
    this.maxString = (_b = this.max) === null || _b === void 0 ? void 0 : _b.toString();
    this.stepString = (_c = this.step) === null || _c === void 0 ? void 0 : _c.toString();
    this.slottedActionEl = this.el.querySelector("[slot=input-action]");
    if (this.disabled)
      this.setDisabledAction();
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  get isClearable() {
    return !this.isTextarea && (this.clearable || this.type === "search") && this.value.length > 0;
  }
  render() {
    const dir = getElementDir(this.el);
    const attributes = this.getAttributes();
    const loader = (h("div", { class: "calcite-input-loading" },
      h("calcite-progress", { type: "indeterminate" })));
    const iconScale = this.scale === "s" || this.scale === "m" ? "s" : "m";
    const inputClearButton = (h("button", { class: "calcite-input-clear-button", disabled: this.loading, onClick: this.clearInputValue },
      h("calcite-icon", { icon: "x", scale: iconScale, theme: this.theme })));
    const iconEl = (h("calcite-icon", { class: "calcite-input-icon", dir: dir, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: iconScale, theme: this.theme }));
    const numberButtonClassModifier = this.numberButtonType === "horizontal" ? "number-button-item-horizontal" : null;
    const numberButtonsHorizontalUp = (h("div", { class: `calcite-input-number-button-item ${numberButtonClassModifier}`, "data-adjustment": "up", onMouseDown: this.updateNumberValue },
      h("calcite-icon", { icon: "chevron-up", scale: iconScale, theme: this.theme })));
    const numberButtonsHorizontalDown = (h("div", { class: `calcite-input-number-button-item ${numberButtonClassModifier}`, "data-adjustment": "down", onMouseDown: this.updateNumberValue },
      h("calcite-icon", { icon: "chevron-down", scale: iconScale, theme: this.theme })));
    const numberButtonsVertical = (h("div", { class: `calcite-input-number-button-wrapper` },
      numberButtonsHorizontalUp,
      numberButtonsHorizontalDown));
    const prefixText = h("div", { class: "calcite-input-prefix" }, this.prefixText);
    const suffixText = h("div", { class: "calcite-input-suffix" }, this.suffixText);
    const childEl = [
      h(this.childElType, Object.assign({}, attributes, { autofocus: this.autofocus ? true : null, disabled: this.disabled ? true : null, max: this.maxString, min: this.minString, onBlur: this.inputBlurHandler, onFocus: this.inputFocusHandler, onInput: this.inputInputHandler, placeholder: this.placeholder || "", ref: (el) => (this.childEl = el), required: this.required ? true : null, step: this.stepString, tabIndex: this.disabled ? -1 : null, type: this.type, value: this.value }), this.value),
      this.isTextarea ? (h("div", { class: "calcite-input-resize-icon-wrapper" },
        h("calcite-icon", { icon: "chevron-down", scale: "s" }))) : null
    ];
    return (h(Host, { dir: dir, onClick: this.inputFocusHandler },
      h("div", { class: "calcite-input-wrapper" },
        this.type === "number" && this.numberButtonType === "horizontal"
          ? numberButtonsHorizontalDown
          : null,
        this.prefixText ? prefixText : null,
        h("div", { class: "calcite-input-element-wrapper" },
          childEl,
          this.isClearable ? inputClearButton : null,
          this.requestedIcon ? iconEl : null,
          this.loading ? loader : null),
        h("div", { class: "calcite-input-action-wrapper" },
          h("slot", { name: "input-action" })),
        this.type === "number" && this.numberButtonType === "vertical"
          ? numberButtonsVertical
          : null,
        this.suffixText ? suffixText : null,
        this.type === "number" && this.numberButtonType === "horizontal"
          ? numberButtonsHorizontalUp
          : null)));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyDownHandler(e) {
    if (this.isClearable && getKey(e.key) === "Escape") {
      this.clearInputValue();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** focus the rendered child element */
  async setFocus() {
    var _a;
    (_a = this.childEl) === null || _a === void 0 ? void 0 : _a.focus();
  }
  setDisabledAction() {
    if (this.slottedActionEl)
      this.slottedActionEl.setAttribute("disabled", "");
  }
  getAttributes() {
    // spread attributes from the component to rendered child, filtering out props
    const props = [
      "alignment",
      "dir",
      "clearable",
      "min",
      "max",
      "step",
      "value",
      "icon",
      "loading",
      "prefix-text",
      "scale",
      "status",
      "suffix-text",
      "theme",
      "number-button-type"
    ];
    return Array.from(this.el.attributes)
      .filter((a) => a && !props.includes(a.name))
      .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
  }
  static get is() { return "calcite-input"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-input.css"]
  }; }
  static get properties() { return {
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"start\" | \"end\"",
        "resolved": "\"end\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the alignment of the value of the input"
      },
      "attribute": "alignment",
      "reflect": true,
      "defaultValue": "\"start\""
    },
    "autofocus": {
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
        "text": "should the input autofocus"
      },
      "attribute": "autofocus",
      "reflect": false,
      "defaultValue": "false"
    },
    "clearable": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "optionally display a clear button that displays when field has a value\nshows by default for search, time, date\nwill not display for type=\"textarea\""
      },
      "attribute": "clearable",
      "reflect": true
    },
    "disabled": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "is the input disabled"
      },
      "attribute": "disabled",
      "reflect": true
    },
    "icon": {
      "type": "any",
      "mutable": false,
      "complexType": {
        "original": "string | boolean",
        "resolved": "boolean | string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "when used as a boolean set to true, show a default recommended icon for certain\ninput types (tel, password, email, date, time, search). You can also pass a\ncalcite-ui-icon name to this prop to display a requested icon for any input type"
      },
      "attribute": "icon",
      "reflect": true
    },
    "iconFlipRtl": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "flip the icon in rtl"
      },
      "attribute": "icon-flip-rtl",
      "reflect": true
    },
    "loading": {
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
        "text": "specify if the input is in loading state"
      },
      "attribute": "loading",
      "reflect": true,
      "defaultValue": "false"
    },
    "max": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "input max"
      },
      "attribute": "max",
      "reflect": true
    },
    "min": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "input min"
      },
      "attribute": "min",
      "reflect": true
    },
    "numberButtonType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"vertical\" | \"horizontal\" | \"none\"",
        "resolved": "\"horizontal\" | \"none\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "specify the placement of the number buttons"
      },
      "attribute": "number-button-type",
      "reflect": true,
      "defaultValue": "\"vertical\""
    },
    "placeholder": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "explicitly whitelist placeholder attribute"
      },
      "attribute": "placeholder",
      "reflect": false
    },
    "prefixText": {
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
        "text": "optionally add prefix  *"
      },
      "attribute": "prefix-text",
      "reflect": false
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
        "text": "is the input required"
      },
      "attribute": "required",
      "reflect": false,
      "defaultValue": "false"
    },
    "scale": {
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
    "step": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "input step"
      },
      "attribute": "step",
      "reflect": true
    },
    "suffixText": {
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
        "text": "optionally add suffix  *"
      },
      "attribute": "suffix-text",
      "reflect": false
    },
    "theme": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CalciteTheme",
        "resolved": "\"dark\" | \"light\"",
        "references": {
          "CalciteTheme": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the alignment of dropdown, defaults to left"
      },
      "attribute": "theme",
      "reflect": true
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "| \"color\"\n    | \"date\"\n    | \"datetime-local\"\n    | \"email\"\n    | \"file\"\n    | \"image\"\n    | \"month\"\n    | \"number\"\n    | \"password\"\n    | \"search\"\n    | \"tel\"\n    | \"text\"\n    | \"textarea\"\n    | \"time\"\n    | \"url\"\n    | \"week\"",
        "resolved": "\"color\" | \"date\" | \"datetime-local\" | \"email\" | \"file\" | \"image\" | \"month\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"textarea\" | \"time\" | \"url\" | \"week\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the input type"
      },
      "attribute": "type",
      "reflect": true,
      "defaultValue": "\"text\""
    },
    "value": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "input value"
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "\"\""
    }
  }; }
  static get events() { return [{
      "method": "calciteInputFocus",
      "name": "calciteInputFocus",
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
    }, {
      "method": "calciteInputBlur",
      "name": "calciteInputBlur",
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
    }, {
      "method": "calciteInputInput",
      "name": "calciteInputInput",
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
  static get methods() { return {
    "setFocus": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "focus the rendered child element",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "disabled",
      "methodName": "disabledWatcher"
    }, {
      "propName": "max",
      "methodName": "maxWatcher"
    }, {
      "propName": "min",
      "methodName": "minWatcher"
    }, {
      "propName": "step",
      "methodName": "stepWatcher"
    }, {
      "propName": "value",
      "methodName": "valueWatcher"
    }, {
      "propName": "icon",
      "methodName": "updateRequestedIcon"
    }, {
      "propName": "type",
      "methodName": "updateRequestedIcon"
    }]; }
  static get listeners() { return [{
      "name": "keydown",
      "method": "keyDownHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
