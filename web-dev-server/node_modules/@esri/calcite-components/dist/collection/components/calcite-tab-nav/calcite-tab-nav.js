import { Component, Element, Event, h, Host, Listen, Prop, State, Watch } from "@stencil/core";
import { getElementDir, filterDirectChildren } from "../../utils/dom";
export class CalciteTabNav {
  constructor() {
    /** @internal Parent tabs component layout value */
    this.layout = "inline";
    /** @internal Parent tabs component position value */
    this.position = "below";
    this.animationActiveDuration = 0.3;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.handleContainerScroll = () => {
      // remove active indicator transition duration while container is scrolling to prevent wobble
      this.activeIndicatorEl.style.transitionDuration = "0s";
      this.updateOffsetPosition();
    };
  }
  async selectedTabChanged() {
    if (localStorage &&
      this.storageId &&
      this.selectedTab !== undefined &&
      this.selectedTab !== null) {
      localStorage.setItem(`calcite-tab-nav-${this.storageId}`, JSON.stringify(this.selectedTab));
    }
    this.calciteTabChange.emit({
      tab: this.selectedTab
    });
    this.selectedTabEl = await this.getTabTitleById(this.selectedTab);
  }
  selectedTabElChanged() {
    this.updateOffsetPosition();
    this.updateActiveWidth();
    // reset the animation time on tab selection
    this.activeIndicatorEl.style.transitionDuration = `${this.animationActiveDuration}s`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    const storageKey = `calcite-tab-nav-${this.storageId}`;
    if (localStorage && this.storageId && localStorage.getItem(storageKey)) {
      const storedTab = JSON.parse(localStorage.getItem(storageKey));
      this.selectedTab = storedTab;
      this.calciteTabChange.emit({
        tab: this.selectedTab
      });
    }
  }
  componentWillRender() {
    var _a, _b;
    this.layout = (_a = this.el.closest("calcite-tabs")) === null || _a === void 0 ? void 0 : _a.layout;
    this.position = (_b = this.el.closest("calcite-tabs")) === null || _b === void 0 ? void 0 : _b.position;
  }
  componentDidRender() {
    // if every tab title is active select the first tab.
    if (this.tabTitles.length &&
      this.tabTitles.every((title) => !title.active) &&
      !this.selectedTab) {
      this.tabTitles[0].getTabIdentifier().then((tab) => {
        this.calciteTabChange.emit({
          tab
        });
      });
    }
  }
  render() {
    const dir = getElementDir(this.el);
    const width = `${this.indicatorWidth}px`;
    const offset = `${this.indicatorOffset}px`;
    const indicatorStyle = dir !== "rtl" ? { width, left: offset } : { width, right: offset };
    return (h(Host, { role: "tablist" },
      h("div", { class: "tab-nav", onScroll: this.handleContainerScroll, ref: (el) => (this.tabNavEl = el) },
        h("div", { class: "tab-nav-active-indicator-container", ref: (el) => (this.activeIndicatorContainerEl = el) },
          h("div", { class: "tab-nav-active-indicator", ref: (el) => (this.activeIndicatorEl = el), style: indicatorStyle })),
        h("slot", null))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  resizeHandler() {
    // remove active indicator transition duration during resize to prevent wobble
    this.activeIndicatorEl.style.transitionDuration = "0s";
    this.updateActiveWidth();
    this.updateOffsetPosition();
  }
  focusPreviousTabHandler(e) {
    const currentIndex = this.getIndexOfTabTitle(e.target, this.enabledTabTitles);
    const previousTab = this.enabledTabTitles[currentIndex - 1] ||
      this.enabledTabTitles[this.enabledTabTitles.length - 1];
    previousTab.focus();
    e.stopPropagation();
    e.preventDefault();
  }
  focusNextTabHandler(e) {
    const currentIndex = this.getIndexOfTabTitle(e.target, this.enabledTabTitles);
    const nextTab = this.enabledTabTitles[currentIndex + 1] || this.enabledTabTitles[0];
    nextTab.focus();
    e.stopPropagation();
    e.preventDefault();
  }
  activateTabHandler(e) {
    if (e.detail.tab) {
      this.selectedTab = e.detail.tab;
    }
    else {
      this.selectedTab = this.getIndexOfTabTitle(e.target);
    }
    e.stopPropagation();
    e.preventDefault();
  }
  /**
   * Check for active tabs on register and update selected
   */
  updateTabTitles(e) {
    if (e.target.active) {
      this.selectedTab = e.detail;
    }
  }
  globalTabChangeHandler(e) {
    if (this.syncId &&
      e.target !== this.el &&
      e.target.syncId === this.syncId &&
      this.selectedTab !== e.detail.tab) {
      this.selectedTab = e.detail.tab;
    }
  }
  updateOffsetPosition() {
    var _a, _b, _c, _d, _e;
    const dir = getElementDir(this.el);
    const navWidth = (_a = this.activeIndicatorContainerEl) === null || _a === void 0 ? void 0 : _a.offsetWidth;
    const tabLeft = (_b = this.selectedTabEl) === null || _b === void 0 ? void 0 : _b.offsetLeft;
    const tabWidth = (_c = this.selectedTabEl) === null || _c === void 0 ? void 0 : _c.offsetWidth;
    const offsetRight = navWidth - (tabLeft + tabWidth);
    this.indicatorOffset =
      dir !== "rtl" ? tabLeft - ((_d = this.tabNavEl) === null || _d === void 0 ? void 0 : _d.scrollLeft) : offsetRight + ((_e = this.tabNavEl) === null || _e === void 0 ? void 0 : _e.scrollLeft);
  }
  updateActiveWidth() {
    var _a;
    this.indicatorWidth = (_a = this.selectedTabEl) === null || _a === void 0 ? void 0 : _a.offsetWidth;
  }
  getIndexOfTabTitle(el, tabTitles = this.tabTitles) {
    // In most cases, since these indexes correlate with tab contents, we want to consider all tab titles.
    // However, when doing relative index operations, it makes sense to pass in this.enabledTabTitles as the 2nd arg.
    return tabTitles.indexOf(el);
  }
  async getTabTitleById(id) {
    return Promise.all(this.tabTitles.map((el) => el.getTabIdentifier())).then((ids) => {
      return this.tabTitles[ids.indexOf(id)];
    });
  }
  get tabTitles() {
    return filterDirectChildren(this.el, "calcite-tab-title");
  }
  get enabledTabTitles() {
    return filterDirectChildren(this.el, "calcite-tab-title:not([disabled])");
  }
  static get is() { return "calcite-tab-nav"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-tab-nav.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-tab-nav.css"]
  }; }
  static get properties() { return {
    "storageId": {
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
        "text": "Name to use when saving selected tab data to localStorage"
      },
      "attribute": "storage-id",
      "reflect": false
    },
    "syncId": {
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
        "text": "Pass the same string to multiple tab navs to keep them all in sync if one changes"
      },
      "attribute": "sync-id",
      "reflect": false
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
      "reflect": true,
      "defaultValue": "\"inline\""
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
      "reflect": true,
      "defaultValue": "\"below\""
    },
    "indicatorOffset": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": undefined,
            "name": "internal"
          }],
        "text": ""
      },
      "attribute": "indicator-offset",
      "reflect": false
    },
    "indicatorWidth": {
      "type": "number",
      "mutable": true,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [{
            "text": undefined,
            "name": "internal"
          }],
        "text": ""
      },
      "attribute": "indicator-width",
      "reflect": false
    }
  }; }
  static get states() { return {
    "selectedTab": {},
    "selectedTabEl": {}
  }; }
  static get events() { return [{
      "method": "calciteTabChange",
      "name": "calciteTabChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Emitted when the active tab changes"
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
    }]; }
  static get elementRef() { return "el"; }
  static get watchers() { return [{
      "propName": "selectedTab",
      "methodName": "selectedTabChanged"
    }, {
      "propName": "selectedTabEl",
      "methodName": "selectedTabElChanged"
    }]; }
  static get listeners() { return [{
      "name": "resize",
      "method": "resizeHandler",
      "target": "window",
      "capture": false,
      "passive": true
    }, {
      "name": "calciteTabsFocusPrevious",
      "method": "focusPreviousTabHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteTabsFocusNext",
      "method": "focusNextTabHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteTabsActivate",
      "method": "activateTabHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteTabTitleRegister",
      "method": "updateTabTitles",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "calciteTabChange",
      "method": "globalTabChangeHandler",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
