import { Component, Element, Event, Host, Prop, h } from "@stencil/core";
import { CSS, ICONS, SLOTS, TEXT } from "./resources";
import { getSlotted } from "../../utils/dom";
/**
 * @slot thumbnail - A slot for adding an HTML image element to the tip.
 */
export class CalciteTip {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * No longer displays the tip.
     */
    this.dismissed = false;
    /**
     * Indicates whether the tip can be dismissed.
     */
    this.nonDismissible = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.hideTip = () => {
      this.dismissed = true;
      this.calciteTipDismiss.emit();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeader() {
    const { heading } = this;
    return heading ? (h("header", { class: CSS.header },
      h("h3", { class: CSS.heading }, heading))) : null;
  }
  renderDismissButton() {
    const { nonDismissible, hideTip, intlClose } = this;
    const text = intlClose || TEXT.close;
    return !nonDismissible ? (h("calcite-action", { class: CSS.close, icon: ICONS.close, onClick: hideTip, scale: "l", text: text })) : null;
  }
  renderImageFrame() {
    const { el } = this;
    return getSlotted(el, SLOTS.thumbnail) ? (h("div", { class: CSS.imageFrame },
      h("slot", { name: SLOTS.thumbnail }))) : null;
  }
  renderInfoNode() {
    return (h("div", { class: CSS.info },
      h("slot", null)));
  }
  renderContent() {
    return (h("div", { class: CSS.content },
      this.renderImageFrame(),
      this.renderInfoNode()));
  }
  render() {
    return (h(Host, null,
      h("article", { class: CSS.container, hidden: this.dismissed },
        this.renderHeader(),
        this.renderContent()),
      this.renderDismissButton()));
  }
  static get is() { return "calcite-tip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./calcite-tip.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-tip.css"]
  }; }
  static get properties() { return {
    "dismissed": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "No longer displays the tip."
      },
      "attribute": "dismissed",
      "reflect": false,
      "defaultValue": "false"
    },
    "nonDismissible": {
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
        "text": "Indicates whether the tip can be dismissed."
      },
      "attribute": "non-dismissible",
      "reflect": true,
      "defaultValue": "false"
    },
    "heading": {
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
        "text": "The heading of the tip."
      },
      "attribute": "heading",
      "reflect": false
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "The selected state of the tip if it is being used inside a `calcite-tip-manager`."
      },
      "attribute": "selected",
      "reflect": true
    },
    "intlClose": {
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
        "text": "Alternate text for closing the tip."
      },
      "attribute": "intl-close",
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
        "text": "Used to set the component's color scheme."
      },
      "attribute": "theme",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "calciteTipDismiss",
      "name": "calciteTipDismiss",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the component has been dismissed."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get elementRef() { return "el"; }
}
