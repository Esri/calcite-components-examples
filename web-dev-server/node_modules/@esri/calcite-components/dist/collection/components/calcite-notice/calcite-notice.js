import { Component, Element, Event, h, Host, Method, Prop, Watch } from "@stencil/core";
import { TEXT } from "./calcite-notice.resources";
import { StatusIcons } from "../../interfaces/StatusIcons";
import { getElementDir, setRequestedIcon } from "../../utils/dom";
/** Notices are intended to be used to present users with important-but-not-crucial contextual tips or copy. Because
 * notices are displayed inline, a common use case is displaying them on page-load to present users with short hints or contextual copy.
 * They are optionally dismissible - useful for keeping track of whether or not a user has dismissed the notice. You can also choose not
 * to display a notice on page load and set the "active" attribute as needed to contextually provide inline messaging to users.
 */
/**
 * @slot notice-title - Title of the notice (optional)
 * @slot notice-message - Main text of the notice
 * @slot notice-link - Optional action to take from the notice (undo, try again, link to page, etc.)
 */
export class CalciteNotice {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //---------------------------------------------------------------------------
    /** Is the notice currently active or not */
    this.active = false;
    /** Color for the notice (will apply to top border and icon) */
    this.color = "blue";
    /** Optionally show a button the user can click to dismiss the notice */
    this.dismissible = false;
    /** String for the close button. */
    this.intlClose = TEXT.close;
    /** specify the scale of the notice, defaults to m */
    this.scale = "m";
    /** specify the width of the notice, defaults to auto */
    this.width = "auto";
  }
  updateRequestedIcon() {
    this.requestedIcon = setRequestedIcon(StatusIcons, this.icon, this.color);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.requestedIcon = setRequestedIcon(StatusIcons, this.icon, this.color);
  }
  componentDidLoad() {
    this.noticeLinkEl = this.el.querySelectorAll("calcite-link")[0];
  }
  render() {
    const dir = getElementDir(this.el);
    const closeButton = (h("button", { "aria-label": this.intlClose, class: "notice-close", onClick: () => this.close(), ref: () => this.closeButton },
      h("calcite-icon", { icon: "x", scale: "m" })));
    return (h(Host, { active: this.active, dir: dir },
      this.requestedIcon ? (h("div", { class: "notice-icon" },
        h("calcite-icon", { icon: this.requestedIcon, scale: "m" }))) : null,
      h("div", { class: "notice-content" },
        h("slot", { name: "notice-title" }),
        h("slot", { name: "notice-message" }),
        h("slot", { name: "notice-link" })),
      this.dismissible ? closeButton : null));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** close the notice emit the `calciteNoticeClose` event - <calcite-notice> listens for this */
  async close() {
    this.active = false;
    this.calciteNoticeClose.emit();
  }
  /** open the notice and emit the `calciteNoticeOpen` event - <calcite-notice> listens for this  */
  async open() {
    this.active = true;
    this.calciteNoticeOpen.emit();
  }
  /** focus the close button, if present and requested */
  async setFocus() {
    if (!this.closeButton && !this.noticeLinkEl) {
      return;
    }
    if (this.noticeLinkEl)
      this.noticeLinkEl.setFocus();
    else if (this.closeButton) {
      this.closeButton.focus();
    }
  }
  static get is() { return "calcite-notice"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-notice.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-notice.css"]
  }; }
  static get properties() { return {
    "active": {
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
        "text": "Is the notice currently active or not"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CalciteStatusColor",
        "resolved": "\"blue\" | \"green\" | \"red\" | \"yellow\"",
        "references": {
          "CalciteStatusColor": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Color for the notice (will apply to top border and icon)"
      },
      "attribute": "color",
      "reflect": true,
      "defaultValue": "\"blue\""
    },
    "dismissible": {
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
        "text": "Optionally show a button the user can click to dismiss the notice"
      },
      "attribute": "dismissible",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "when used as a boolean set to true, show a default recommended icon. You can\nalso pass a calcite-ui-icon name to this prop to display a requested icon"
      },
      "attribute": "icon",
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "String for the close button."
      },
      "attribute": "intl-close",
      "reflect": false,
      "defaultValue": "TEXT.close"
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
        "text": "specify the scale of the notice, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
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
        "text": "Select theme (light or dark)"
      },
      "attribute": "theme",
      "reflect": true
    },
    "width": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CalciteWidth",
        "resolved": "\"auto\" | \"full\" | \"half\"",
        "references": {
          "CalciteWidth": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the width of the notice, defaults to auto"
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "\"auto\""
    }
  }; }
  static get events() { return [{
      "method": "calciteNoticeClose",
      "name": "calciteNoticeClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when an notice is closed"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteNoticeOpen",
      "name": "calciteNoticeOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fired when an Notice is opened"
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "close": {
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
        "text": "close the notice emit the `calciteNoticeClose` event - <calcite-notice> listens for this",
        "tags": []
      }
    },
    "open": {
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
        "text": "open the notice and emit the `calciteNoticeOpen` event - <calcite-notice> listens for this",
        "tags": []
      }
    },
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
        "text": "focus the close button, if present and requested",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "icon",
      "methodName": "updateRequestedIcon"
    }, {
      "propName": "color",
      "methodName": "updateRequestedIcon"
    }]; }
}
