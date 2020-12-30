import { Component, Element, Event, h, Host, Listen, Method, Prop } from "@stencil/core";
import { getElementDir, getElementProp } from "../../utils/dom";
import { getKey } from "../../utils/key";
export class CalciteDropdownItem {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    this.active = false;
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Focuses the selected item. */
  async setFocus() {
    this.el.focus();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.selectionMode = getElementProp(this.el, "selection-mode", "single");
    this.parentDropdownGroupEl = this.el.closest("calcite-dropdown-group");
    if (this.selectionMode === "none")
      this.active = false;
  }
  componentWillLoad() {
    this.itemPosition = this.getItemPosition();
    this.calciteDropdownItemRegister.emit({
      position: this.itemPosition
    });
  }
  render() {
    const attributes = this.getAttributes();
    const dir = getElementDir(this.el);
    const scale = getElementProp(this.el, "scale", "m");
    const iconScale = scale === "l" ? "m" : "s";
    const iconStartEl = (h("calcite-icon", { class: "dropdown-item-icon-start", dir: dir, flipRtl: this.iconFlipRtl === "start" || this.iconFlipRtl === "both", icon: this.iconStart, scale: iconScale }));
    const contentNode = (h("span", { class: "dropdown-item-content" },
      h("slot", null)));
    const iconEndEl = (h("calcite-icon", { class: "dropdown-item-icon-end", dir: dir, flipRtl: this.iconFlipRtl === "end" || this.iconFlipRtl === "both", icon: this.iconEnd, scale: iconScale }));
    const slottedContent = this.iconStart && this.iconEnd
      ? [iconStartEl, contentNode, iconEndEl]
      : this.iconStart
        ? [iconStartEl, h("slot", null)]
        : this.iconEnd
          ? [contentNode, iconEndEl]
          : contentNode;
    const contentEl = !this.href ? (slottedContent) : (h("a", Object.assign({}, attributes, { class: "dropdown-link", ref: (el) => (this.childLink = el) }), slottedContent));
    const itemRole = this.href // https://www.levelaccess.com/how-not-to-misuse-aria-states-properties-and-roles/
      ? null
      : this.selectionMode === "single"
        ? "menuitemradio"
        : this.selectionMode === "multi"
          ? "menuitemcheckbox"
          : "menuitem";
    const itemAria = this.selectionMode !== "none" ? this.active.toString() : null;
    return (h(Host, { "aria-checked": itemAria, dir: dir, isLink: this.href, role: itemRole, scale: scale, "selection-mode": this.selectionMode, tabindex: "0" },
      this.selectionMode === "multi" ? (h("calcite-icon", { class: "dropdown-item-check-icon", icon: "check", scale: "s" })) : null,
      contentEl));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  onClick() {
    this.emitRequestedItem();
  }
  keyDownHandler(e) {
    switch (getKey(e.key)) {
      case " ":
        this.emitRequestedItem();
        if (this.href) {
          e.preventDefault();
          this.childLink.click();
        }
        break;
      case "Enter":
        this.emitRequestedItem();
        if (this.href)
          this.childLink.click();
        break;
      case "Escape":
        this.calciteDropdownCloseRequest.emit();
        break;
      case "Tab":
      case "ArrowUp":
      case "ArrowDown":
      case "Home":
      case "End":
        this.calciteDropdownItemKeyEvent.emit({ keyboardEvent: e });
        break;
    }
    e.preventDefault();
  }
  updateActiveItemOnChange(event) {
    const parentEmittedChange = event.composedPath().includes(this.parentDropdownGroupEl);
    if (parentEmittedChange) {
      this.requestedDropdownGroup = event.detail.requestedDropdownGroup;
      this.requestedDropdownItem = event.detail.requestedDropdownItem;
      this.determineActiveItem();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  determineActiveItem() {
    switch (this.selectionMode) {
      case "multi":
        if (this.el === this.requestedDropdownItem)
          this.active = !this.active;
        break;
      case "single":
        if (this.el === this.requestedDropdownItem)
          this.active = true;
        else if (this.requestedDropdownGroup === this.parentDropdownGroupEl)
          this.active = false;
        break;
      case "none":
        this.active = false;
        break;
    }
  }
  emitRequestedItem() {
    this.calciteDropdownItemSelect.emit({
      requestedDropdownItem: this.el,
      requestedDropdownGroup: this.parentDropdownGroupEl
    });
  }
  getAttributes() {
    // spread attributes from the component to rendered child, filtering out props
    const props = ["icon-start", "icon-end", "active", "hasText", "isLink", "dir", "id", "theme"];
    return Array.from(this.el.attributes)
      .filter((a) => a && !props.includes(a.name))
      .reduce((acc, { name, value }) => (Object.assign(Object.assign({}, acc), { [name]: value })), {});
  }
  getItemPosition() {
    const group = this.el.closest("calcite-dropdown-group");
    return group
      ? Array.prototype.indexOf.call(group.querySelectorAll("calcite-dropdown-item"), this.el)
      : 1;
  }
  static get is() { return "calcite-dropdown-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-dropdown-item.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-dropdown-item.css"]
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
        "text": ""
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
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
        "text": "optionally pass an icon to display at the start of an item - accepts calcite ui icon names"
      },
      "attribute": "icon-start",
      "reflect": true
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
        "text": "optionally pass an icon to display at the end of an item - accepts calcite ui icon names"
      },
      "attribute": "icon-end",
      "reflect": true
    },
    "href": {
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
        "text": "optionally pass a href - used to determine if the component should render as anchor"
      },
      "attribute": "href",
      "reflect": true
    }
  }; }
  static get events() { return [{
      "method": "calciteDropdownItemSelect",
      "name": "calciteDropdownItemSelect",
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
      "method": "calciteDropdownItemKeyEvent",
      "name": "calciteDropdownItemKeyEvent",
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
        "original": "ItemKeyboardEvent",
        "resolved": "ItemKeyboardEvent",
        "references": {
          "ItemKeyboardEvent": {
            "location": "import",
            "path": "../../interfaces/Dropdown"
          }
        }
      }
    }, {
      "method": "calciteDropdownItemRegister",
      "name": "calciteDropdownItemRegister",
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
        "original": "ItemRegistration",
        "resolved": "ItemRegistration",
        "references": {
          "ItemRegistration": {
            "location": "import",
            "path": "../../interfaces/Dropdown"
          }
        }
      }
    }, {
      "method": "calciteDropdownCloseRequest",
      "name": "calciteDropdownCloseRequest",
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
        "text": "Focuses the selected item.",
        "tags": []
      }
    }
  }; }
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
      "name": "calciteDropdownItemChange",
      "method": "updateActiveItemOnChange",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
