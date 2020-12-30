import { Component, Element, Event, Host, Method, Prop, State, Watch, h } from "@stencil/core";
import { CSS, ICONS, TEXT } from "./resources";
import { getElementDir } from "../../utils/dom";
/**
 * @slot - A slot for adding `calcite-tip`s.
 */
export class CalciteTipManager {
  constructor() {
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Alternate text for closing the `calcite-tip-manager`.
     */
    this.closed = false;
    this.observer = new MutationObserver(() => this.setUpTips());
    this.hideTipManager = () => {
      this.closed = true;
      this.calciteTipManagerToggle.emit();
    };
    this.previousClicked = () => {
      this.previousTip();
    };
    this.nextClicked = () => {
      this.nextTip();
    };
    this.tipManagerKeyUpHandler = (event) => {
      if (event.target !== this.container) {
        return;
      }
      switch (event.key) {
        case "ArrowRight":
          event.preventDefault();
          this.nextTip();
          break;
        case "ArrowLeft":
          event.preventDefault();
          this.previousTip();
          break;
        case "Home":
          event.preventDefault();
          this.selectedIndex = 0;
          break;
        case "End":
          event.preventDefault();
          this.selectedIndex = this.total - 1;
          break;
      }
    };
    this.storeContainerRef = (el) => {
      this.container = el;
    };
  }
  closedChangeHandler() {
    this.direction = null;
    this.calciteTipManagerToggle.emit();
  }
  selectedChangeHandler() {
    this.showSelectedTip();
    this.updateGroupTitle();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.setUpTips();
    this.observer.observe(this.el, { childList: true, subtree: true });
  }
  disconnectedCallback() {
    this.observer.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  async nextTip() {
    this.direction = "advancing";
    const nextIndex = this.selectedIndex + 1;
    this.selectedIndex = (nextIndex + this.total) % this.total;
  }
  async previousTip() {
    this.direction = "retreating";
    const previousIndex = this.selectedIndex - 1;
    this.selectedIndex = (previousIndex + this.total) % this.total;
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  setUpTips() {
    const tips = Array.from(this.el.querySelectorAll("calcite-tip"));
    this.total = tips.length;
    if (this.total === 0) {
      return;
    }
    const selectedTip = this.el.querySelector("calcite-tip[selected]");
    this.tips = tips;
    this.selectedIndex = selectedTip ? tips.indexOf(selectedTip) : 0;
    tips.forEach((tip) => {
      tip.nonDismissible = true;
    });
    this.showSelectedTip();
    this.updateGroupTitle();
  }
  showSelectedTip() {
    this.tips.forEach((tip, index) => {
      const isSelected = this.selectedIndex === index;
      tip.selected = isSelected;
      tip.hidden = !isSelected;
    });
  }
  updateGroupTitle() {
    const selectedTip = this.tips[this.selectedIndex];
    const tipParent = selectedTip.closest("calcite-tip-group");
    this.groupTitle = (tipParent === null || tipParent === void 0 ? void 0 : tipParent.groupTitle) || this.intlDefaultTitle || TEXT.defaultGroupTitle;
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderPagination() {
    const dir = getElementDir(this.el);
    const { selectedIndex, tips, total, intlNext, intlPrevious, intlPaginationLabel } = this;
    const nextLabel = intlNext || TEXT.next;
    const previousLabel = intlPrevious || TEXT.previous;
    const paginationLabel = intlPaginationLabel || TEXT.defaultPaginationLabel;
    return tips.length > 1 ? (h("footer", { class: CSS.pagination },
      h("calcite-action", { class: CSS.pagePrevious, icon: dir === "ltr" ? ICONS.chevronLeft : ICONS.chevronRight, onClick: this.previousClicked, text: previousLabel }),
      h("span", { class: CSS.pagePosition }, `${paginationLabel} ${selectedIndex + 1}/${total}`),
      h("calcite-action", { class: CSS.pageNext, icon: dir === "ltr" ? ICONS.chevronRight : ICONS.chevronLeft, onClick: this.nextClicked, text: nextLabel }))) : null;
  }
  render() {
    const { closed, direction, groupTitle, selectedIndex, intlClose, total } = this;
    const closeLabel = intlClose || TEXT.close;
    if (total === 0) {
      return h(Host, null);
    }
    return (h(Host, null,
      h("section", { "aria-hidden": closed.toString(), class: CSS.container, hidden: closed, onKeyUp: this.tipManagerKeyUpHandler, ref: this.storeContainerRef, tabIndex: 0 },
        h("header", { class: CSS.header },
          h("h2", { class: CSS.heading, key: selectedIndex }, groupTitle),
          h("calcite-action", { class: CSS.close, icon: ICONS.close, onClick: this.hideTipManager, text: closeLabel })),
        h("div", { class: {
            [CSS.tipContainer]: true,
            [CSS.tipContainerAdvancing]: !closed && direction === "advancing",
            [CSS.tipContainerRetreating]: !closed && direction === "retreating"
          }, key: selectedIndex, tabIndex: 0 },
          h("slot", null)),
        this.renderPagination())));
  }
  static get is() { return "calcite-tip-manager"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["./calcite-tip-manager.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-tip-manager.css"]
  }; }
  static get properties() { return {
    "closed": {
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
        "text": "Alternate text for closing the `calcite-tip-manager`."
      },
      "attribute": "closed",
      "reflect": true,
      "defaultValue": "false"
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
    "intlDefaultTitle": {
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
        "text": "The default group title for the `calcite-tip-manager`."
      },
      "attribute": "intl-default-title",
      "reflect": false
    },
    "intlNext": {
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
        "text": "Alternate text for navigating to the next tip."
      },
      "attribute": "intl-next",
      "reflect": false
    },
    "intlPaginationLabel": {
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
        "text": "Label that appears on hover of pagination icon."
      },
      "attribute": "intl-pagination-label",
      "reflect": false
    },
    "intlPrevious": {
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
        "text": "Alternate text for navigating to the previous tip."
      },
      "attribute": "intl-previous",
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
  static get states() { return {
    "selectedIndex": {},
    "tips": {},
    "total": {},
    "direction": {},
    "groupTitle": {}
  }; }
  static get events() { return [{
      "method": "calciteTipManagerToggle",
      "name": "calciteTipManagerToggle",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the `calcite-tip-manager` has been toggled open or closed."
      },
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "nextTip": {
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
    },
    "previousTip": {
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
      "propName": "closed",
      "methodName": "closedChangeHandler"
    }, {
      "propName": "selectedIndex",
      "methodName": "selectedChangeHandler"
    }]; }
}
