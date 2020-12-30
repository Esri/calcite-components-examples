import { Component, Element, Event, h, Host, Listen, Method, Prop, State } from "@stencil/core";
import { getElementDir, hasLabel } from "../../utils/dom";
import { guid } from "../../utils/guid";
import { TEXT } from "./calcite-rating-resources";
export class CalciteRating {
  constructor() {
    /** specify the scale of the component, defaults to m */
    this.scale = "m";
    /** the value of the rating component */
    this.value = 0;
    /** is the rating component in a selectable mode */
    this.readOnly = false;
    /** is the rating component in a selectable mode */
    this.disabled = false;
    /** display rating value */
    this.displayValue = false;
    /** Localized string for "Rating" (used for aria label) */
    this.intlRating = TEXT.rating;
    /** Localized string for labelling each star, `${num}` in the string will be replaced by the number */
    this.intlStars = TEXT.stars;
    this.guid = `calcite-ratings-${guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleLabelFocus(e) {
    if (hasLabel(e.detail.labelEl, this.el) &&
      e.detail.interactedEl !== this.el &&
      !this.el.contains(e.detail.interactedEl)) {
      this.setFocus();
    }
  }
  blurHandler() {
    this.hasFocus = false;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderStars() {
    return [1, 2, 3, 4, 5].map((i) => {
      const selected = this.value >= i;
      const average = this.average && !this.value && i <= this.average;
      const hovered = i <= this.hoverValue;
      const fraction = this.average && this.average + 1 - i;
      const partial = !this.value && !hovered && fraction > 0 && fraction < 1;
      const focused = this.hasFocus && this.focusValue === i;
      return (h("span", { class: { wrapper: true } },
        h("label", { class: { star: true, focused, selected, average, hovered, partial }, htmlFor: `${this.guid}-${i}`, onMouseOver: () => {
            this.hoverValue = i;
          } },
          h("calcite-icon", { "aria-hidden": "true", class: "icon", icon: selected || average || this.readOnly ? "star-f" : "star", scale: this.scale }),
          partial && (h("div", { class: "fraction", style: { width: `${fraction * 100}%` } },
            h("calcite-icon", { icon: "star-f", scale: this.scale, theme: this.theme }))),
          h("span", { class: "visually-hidden" }, this.intlStars.replace("${num}", `${i}`))),
        h("input", { checked: i === this.value, class: "visually-hidden", disabled: this.disabled || this.readOnly, id: `${this.guid}-${i}`, name: this.guid, onChange: () => this.updateValue(i), onFocus: () => {
            this.hasFocus = true;
            this.focusValue = i;
          }, type: "radio", value: i })));
    });
  }
  render() {
    var _a, _b;
    const dir = getElementDir(this.el);
    return (h(Host, { dir: dir },
      h("fieldset", { class: "fieldset", onBlur: () => (this.hoverValue = null), onMouseLeave: () => (this.hoverValue = null), onTouchEnd: () => (this.hoverValue = null) },
        h("legend", { class: "visually-hidden" }, this.intlRating),
        this.renderStars()),
      this.count || this.average ? (h("calcite-chip", { dir: dir, scale: this.scale, theme: this.theme, value: (_a = this.count) === null || _a === void 0 ? void 0 : _a.toString() },
        this.average && h("span", { class: "number--average" }, this.average.toString()),
        this.count && h("span", { class: "number--count" },
          "(", (_b = this.count) === null || _b === void 0 ? void 0 :
          _b.toString(),
          ")"))) : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  updateValue(value) {
    this.value = value;
    this.calciteRatingChange.emit({ value });
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async setFocus() {
    this.el.querySelector("input").focus();
    this.hasFocus = true;
  }
  static get is() { return "calcite-rating"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-rating.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-rating.css"]
  }; }
  static get properties() { return {
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
        "text": "specify the theme of scrim, defaults to light"
      },
      "attribute": "theme",
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
        "text": "specify the scale of the component, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "value": {
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
        "text": "the value of the rating component"
      },
      "attribute": "value",
      "reflect": true,
      "defaultValue": "0"
    },
    "readOnly": {
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
        "text": "is the rating component in a selectable mode"
      },
      "attribute": "read-only",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "is the rating component in a selectable mode"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "displayValue": {
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
        "text": "display rating value"
      },
      "attribute": "display-value",
      "reflect": true,
      "defaultValue": "false"
    },
    "count": {
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
        "text": "optionally pass a number of previous ratings to display"
      },
      "attribute": "count",
      "reflect": true
    },
    "average": {
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
        "text": "optionally pass a cumulative average rating to display"
      },
      "attribute": "average",
      "reflect": true
    },
    "intlRating": {
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
        "text": "Localized string for \"Rating\" (used for aria label)"
      },
      "attribute": "intl-rating",
      "reflect": false,
      "defaultValue": "TEXT.rating"
    },
    "intlStars": {
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
        "text": "Localized string for labelling each star, `${num}` in the string will be replaced by the number"
      },
      "attribute": "intl-stars",
      "reflect": false,
      "defaultValue": "TEXT.stars"
    }
  }; }
  static get states() { return {
    "hoverValue": {},
    "focusValue": {},
    "hasFocus": {}
  }; }
  static get events() { return [{
      "method": "calciteRatingChange",
      "name": "calciteRatingChange",
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
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "calciteLabelFocus",
      "method": "handleLabelFocus",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "blur",
      "method": "blurHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
