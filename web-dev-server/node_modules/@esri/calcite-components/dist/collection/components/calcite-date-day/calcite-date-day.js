import { Component, Element, Prop, Host, Event, Listen, h } from "@stencil/core";
import { getKey } from "../../utils/key";
import { getElementDir } from "../../utils/dom";
export class CalciteDateDay {
  constructor() {
    /** Date is outside of range and can't be selected */
    this.disabled = false;
    /** Date is in the current month. */
    this.currentMonth = false;
    /** Date is the current selected date of the picker */
    this.selected = false;
    /** Date is currently highlighted as part of the range */
    this.highlighted = false;
    /** Showing date range */
    this.range = false;
    /** Date is the start of date range */
    this.startOfRange = false;
    /** Date is the end of date range */
    this.endOfRange = false;
    this.rangeHover = false;
    /** Date is actively in focus for keyboard navigation */
    this.active = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick() {
    !this.disabled && this.calciteDaySelect.emit();
  }
  keyDownHandler(e) {
    const key = getKey(e.key);
    if (key === " " || key === "Enter") {
      !this.disabled && this.calciteDaySelect.emit();
    }
  }
  mouseoverHandler() {
    this.calciteDayHover.emit({
      disabled: this.disabled
    });
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const formattedDay = String(this.day)
      .split("")
      .map((i) => this.localeData.numerals[i])
      .join("");
    const dir = getElementDir(this.el);
    return (h(Host, { dir: dir, role: "gridcell", tabindex: this.active ? 0 : -1 },
      h("div", { class: "day-v-wrapper" },
        h("div", { class: "day-wrapper" },
          h("span", { class: "day" },
            h("span", { class: "text" }, formattedDay))))));
  }
  static get is() { return "calcite-date-day"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-date-day.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-date-day.css"]
  }; }
  static get properties() { return {
    "day": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Day of the month to be shown."
      },
      "attribute": "day",
      "reflect": false
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Date is outside of range and can't be selected"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "currentMonth": {
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
        "text": "Date is in the current month."
      },
      "attribute": "current-month",
      "reflect": true,
      "defaultValue": "false"
    },
    "selected": {
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
        "text": "Date is the current selected date of the picker"
      },
      "attribute": "selected",
      "reflect": true,
      "defaultValue": "false"
    },
    "highlighted": {
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
        "text": "Date is currently highlighted as part of the range"
      },
      "attribute": "highlighted",
      "reflect": true,
      "defaultValue": "false"
    },
    "range": {
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
        "text": "Showing date range"
      },
      "attribute": "range",
      "reflect": true,
      "defaultValue": "false"
    },
    "startOfRange": {
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
        "text": "Date is the start of date range"
      },
      "attribute": "start-of-range",
      "reflect": true,
      "defaultValue": "false"
    },
    "endOfRange": {
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
        "text": "Date is the end of date range"
      },
      "attribute": "end-of-range",
      "reflect": true,
      "defaultValue": "false"
    },
    "rangeHover": {
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
      "attribute": "range-hover",
      "reflect": true,
      "defaultValue": "false"
    },
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
        "text": "Date is actively in focus for keyboard navigation"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "localeData": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "DateLocaleData",
        "resolved": "DateLocaleData",
        "references": {
          "DateLocaleData": {
            "location": "import",
            "path": "../calcite-date/utils"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "CLDR data for current locale"
      }
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
        "text": "specify the scale of the date picker"
      },
      "attribute": "scale",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "calciteDaySelect",
      "name": "calciteDaySelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when user selects day"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteDayHover",
      "name": "calciteDayHover",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when user hovers over a day"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "click",
      "method": "onClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "keydown",
      "method": "keyDownHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "mouseover",
      "method": "mouseoverHandler",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
