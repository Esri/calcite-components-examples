import { Component, Element, Event, Host, Prop, State, h } from "@stencil/core";
import { debounce, forIn } from "lodash-es";
import { CSS, ICONS, TEXT } from "./resources";
import { CSS_UTILITY } from "../../utils/resources";
import { getElementDir } from "../../utils/dom";
const filterDebounceInMs = 250;
export class CalciteFilter {
  constructor() {
    this.empty = true;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.filter = debounce((value) => {
      const regex = new RegExp(value, "ig");
      if (this.data.length === 0) {
        console.warn(`No data was passed to calcite-filter.
      The data property expects an array of objects`);
        this.calciteFilterChange.emit([]);
        return;
      }
      const find = (input, RE) => {
        let found = false;
        forIn(input, (val) => {
          if (typeof val === "function") {
            return;
          }
          if (Array.isArray(val) || (typeof val === "object" && val !== null)) {
            if (find(val, RE)) {
              found = true;
            }
          }
          else if (RE.test(val)) {
            found = true;
          }
        });
        return found;
      };
      const result = this.data.filter((item) => {
        return find(item, regex);
      });
      this.calciteFilterChange.emit(result);
    }, filterDebounceInMs);
    this.inputHandler = (event) => {
      const target = event.target;
      this.empty = target.value === "";
      this.filter(target.value);
    };
    this.clear = () => {
      this.textInput.value = "";
      this.empty = true;
      this.calciteFilterChange.emit(this.data);
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const rtl = getElementDir(this.el) === "rtl";
    return (h(Host, null,
      h("label", { class: rtl ? CSS_UTILITY.rtl : null },
        h("input", { "aria-label": this.intlLabel || TEXT.filterLabel, onInput: this.inputHandler, placeholder: this.placeholder, ref: (el) => {
            this.textInput = el;
          }, type: "text", value: "" }),
        h("div", { class: CSS.searchIcon },
          h("calcite-icon", { icon: ICONS.search, scale: "s" }))),
      !this.empty ? (h("button", { "aria-label": this.intlClear || TEXT.clear, class: CSS.clearButton, onClick: this.clear },
        h("calcite-icon", { icon: ICONS.close }))) : null));
  }
  static get is() { return "calcite-filter"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-filter.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-filter.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "object[]",
        "resolved": "object[]",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The input data. The filter uses this as the starting point, and returns items\nthat contain the string entered in the input, using a partial match and recursive search."
      }
    },
    "intlClear": {
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
        "text": "A text label that will appear on the clear button."
      },
      "attribute": "intl-clear",
      "reflect": false
    },
    "intlLabel": {
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
        "text": "A text label that will appear next to the input field."
      },
      "attribute": "intl-label",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Placeholder text for the input element's placeholder attribute"
      },
      "attribute": "placeholder",
      "reflect": false
    }
  }; }
  static get states() { return {
    "empty": {}
  }; }
  static get events() { return [{
      "method": "calciteFilterChange",
      "name": "calciteFilterChange",
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
}
