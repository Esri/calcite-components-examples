'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a9091fa4.js');
const dom = require('./dom-031e5053.js');
const resources = require('./resources-656cf3a8.js');
const array = require('./array-4fc5abfa.js');

const CSS = {
  frame: "frame",
  frameAdvancing: "frame--advancing",
  frameRetreating: "frame--retreating"
};

const calciteFlowCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{-ms-flex-align:stretch;align-items:stretch;background-color:transparent;display:-ms-flexbox;display:flex;width:100%;height:100%;overflow:hidden;position:relative}:host .frame{-ms-flex-align:stretch;align-items:stretch;width:100%;padding:0;margin:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;position:relative}:host ::slotted(calcite-panel){height:100%}:host .frame--advancing{-webkit-animation:calcite-frame-advance 150ms ease-in-out;animation:calcite-frame-advance 150ms ease-in-out}:host .frame--retreating{-webkit-animation:calcite-frame-retreat 150ms ease-in-out;animation:calcite-frame-retreat 150ms ease-in-out}@-webkit-keyframes calcite-frame-advance{0%{opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-advance{0%{opacity:0.5;-webkit-transform:translate3d(50px, 0, 0);transform:translate3d(50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@-webkit-keyframes calcite-frame-retreat{0%{opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{opacity:0.5;-webkit-transform:translate3d(-50px, 0, 0);transform:translate3d(-50px, 0, 0)}100%{opacity:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}}";

const CalciteFlow = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.panelCount = 0;
    this.flowDirection = null;
    this.panels = [];
    this.getFlowDirection = (oldPanelCount, newPanelCount) => {
      const allowRetreatingDirection = oldPanelCount > 1;
      const allowAdvancingDirection = oldPanelCount && newPanelCount > 1;
      if (!allowAdvancingDirection && !allowRetreatingDirection) {
        return null;
      }
      return newPanelCount < oldPanelCount ? "retreating" : "advancing";
    };
    this.updateFlowProps = () => {
      const { panels } = this;
      const newPanels = Array.from(this.el.querySelectorAll("calcite-panel"));
      const oldPanelCount = panels.length;
      const newPanelCount = newPanels.length;
      const activePanel = newPanels[newPanelCount - 1];
      const previousPanel = newPanels[newPanelCount - 2];
      if (newPanelCount && activePanel) {
        newPanels.forEach((panelNode) => {
          panelNode.showBackButton = newPanelCount > 1;
          panelNode.hidden = panelNode !== activePanel;
        });
      }
      if (previousPanel) {
        previousPanel.menuOpen = false;
      }
      this.panels = newPanels;
      if (oldPanelCount !== newPanelCount) {
        const flowDirection = this.getFlowDirection(oldPanelCount, newPanelCount);
        this.panelCount = newPanelCount;
        this.flowDirection = flowDirection;
      }
    };
    this.panelItemObserver = new MutationObserver(this.updateFlowProps);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Removes the currently active `calcite-panel`.
   */
  async back() {
    const lastItem = this.el.querySelector("calcite-panel:last-child");
    if (!lastItem) {
      return;
    }
    const beforeBack = lastItem.beforeBack
      ? lastItem.beforeBack
      : () => Promise.resolve();
    return beforeBack.call(lastItem).then(() => {
      lastItem.remove();
      return lastItem;
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.panelItemObserver.observe(this.el, { childList: true, subtree: true });
    this.updateFlowProps();
  }
  disconnectedCallback() {
    this.panelItemObserver.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  handleCalcitePanelBackClick() {
    this.back();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { flowDirection, panelCount } = this;
    const frameDirectionClasses = {
      [CSS.frame]: true,
      [CSS.frameAdvancing]: flowDirection === "advancing",
      [CSS.frameRetreating]: flowDirection === "retreating"
    };
    return (index.h(index.Host, null, index.h("div", { class: frameDirectionClasses, key: panelCount }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
CalciteFlow.style = calciteFlowCss;

const CSS$1 = {
  backButton: "back-button",
  container: "container",
  header: "header",
  heading: "heading",
  summary: "summary",
  headerContent: "header-content",
  headerActions: "header-actions",
  headerActionsEnd: "header-actions--end",
  headerActionsStart: "header-actions--start",
  contentContainer: "content-container",
  fabContainer: "fab-container",
  footer: "footer",
  menuContainer: "menu-container",
  menuButton: "menu-button",
  menu: "menu",
  menuOpen: "menu--open"
};
const ICONS = {
  close: "x",
  menu: "ellipsis",
  backLeft: "chevron-left",
  backRight: "chevron-right"
};
const SLOTS = {
  headerActionsStart: "header-actions-start",
  headerActionsEnd: "header-actions-end",
  headerMenuActions: "header-menu-actions",
  headerContent: "header-content",
  fab: "fab",
  footer: "footer",
  footerActions: "footer-actions"
};
const TEXT = {
  back: "Back",
  close: "Close",
  open: "Open",
  options: "Options"
};

const calcitePanelCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;position:relative;max-height:var(--calcite-panel-max-height);width:var(--calcite-panel-width);max-width:var(--calcite-panel-max-width);min-width:var(--calcite-panel-min-width);-webkit-transition:max-height 150ms ease-in-out, width 150ms ease-in-out;transition:max-height 150ms ease-in-out, width 150ms ease-in-out;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-max-height:unset;--calcite-panel-width:100%;--calcite-panel-min-width:unset;--calcite-panel-max-width:unset}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-ui-text-weight-demi);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:1.25rem}h2.heading{font-size:1.125rem}h3.heading{font-size:1rem}h4.heading,h5.heading{font-size:0.875rem}.container{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);height:100%;width:100%;padding:0;margin:0;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column}calcite-scrim{-ms-flex-align:stretch;align-items:stretch;width:100%;height:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;pointer-events:none}:host([height-scale=s]){--calcite-panel-max-height:40vh}:host([height-scale=m]){--calcite-panel-max-height:60vh}:host([height-scale=l]){--calcite-panel-max-height:80vh}:host([width-scale=s]){--calcite-panel-width:12vw;--calcite-panel-max-width:300px;--calcite-panel-min-width:150px}:host([width-scale=m]){--calcite-panel-width:20vw;--calcite-panel-max-width:420px;--calcite-panel-min-width:240px}:host([width-scale=l]){--calcite-panel-width:45vw;--calcite-panel-max-width:680px;--calcite-panel-min-width:340px}.container[hidden]{display:none}:host([loading]) .container,:host([disabled]) .container{position:relative;z-index:1}.header{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-foreground-1);-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:start;justify-content:flex-start;min-height:var(--calcite-header-min-height);position:-webkit-sticky;position:sticky;top:0;z-index:2;border-bottom:1px solid var(--calcite-ui-border-3);width:100%}.header-content{display:block;overflow:hidden;margin-right:auto;padding:var(--calcite-spacing) var(--calcite-spacing-three-quarters)}.header-content .heading,.header-content .summary{padding:0;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:100%}.header-content .heading{color:var(--calcite-ui-text-3);font-weight:var(--calcite-ui-text-weight-demi);margin:0 0 var(--calcite-spacing-quarter);font-size:1rem}.header-content .heading:only-child{margin-bottom:0}.header-content .summary{color:var(--calcite-ui-text-3);font-size:0.75rem}.header-actions{-ms-flex-align:stretch;align-items:stretch;display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap}.menu-container:only-child{margin-left:auto}.menu-button{-ms-flex-item-align:stretch;align-self:stretch;-ms-flex:0 1 auto;flex:0 1 auto;height:100%;position:relative}.menu{min-width:var(--calcite-menu-min-width);-ms-flex-flow:column nowrap;flex-flow:column nowrap}.content-container{-ms-flex-align:stretch;align-items:stretch;background-color:var(--calcite-ui-background);display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex:1 1 auto;flex:1 1 auto;overflow:auto}.footer{background-color:var(--calcite-ui-foreground-1);border-top:1px solid var(--calcite-ui-border-3);display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-pack:space-evenly;justify-content:space-evenly;min-height:var(--calcite-footer-min-height);padding:var(--calcite-spacing-half) var(--calcite-spacing-half);position:-webkit-sticky;position:sticky;bottom:0;width:100%}.calcite--rtl .header-content{margin-left:auto;margin-right:unset}.calcite--rtl .menu-container:only-child{margin-left:unset;margin-right:auto}.fab-container{position:-webkit-sticky;position:sticky;z-index:1;bottom:0;display:inline-block;margin:0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half);left:0;right:0}";

const SUPPORTED_ARROW_KEYS = ["ArrowUp", "ArrowDown"];
const CalcitePanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calcitePanelDismissedChange = index.createEvent(this, "calcitePanelDismissedChange", 7);
    this.calcitePanelScroll = index.createEvent(this, "calcitePanelScroll", 7);
    this.calcitePanelBackClick = index.createEvent(this, "calcitePanelBackClick", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Hides the panel.
     */
    this.dismissed = false;
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * Displays a close button in the trailing side of the header.
     */
    this.dismissible = false;
    /**
     * Shows a back button in the header.
     */
    this.showBackButton = false;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * 'Options' text string for the actions menu.
     */
    this.intlOptions = TEXT.options;
    /**
     * Opens the action menu.
     */
    this.menuOpen = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.setContainerRef = (node) => {
      this.containerEl = node;
    };
    this.setMenuButonRef = (node) => {
      this.menuButtonEl = node;
    };
    this.setDismissRef = (node) => {
      this.dismissButtonEl = node;
    };
    this.setBackRef = (node) => {
      this.backButtonEl = node;
    };
    this.panelKeyUpHandler = (event) => {
      if (event.key === "Escape") {
        this.dismiss();
      }
    };
    this.dismiss = () => {
      this.dismissed = true;
    };
    this.panelScrollHandler = () => {
      this.calcitePanelScroll.emit();
    };
    this.backButtonClick = () => {
      this.calcitePanelBackClick.emit();
    };
    this.toggleMenuOpen = () => {
      this.menuOpen = !this.menuOpen;
    };
    this.menuButtonKeyDown = (event) => {
      const { key } = event;
      const { menuOpen } = this;
      if (!this.isValidKey(key, SUPPORTED_ARROW_KEYS)) {
        return;
      }
      const actions = this.queryActions();
      const { length } = actions;
      if (!length) {
        return;
      }
      event.preventDefault();
      if (!menuOpen) {
        this.menuOpen = true;
      }
      if (key === "ArrowUp") {
        const lastAction = actions[length - 1];
        dom.focusElement(lastAction);
      }
      if (key === "ArrowDown") {
        const firstAction = actions[0];
        dom.focusElement(firstAction);
      }
    };
    this.menuActionsKeydown = (event) => {
      const { key, target } = event;
      if (!this.isValidKey(key, SUPPORTED_ARROW_KEYS)) {
        return;
      }
      const actions = this.queryActions();
      const { length } = actions;
      const currentIndex = actions.indexOf(target);
      if (!length || currentIndex === -1) {
        return;
      }
      event.preventDefault();
      if (key === "ArrowUp") {
        const value = array.getRoundRobinIndex(currentIndex - 1, length);
        const previousAction = actions[value];
        dom.focusElement(previousAction);
      }
      if (key === "ArrowDown") {
        const value = array.getRoundRobinIndex(currentIndex + 1, length);
        const nextAction = actions[value];
        dom.focusElement(nextAction);
      }
    };
    this.menuActionsContainerKeyDown = (event) => {
      const { key } = event;
      if (key === "Escape") {
        this.menuOpen = false;
      }
    };
  }
  dismissedHandler() {
    this.calcitePanelDismissedChange.emit();
  }
  queryActions() {
    return dom.getSlotted(this.el, SLOTS.headerActionsEnd, {
      all: true
    });
  }
  isValidKey(key, supportedKeys) {
    return !!supportedKeys.find((k) => k === key);
  }
  // --------------------------------------------------------------------------
  //
  //  Methods
  //
  // --------------------------------------------------------------------------
  async setFocus(focusId) {
    var _a, _b, _c;
    if (focusId === "dismiss-button") {
      (_a = this.dismissButtonEl) === null || _a === void 0 ? void 0 : _a.setFocus();
      return;
    }
    if (focusId === "back-button") {
      (_b = this.backButtonEl) === null || _b === void 0 ? void 0 : _b.setFocus();
      return;
    }
    (_c = this.containerEl) === null || _c === void 0 ? void 0 : _c.focus();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderBackButton() {
    const { el } = this;
    const rtl = dom.getElementDir(el) === "rtl";
    const { showBackButton, intlBack, backButtonClick } = this;
    const label = intlBack || TEXT.back;
    const icon = rtl ? ICONS.backRight : ICONS.backLeft;
    return showBackButton ? (index.h("calcite-action", { "aria-label": label, class: CSS$1.backButton, icon: icon, key: "back-button", onClick: backButtonClick, ref: this.setBackRef, scale: "s", slot: SLOTS.headerActionsStart, text: label })) : null;
  }
  renderHeaderContent() {
    const { heading, summary } = this;
    const headingNode = heading ? index.h("h3", { class: CSS$1.heading }, heading) : null;
    const summaryNode = summary ? index.h("span", { class: CSS$1.summary }, summary) : null;
    return headingNode || summaryNode ? (index.h("div", { class: CSS$1.headerContent, key: "header-content" }, headingNode, summaryNode)) : null;
  }
  /**
   * Allows user to override the entire header-content node.
   */
  renderHeaderSlottedContent() {
    return (index.h("div", { class: CSS$1.headerContent, key: "header-content" }, index.h("slot", { name: SLOTS.headerContent })));
  }
  renderHeaderStartActions() {
    const { el } = this;
    const hasStartActions = dom.getSlotted(el, SLOTS.headerActionsStart);
    return hasStartActions ? (index.h("div", { class: { [CSS$1.headerActionsStart]: true, [CSS$1.headerActions]: true }, key: "header-actions-start" }, index.h("slot", { name: SLOTS.headerActionsStart }))) : null;
  }
  renderHeaderActionsEnd() {
    const { dismiss, dismissible, el, intlClose } = this;
    const text = intlClose || TEXT.close;
    const dismissibleNode = dismissible ? (index.h("calcite-action", { "aria-label": text, icon: ICONS.close, onClick: dismiss, ref: this.setDismissRef, text: text })) : null;
    const slotNode = index.h("slot", { name: SLOTS.headerActionsEnd });
    const hasEndActions = dom.getSlotted(el, SLOTS.headerActionsEnd);
    return hasEndActions || dismissibleNode ? (index.h("div", { class: { [CSS$1.headerActionsEnd]: true, [CSS$1.headerActions]: true }, key: "header-actions-end" }, slotNode, dismissibleNode)) : null;
  }
  renderMenuItems() {
    const { menuOpen, menuButtonEl, intlOptions } = this;
    return (index.h("calcite-popover", { disablePointer: true, flipPlacements: ["bottom-end", "top-end"], label: intlOptions, offsetDistance: 0, onKeyDown: this.menuActionsKeydown, open: menuOpen, placement: "bottom-end", referenceElement: menuButtonEl }, index.h("div", { class: CSS$1.menu }, index.h("slot", { name: SLOTS.headerMenuActions }))));
  }
  renderMenuButton() {
    const { menuOpen, intlOpen, intlClose } = this;
    const closeLabel = intlClose || TEXT.close;
    const openLabel = intlOpen || TEXT.open;
    const menuLabel = menuOpen ? closeLabel : openLabel;
    return (index.h("calcite-action", { "aria-label": menuLabel, class: CSS$1.menuButton, icon: ICONS.menu, onClick: this.toggleMenuOpen, onKeyDown: this.menuButtonKeyDown, ref: this.setMenuButonRef, text: menuLabel }));
  }
  renderMenu() {
    const { el } = this;
    const hasMenuItems = dom.getSlotted(el, SLOTS.headerMenuActions);
    return hasMenuItems ? (index.h("div", { class: CSS$1.menuContainer, onKeyDown: this.menuActionsContainerKeyDown }, this.renderMenuButton(), this.renderMenuItems())) : null;
  }
  renderHeaderNode() {
    const { el, showBackButton } = this;
    const backButtonNode = this.renderBackButton();
    const hasHeaderSlottedContent = dom.getSlotted(el, SLOTS.headerContent);
    const headerContentNode = hasHeaderSlottedContent
      ? this.renderHeaderSlottedContent()
      : this.renderHeaderContent();
    const actionsNodeStart = this.renderHeaderStartActions();
    const actionsNodeEnd = this.renderHeaderActionsEnd();
    const headerMenuNode = this.renderMenu();
    return actionsNodeStart ||
      headerContentNode ||
      actionsNodeEnd ||
      headerMenuNode ||
      showBackButton ? (index.h("header", { class: CSS$1.header }, backButtonNode, actionsNodeStart, headerContentNode, actionsNodeEnd, headerMenuNode)) : null;
  }
  /**
   * Allows user to override the entire footer node.
   */
  renderFooterSlottedContent() {
    const { el } = this;
    const hasFooterSlottedContent = dom.getSlotted(el, SLOTS.footer);
    return hasFooterSlottedContent ? (index.h("footer", { class: CSS$1.footer }, index.h("slot", { name: SLOTS.footer }))) : null;
  }
  renderFooterActions() {
    const { el } = this;
    const hasFooterActions = dom.getSlotted(el, SLOTS.footerActions);
    return hasFooterActions ? (index.h("footer", { class: CSS$1.footer }, index.h("slot", { name: SLOTS.footerActions }))) : null;
  }
  renderContent() {
    return (index.h("section", { class: CSS$1.contentContainer, onScroll: this.panelScrollHandler, tabIndex: 0 }, index.h("slot", null), this.renderFab()));
  }
  renderFab() {
    const { el } = this;
    const hasFab = dom.getSlotted(el, SLOTS.fab);
    return hasFab ? (index.h("div", { class: CSS$1.fabContainer }, index.h("slot", { name: SLOTS.fab }))) : null;
  }
  render() {
    const { dismissed, disabled, dismissible, el, loading, panelKeyUpHandler } = this;
    const rtl = dom.getElementDir(el) === "rtl";
    const panelNode = (index.h("article", { "aria-busy": loading.toString(), class: {
        [CSS$1.container]: true,
        [resources.CSS_UTILITY.rtl]: rtl
      }, hidden: dismissible && dismissed, onKeyUp: panelKeyUpHandler, ref: this.setContainerRef, tabIndex: dismissible ? 0 : -1 }, this.renderHeaderNode(), this.renderContent(), this.renderFooterSlottedContent() || this.renderFooterActions()));
    return (index.h(index.Host, null, loading || disabled ? (index.h("calcite-scrim", { loading: loading }, panelNode)) : (panelNode)));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "dismissed": ["dismissedHandler"]
  }; }
};
CalcitePanel.style = calcitePanelCss;

exports.calcite_flow = CalciteFlow;
exports.calcite_panel = CalcitePanel;
