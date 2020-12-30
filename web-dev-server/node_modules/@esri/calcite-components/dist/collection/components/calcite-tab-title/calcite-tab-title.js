import { Component, Prop, Event, Listen, Element, Method, h, Host, State, Build } from "@stencil/core";
import { guid } from "../../utils/guid";
import { getElementDir } from "../../utils/dom";
import { getKey } from "../../utils/key";
export class CalciteTabTitle {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /** Show this tab title as selected */
    this.active = false;
    /** Disable this tab title  */
    this.disabled = false;
    /** determine if there is slotted text for styling purposes */
    this.hasText = false;
    /**
     * @internal
     */
    this.guid = `calcite-tab-title-${guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.setupTextContentObserver();
    this.parentTabNavEl = this.el.closest("calcite-tab-nav");
  }
  disconnectedCallback() {
    var _a;
    this.observer.disconnect();
    // Dispatching to body in order to be listened by other elements that are still connected to the DOM.
    (_a = document.body) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent("calciteTabTitleUnregister", {
      detail: this.el
    }));
  }
  componentWillLoad() {
    if (Build.isBrowser) {
      this.updateHasText();
    }
    if (this.tab && this.active) {
      this.emitActiveTab();
    }
  }
  componentWillRender() {
    var _a, _b;
    this.layout = (_a = this.el.closest("calcite-tabs")) === null || _a === void 0 ? void 0 : _a.layout;
    this.position = (_b = this.el.closest("calcite-tabs")) === null || _b === void 0 ? void 0 : _b.position;
  }
  render() {
    const dir = getElementDir(this.el);
    const id = this.el.id || this.guid;
    const Tag = this.disabled ? "span" : "a";
    const iconStartEl = (h("calcite-icon", { class: "calcite-tab-title--icon icon-start", dir: dir, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: "s" }));
    const iconEndEl = (h("calcite-icon", { class: "calcite-tab-title--icon icon-end", dir: dir, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: "s" }));
    return (h(Host, { "aria-controls": this.controls, "aria-expanded": this.active.toString(), dir: dir, hasText: this.hasText, id: id, role: "tab", tabindex: this.disabled ? "-1" : "0" },
      h(Tag, null,
        this.iconStart ? iconStartEl : null,
        h("slot", null),
        this.iconEnd ? iconEndEl : null)));
  }
  async componentDidLoad() {
    this.calciteTabTitleRegister.emit(await this.getTabIdentifier());
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  tabChangeHandler(event) {
    if (this.parentTabNavEl === event.target) {
      if (this.tab) {
        this.active = this.tab === event.detail.tab;
      }
      else {
        this.getTabIndex().then((index) => {
          this.active = index === event.detail.tab;
        });
      }
    }
  }
  onClick() {
    this.emitActiveTab();
  }
  keyDownHandler(e) {
    switch (getKey(e.key)) {
      case " ":
      case "Enter":
        this.emitActiveTab();
        e.preventDefault();
        break;
      case "ArrowRight":
        if (getElementDir(this.el) === "ltr") {
          this.calciteTabsFocusNext.emit();
        }
        else {
          this.calciteTabsFocusPrevious.emit();
        }
        break;
      case "ArrowLeft":
        if (getElementDir(this.el) === "ltr") {
          this.calciteTabsFocusPrevious.emit();
        }
        else {
          this.calciteTabsFocusNext.emit();
        }
        break;
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Return the index of this title within the nav
   */
  async getTabIndex() {
    return Array.prototype.indexOf.call(this.el.parentElement.querySelectorAll("calcite-tab-title"), this.el);
  }
  /**
   * @internal
   */
  async getTabIdentifier() {
    return this.tab ? this.tab : this.getTabIndex();
  }
  /**
   * @internal
   */
  async updateAriaInfo(tabIds = [], titleIds = []) {
    this.controls = tabIds[titleIds.indexOf(this.el.id)] || null;
  }
  updateHasText() {
    this.hasText = this.el.textContent.trim().length > 0;
  }
  setupTextContentObserver() {
    if (Build.isBrowser) {
      this.observer = new MutationObserver(() => {
        this.updateHasText();
      });
      this.observer.observe(this.el, { childList: true, subtree: true });
    }
  }
  emitActiveTab() {
    if (!this.disabled) {
      this.calciteTabsActivate.emit({
        tab: this.tab
      });
    }
  }
  static get is() { return "calcite-tab-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-tab-title.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-tab-title.css"]
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
        "text": "Show this tab title as selected"
      },
      "attribute": "active",
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
        "text": "Disable this tab title"
      },
      "attribute": "disabled",
      "reflect": true,
      "defaultValue": "false"
    },
    "iconEnd": {
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
        "text": "optionally pass an icon to display at the end of a tab title - accepts calcite ui icon names"
      },
      "attribute": "icon-end",
      "reflect": true
    },
    "iconFlipRtl": {
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
        "text": "flip the icon(s) in rtl"
      },
      "attribute": "icon-flip-rtl",
      "reflect": true
    },
    "iconStart": {
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
        "text": "optionally pass an icon to display at the start of a tab title - accepts calcite ui icon names"
      },
      "attribute": "icon-start",
      "reflect": true
    },
    "layout": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "\"center\" | \"inline\"",
        "resolved": "\"center\" | \"inline\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "Parent tabs component layout value",
            "name": "internal"
          }],
        "text": ""
      },
      "attribute": "layout",
      "reflect": true
    },
    "position": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "\"above\" | \"below\"",
        "resolved": "\"above\" | \"below\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": "Parent tabs component position value",
            "name": "internal"
          }],
        "text": ""
      },
      "attribute": "position",
      "reflect": true
    },
    "tab": {
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
        "text": "Optionally include a unique name for the tab title,\nbe sure to also set this name on the associated tab."
      },
      "attribute": "tab",
      "reflect": true
    }
  }; }
  static get states() { return {
    "controls": {},
    "hasText": {}
  }; }
  static get events() { return [{
      "method": "calciteTabsActivate",
      "name": "calciteTabsActivate",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Fires when a specific tab is activated. `event.details`: [TabChangeEventDetail](../../interfaces/TabChange.ts)"
      },
      "complexType": {
        "original": "TabChangeEventDetail",
        "resolved": "TabChangeEventDetail",
        "references": {
          "TabChangeEventDetail": {
            "location": "import",
            "path": "../../interfaces/TabChange"
          }
        }
      }
    }, {
      "method": "calciteTabsFocusNext",
      "name": "calciteTabsFocusNext",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "text": undefined,
            "name": "internal"
          }],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteTabsFocusPrevious",
      "name": "calciteTabsFocusPrevious",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "text": undefined,
            "name": "internal"
          }],
        "text": ""
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }, {
      "method": "calciteTabTitleRegister",
      "name": "calciteTabTitleRegister",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [{
            "text": undefined,
            "name": "internal"
          }],
        "text": ""
      },
      "complexType": {
        "original": "TabID",
        "resolved": "number | string",
        "references": {
          "TabID": {
            "location": "import",
            "path": "../calcite-tabs/interfaces"
          }
        }
      }
    }]; }
  static get methods() { return {
    "getTabIndex": {
      "complexType": {
        "signature": "() => Promise<number>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<number>"
      },
      "docs": {
        "text": "Return the index of this title within the nav",
        "tags": []
      }
    },
    "getTabIdentifier": {
      "complexType": {
        "signature": "() => Promise<TabID>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "TabID": {
            "location": "import",
            "path": "../calcite-tabs/interfaces"
          }
        },
        "return": "Promise<TabID>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": undefined
          }]
      }
    },
    "updateAriaInfo": {
      "complexType": {
        "signature": "(tabIds?: string[], titleIds?: string[]) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }, {
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": [{
            "name": "internal",
            "text": undefined
          }]
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "calciteTabChange",
      "method": "tabChangeHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
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
    }]; }
}
