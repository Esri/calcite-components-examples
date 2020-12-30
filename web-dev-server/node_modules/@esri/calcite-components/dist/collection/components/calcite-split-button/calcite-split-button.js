import { Component, Element, Event, h, Host, Prop } from "@stencil/core";
import { getElementDir } from "../../utils/dom";
export class CalciteSplitButton {
  constructor() {
    /** specify the appearance style of the button, defaults to solid. */
    this.appearance = "solid";
    /** specify the color of the control, defaults to blue */
    this.color = "blue";
    /** specify the icon used for the dropdown menu, defaults to chevron */
    this.dropdownIconType = "chevron";
    /** optionally add a calcite-loader component to the control,
     disabling interaction. with the primary button */
    this.loading = false;
    /** specify the scale of the control, defaults to m */
    this.scale = "m";
    this.calciteSplitButtonPrimaryClickHandler = (e) => this.calciteSplitButtonPrimaryClick.emit(e);
    this.calciteSplitButtonSecondaryClickHandler = (e) => this.calciteSplitButtonSecondaryClick.emit(e);
  }
  render() {
    const dir = getElementDir(this.el);
    return (h(Host, { dir: dir },
      h("div", { class: "split-button__container" },
        h("calcite-button", { appearance: this.appearance, "aria-label": this.primaryLabel, color: this.color, dir: dir, disabled: this.disabled, "icon-end": this.primaryIconEnd ? this.primaryIconEnd : null, "icon-start": this.primaryIconStart ? this.primaryIconStart : null, iconFlipRtl: this.primaryIconFlipRtl ? this.primaryIconFlipRtl : null, loading: this.loading, onClick: this.calciteSplitButtonPrimaryClickHandler, scale: this.scale, splitChild: "primary", theme: this.theme }, this.primaryText),
        h("div", { class: "split-button__divider-container" },
          h("div", { class: "split-button__divider" })),
        h("calcite-dropdown", { alignment: "end", dir: dir, onClick: this.calciteSplitButtonSecondaryClickHandler, scale: this.scale, theme: this.theme, width: this.scale },
          h("calcite-button", { appearance: this.appearance, "aria-label": this.dropdownLabel, color: this.color, dir: dir, disabled: this.disabled, "icon-start": this.dropdownIcon, scale: this.scale, slot: "dropdown-trigger", splitChild: "secondary", theme: this.theme }),
          h("slot", null)))));
  }
  get dropdownIcon() {
    return this.dropdownIconType === "chevron"
      ? "chevronDown"
      : this.dropdownIconType === "caret"
        ? "caretDown"
        : this.dropdownIconType === "ellipsis"
          ? "ellipsis"
          : "handle-vertical";
  }
  static get is() { return "calcite-split-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-split-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-split-button.css"]
  }; }
  static get properties() { return {
    "appearance": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"solid\" | \"outline\" | \"clear\" | \"transparent\"",
        "resolved": "\"clear\" | \"outline\" | \"solid\" | \"transparent\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the appearance style of the button, defaults to solid."
      },
      "attribute": "appearance",
      "reflect": true,
      "defaultValue": "\"solid\""
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"blue\" | \"dark\" | \"light\" | \"red\"",
        "resolved": "\"blue\" | \"dark\" | \"light\" | \"red\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the color of the control, defaults to blue"
      },
      "attribute": "color",
      "reflect": true,
      "defaultValue": "\"blue\""
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
        "text": "is the control disabled"
      },
      "attribute": "disabled",
      "reflect": true
    },
    "dropdownIconType": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"chevron\" | \"caret\" | \"ellipsis\" | \"overflow\"",
        "resolved": "\"caret\" | \"chevron\" | \"ellipsis\" | \"overflow\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the icon used for the dropdown menu, defaults to chevron"
      },
      "attribute": "dropdown-icon-type",
      "reflect": true,
      "defaultValue": "\"chevron\""
    },
    "dropdownLabel": {
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
        "text": "aria label for overflow button"
      },
      "attribute": "dropdown-label",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "optionally add a calcite-loader component to the control,\ndisabling interaction. with the primary button"
      },
      "attribute": "loading",
      "reflect": true,
      "defaultValue": "false"
    },
    "primaryIconEnd": {
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
        "text": "optionally pass an icon to display at the end of the primary button - accepts Calcite UI icon names"
      },
      "attribute": "primary-icon-end",
      "reflect": true
    },
    "primaryIconFlipRtl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"both\" | \"start\" | \"end\"",
        "resolved": "\"both\" | \"end\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "flip the primary icon(s) in rtl"
      },
      "attribute": "primary-icon-flip-rtl",
      "reflect": true
    },
    "primaryIconStart": {
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
        "text": "optionally pass an icon to display at the start of the primary button - accepts Calcite UI icon names"
      },
      "attribute": "primary-icon-start",
      "reflect": true
    },
    "primaryLabel": {
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
        "text": "optionally pass an aria-label for the primary button"
      },
      "attribute": "primary-label",
      "reflect": true
    },
    "primaryText": {
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
        "text": "text for primary action button"
      },
      "attribute": "primary-text",
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
        "text": "specify the scale of the control, defaults to m"
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
        "text": "select theme (light or dark), defaults to light"
      },
      "attribute": "theme",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "calciteSplitButtonPrimaryClick",
      "name": "calciteSplitButtonPrimaryClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "fired when the primary button is clicked"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteSplitButtonSecondaryClick",
      "name": "calciteSplitButtonSecondaryClick",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "fired when the secondary button is clicked"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
