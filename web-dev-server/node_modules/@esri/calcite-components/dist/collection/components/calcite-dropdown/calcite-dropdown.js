import { Component, Element, Event, h, Host, Listen, Prop, Watch, Method } from "@stencil/core";
import { getKey } from "../../utils/key";
import { focusElement, getElementDir } from "../../utils/dom";
import { createPopper, updatePopper, CSS as PopperCSS } from "../../utils/popper";
export class CalciteDropdown {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Public Properties
    //
    //--------------------------------------------------------------------------
    this.active = false;
    /** specify the alignment of dropdown, defaults to start */
    this.alignment = "start";
    /**
     allow the dropdown to remain open after a selection is made
     if the selection-mode of the selected item's containing group is "none", the dropdown will always close
     */
    this.disableCloseOnSelect = false;
    /**
     specify the maximum number of calcite-dropdown-items to display before showing the scroller, must be greater than 0 -
     this value does not include groupTitles passed to calcite-dropdown-group
    */
    this.maxItems = 0;
    /** specify the scale of dropdown, defaults to m */
    this.scale = "m";
    /**
     * **read-only** The currently selected items
     *
     * @readonly
     */
    this.selectedItems = [];
    /** specify whether the dropdown is opened by hover or click of a trigger element */
    this.type = "click";
    /** specify the width of dropdown, defaults to m */
    this.width = "m";
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    /** created list of dropdown items */
    this.items = [];
    /** specifies the item wrapper height; it is updated when maxItems is > 0  **/
    this.maxScrollerHeight = 0;
    /** keep track of whether the groups have been sorted so we don't re-sort */
    this.sorted = false;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.setReferenceEl = (el) => {
      this.referenceEl = el;
    };
    this.setMenuEl = (el) => {
      this.menuEl = el;
    };
    this.openDropdown = (e) => {
      const target = e.target;
      if (this.triggers.includes(target) ||
        this.triggers.some((trigger) => trigger.contains(target))) {
        e.preventDefault();
        e.stopPropagation();
        this.openCalciteDropdown();
      }
    };
    this.keyDownHandler = (e) => {
      const target = event.target;
      const key = getKey(e.key);
      if (this.triggers.includes(target) ||
        this.triggers.some((trigger) => trigger.contains(target))) {
        if (target.nodeName !== "BUTTON" && target.nodeName !== "CALCITE-BUTTON") {
          switch (key) {
            case " ":
            case "Enter":
              this.openCalciteDropdown();
              break;
            case "Escape":
              this.closeCalciteDropdown();
              break;
          }
        }
        else if (this.active && (key === "Escape" || (e.shiftKey && key === "Tab"))) {
          this.closeCalciteDropdown();
        }
      }
    };
  }
  activeHandler() {
    this.reposition();
  }
  alignmentHandler() {
    this.reposition();
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.createPopper();
  }
  componentWillLoad() {
    // get initially selected items
    this.updateSelectedItems();
  }
  componentDidLoad() {
    this.triggers = Array.from(this.el.querySelectorAll("[slot=dropdown-trigger]"));
    if (!this.sorted) {
      const groups = this.items.sort((a, b) => a.position - b.position);
      this.maxScrollerHeight = this.getMaxScrollerHeight(groups);
      this.items = groups.reduce((items, group) => [...items, ...group.items], []);
      this.sorted = true;
    }
  }
  disconnectedCallback() {
    this.destroyPopper();
  }
  render() {
    const { active, maxScrollerHeight } = this;
    const dir = getElementDir(this.el);
    return (h(Host, { dir: dir, tabIndex: this.disabled ? -1 : null },
      h("div", { class: "calcite-dropdown-trigger-container", onClick: this.openDropdown, onKeyDown: this.keyDownHandler, ref: this.setReferenceEl },
        h("slot", { "aria-expanded": active.toString(), "aria-haspopup": "true", name: "dropdown-trigger" })),
      h("div", { "aria-hidden": (!active).toString(), class: "calcite-dropdown-wrapper", ref: this.setMenuEl, tabIndex: -1 },
        h("div", { class: {
            ["calcite-dropdown-content"]: true,
            [PopperCSS.animation]: true,
            [PopperCSS.animationActive]: active
          }, style: {
            maxHeight: maxScrollerHeight > 0 ? `${maxScrollerHeight}px` : ""
          } },
          h("slot", null)))));
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async reposition() {
    const { popper, menuEl } = this;
    const modifiers = this.getModifiers();
    const placement = this.getPlacement();
    popper
      ? updatePopper({
        el: menuEl,
        modifiers,
        placement,
        popper
      })
      : this.createPopper();
  }
  closeCalciteDropdownOnClick(e) {
    const target = e.target;
    if (this.active &&
      target.nodeName !== "CALCITE-DROPDOWN-ITEM" &&
      target.nodeName !== "CALCITE-DROPDOWN-GROUP") {
      this.closeCalciteDropdown();
    }
  }
  closeCalciteDropdownOnEvent() {
    this.closeCalciteDropdown();
  }
  closeCalciteDropdownOnOpenEvent(e) {
    if (e.target !== this.el)
      this.active = false;
  }
  mouseEnterHandler() {
    if (this.type === "hover") {
      this.openCalciteDropdown();
    }
  }
  mouseLeaveHandler() {
    if (this.type === "hover") {
      this.closeCalciteDropdown();
    }
  }
  calciteDropdownItemKeyEvent(e) {
    const { keyboardEvent } = e.detail;
    // handle edge
    const target = keyboardEvent.target;
    const itemToFocus = target.nodeName !== "A" ? target : target.parentNode;
    const isFirstItem = this.itemIndex(itemToFocus) === 0;
    const isLastItem = this.itemIndex(itemToFocus) === this.items.length - 1;
    switch (getKey(keyboardEvent.key)) {
      case "Tab":
        if (isLastItem && !keyboardEvent.shiftKey)
          this.closeCalciteDropdown();
        else if (isFirstItem && keyboardEvent.shiftKey)
          this.closeCalciteDropdown();
        else if (keyboardEvent.shiftKey)
          this.focusPrevItem(itemToFocus);
        else
          this.focusNextItem(itemToFocus);
        break;
      case "ArrowDown":
        this.focusNextItem(itemToFocus);
        break;
      case "ArrowUp":
        this.focusPrevItem(itemToFocus);
        break;
      case "Home":
        this.focusFirstItem();
        break;
      case "End":
        this.focusLastItem();
        break;
    }
    e.stopPropagation();
  }
  handleItemSelect(event) {
    this.updateSelectedItems();
    event.stopPropagation();
    this.calciteDropdownSelect.emit();
    if (!this.disableCloseOnSelect || event.detail.requestedDropdownGroup.selectionMode === "none")
      this.closeCalciteDropdown();
  }
  registerCalciteDropdownGroup(e) {
    const { detail: { items, position, titleEl, separatorEl } } = e;
    this.items.push({
      items,
      position,
      titleEl,
      separatorEl
    });
    e.stopPropagation();
    this.updateSelectedItems();
  }
  getModifiers() {
    const flipModifier = {
      name: "flip",
      enabled: true
    };
    flipModifier.options = {
      fallbackPlacements: ["top-start", "top", "top-end", "bottom-start", "bottom", "bottom-end"]
    };
    return [flipModifier];
  }
  getPlacement() {
    const { alignment } = this;
    if (alignment === "center") {
      return "bottom";
    }
    if (alignment === "end") {
      return "bottom-end";
    }
    return "bottom-start";
  }
  createPopper() {
    this.destroyPopper();
    const { menuEl, referenceEl } = this;
    const modifiers = this.getModifiers();
    const placement = this.getPlacement();
    this.popper = createPopper({
      el: menuEl,
      modifiers,
      placement,
      referenceEl
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  updateSelectedItems() {
    const items = Array.from(this.el.querySelectorAll("calcite-dropdown-item"));
    this.selectedItems = items.filter((item) => item.active);
  }
  getMaxScrollerHeight(groups) {
    const { maxItems } = this;
    let itemsToProcess = 0;
    let maxScrollerHeight = 0;
    groups.forEach((group) => {
      var _a, _b;
      if (maxItems > 0 && itemsToProcess < maxItems) {
        maxScrollerHeight += ((_a = group === null || group === void 0 ? void 0 : group.titleEl) === null || _a === void 0 ? void 0 : _a.offsetHeight) || 0;
        maxScrollerHeight += ((_b = group === null || group === void 0 ? void 0 : group.separatorEl) === null || _b === void 0 ? void 0 : _b.offsetHeight) || 0;
        group.items.forEach((item) => {
          if (itemsToProcess < maxItems) {
            maxScrollerHeight += item.offsetHeight;
            itemsToProcess += 1;
          }
        });
      }
    });
    return maxScrollerHeight;
  }
  closeCalciteDropdown() {
    this.calciteDropdownClose.emit();
    this.active = false;
    focusElement(this.triggers[0]);
  }
  focusOnFirstActiveOrFirstItem() {
    this.getFocusableElement(this.items.find((item) => item.active) || this.items[0]);
  }
  focusFirstItem() {
    const firstItem = this.items[0];
    this.getFocusableElement(firstItem);
  }
  focusLastItem() {
    const lastItem = this.items[this.items.length - 1];
    this.getFocusableElement(lastItem);
  }
  focusNextItem(e) {
    const index = this.itemIndex(e);
    const nextItem = this.items[index + 1] || this.items[0];
    this.getFocusableElement(nextItem);
  }
  focusPrevItem(e) {
    const index = this.itemIndex(e);
    const prevItem = this.items[index - 1] || this.items[this.items.length - 1];
    this.getFocusableElement(prevItem);
  }
  itemIndex(e) {
    return this.items.indexOf(e);
  }
  getFocusableElement(item) {
    if (!item) {
      return;
    }
    const target = item.attributes.isLink
      ? item.shadowRoot.querySelector("a")
      : item;
    focusElement(target);
  }
  openCalciteDropdown() {
    this.calciteDropdownOpen.emit();
    this.active = !this.active;
    const animationDelayInMs = 50;
    if (this.active) {
      setTimeout(() => this.focusOnFirstActiveOrFirstItem(), animationDelayInMs);
    }
    else {
      this.calciteDropdownClose.emit();
    }
  }
  static get is() { return "calcite-dropdown"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-dropdown.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-dropdown.css"]
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
    "alignment": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"start\" | \"center\" | \"end\"",
        "resolved": "\"center\" | \"end\" | \"start\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify the alignment of dropdown, defaults to start"
      },
      "attribute": "alignment",
      "reflect": true,
      "defaultValue": "\"start\""
    },
    "disableCloseOnSelect": {
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
        "text": "allow the dropdown to remain open after a selection is made\nif the selection-mode of the selected item's containing group is \"none\", the dropdown will always close"
      },
      "attribute": "disable-close-on-select",
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
      "optional": true,
      "docs": {
        "tags": [],
        "text": "is the dropdown disabled"
      },
      "attribute": "disabled",
      "reflect": true
    },
    "maxItems": {
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
        "text": "specify the maximum number of calcite-dropdown-items to display before showing the scroller, must be greater than 0 -\nthis value does not include groupTitles passed to calcite-dropdown-group"
      },
      "attribute": "max-items",
      "reflect": false,
      "defaultValue": "0"
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
        "text": "specify the scale of dropdown, defaults to m"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "selectedItems": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "HTMLCalciteDropdownItemElement[]",
        "resolved": "HTMLCalciteDropdownItemElement[]",
        "references": {
          "HTMLCalciteDropdownItemElement": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": undefined,
            "name": "readonly"
          }],
        "text": "**read-only** The currently selected items"
      },
      "defaultValue": "[]"
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
        "text": "specify the theme of the dropdown, defaults to light"
      },
      "attribute": "theme",
      "reflect": true
    },
    "type": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"hover\" | \"click\"",
        "resolved": "\"click\" | \"hover\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "specify whether the dropdown is opened by hover or click of a trigger element"
      },
      "attribute": "type",
      "reflect": true,
      "defaultValue": "\"click\""
    },
    "width": {
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
        "text": "specify the width of dropdown, defaults to m"
      },
      "attribute": "width",
      "reflect": true,
      "defaultValue": "\"m\""
    }
  }; }
  static get events() { return [{
      "method": "calciteDropdownSelect",
      "name": "calciteDropdownSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "fires when a dropdown item has been selected or deselected *"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "calciteDropdownOpen",
      "name": "calciteDropdownOpen",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "fires when a dropdown has been opened *"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }, {
      "method": "calciteDropdownClose",
      "name": "calciteDropdownClose",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "fires when a dropdown has been closed *"
      },
      "complexType": {
        "original": "void",
        "resolved": "void",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "reposition": {
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
  static get watchers() { return [{
      "propName": "active",
      "methodName": "activeHandler"
    }, {
      "propName": "alignment",
      "methodName": "alignmentHandler"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "closeCalciteDropdownOnClick",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "calciteDropdownCloseRequest",
      "method": "closeCalciteDropdownOnEvent",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteDropdownOpen",
      "method": "closeCalciteDropdownOnOpenEvent",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "mouseenter",
      "method": "mouseEnterHandler",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "mouseLeaveHandler",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "calciteDropdownItemKeyEvent",
      "method": "calciteDropdownItemKeyEvent",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteDropdownItemSelect",
      "method": "handleItemSelect",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteDropdownGroupRegister",
      "method": "registerCalciteDropdownGroup",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
