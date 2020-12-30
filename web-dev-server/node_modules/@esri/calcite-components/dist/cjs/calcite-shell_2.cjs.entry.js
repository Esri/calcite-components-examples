'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a9091fa4.js');
const dom = require('./dom-031e5053.js');

const CSS = {
  main: "main",
  mainReversed: "main--reversed",
  content: "content",
  footer: "footer"
};
const SLOTS = {
  centerRow: "center-row",
  primaryPanel: "primary-panel",
  contextualPanel: "contextual-panel",
  header: "shell-header",
  footer: "shell-footer"
};

const calciteShellCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{width:100%;height:100%;position:absolute;top:0;bottom:0;left:0;right:0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;--calcite-shell-tip-spacing:26vw}.main{height:100%;width:100%;-ms-flex:1 1 auto;flex:1 1 auto;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;position:relative;border-top:1px solid var(--calcite-ui-border-3);border-bottom:1px solid var(--calcite-ui-border-3);-ms-flex-pack:justify;justify-content:space-between;overflow:hidden}.main--reversed{-ms-flex-direction:row-reverse;flex-direction:row-reverse}.content{height:100%;width:100%;position:absolute;left:0;right:0;bottom:0;top:0;z-index:0}::slotted(.header .heading){font-weight:var(--calcite-ui-text-weight);font-size:0.875rem;line-height:1.5}::slotted(calcite-shell-panel),::slotted(calcite-shell-center-row){position:relative;z-index:1}::slotted(calcite-tip-manager){-webkit-animation:calcite-fade-in-up 150ms ease-in-out;animation:calcite-fade-in-up 150ms ease-in-out;border-radius:var(--calcite-border-radius);bottom:var(--calcite-spacing-plus-half);-webkit-box-shadow:var(--calcite-shadow-2);box-shadow:var(--calcite-shadow-2);-webkit-box-sizing:border-box;box-sizing:border-box;left:var(--calcite-shell-tip-spacing);position:absolute;right:var(--calcite-shell-tip-spacing);z-index:2}.footer{padding:var(--calcite-spacing-half) var(--calcite-spacing)}";

const CalciteShell = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderHeader() {
    const hasHeader = !!dom.getSlotted(this.el, SLOTS.header);
    return hasHeader ? index.h("slot", { name: SLOTS.header }) : null;
  }
  renderContent() {
    return (index.h("div", { class: CSS.content }, index.h("slot", null)));
  }
  renderFooter() {
    const hasFooter = !!dom.getSlotted(this.el, SLOTS.footer);
    return hasFooter ? (index.h("div", { class: CSS.footer }, index.h("slot", { name: SLOTS.footer }))) : null;
  }
  renderMain() {
    const primaryPanel = dom.getSlotted(this.el, SLOTS.primaryPanel);
    const mainClasses = {
      [CSS.main]: true,
      [CSS.mainReversed]: (primaryPanel === null || primaryPanel === void 0 ? void 0 : primaryPanel.position) === "end"
    };
    return (index.h("div", { class: mainClasses }, index.h("slot", { name: SLOTS.primaryPanel }), this.renderContent(), index.h("slot", { name: SLOTS.centerRow }), index.h("slot", { name: SLOTS.contextualPanel })));
  }
  render() {
    return (index.h(index.Host, null, this.renderHeader(), this.renderMain(), this.renderFooter()));
  }
  get el() { return index.getElement(this); }
};
CalciteShell.style = calciteShellCss;

const CSS$1 = {
  content: "content",
  contentDetached: "content--detached"
};
const SLOTS$1 = {
  actionBar: "action-bar"
};

const calciteShellPanelCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex-align:stretch;align-items:stretch;background-color:transparent;pointer-events:none;--calcite-shell-panel-detached-max-height:unset}::slotted(calcite-panel),::slotted(calcite-flow){height:100%;max-height:unset;max-width:unset;width:100%}.content{-ms-flex-align:stretch;align-items:stretch;-ms-flex-item-align:stretch;align-self:stretch;background-color:var(--calcite-ui-background);-ms-flex-flow:column nowrap;flex-flow:column nowrap;display:-ms-flexbox;display:flex;padding:0;pointer-events:auto;width:var(--calcite-shell-panel-width);max-width:var(--calcite-shell-panel-max-width);min-width:var(--calcite-shell-panel-min-width);-webkit-transition:max-height 150ms ease-in-out, max-width 150ms ease-in-out;transition:max-height 150ms ease-in-out, max-width 150ms ease-in-out}:host([width-scale=s]) .content{--calcite-shell-panel-width:12vw;--calcite-shell-panel-max-width:300px;--calcite-shell-panel-min-width:150px}:host([width-scale=m]) .content{--calcite-shell-panel-width:20vw;--calcite-shell-panel-max-width:420px;--calcite-shell-panel-min-width:240px}:host([width-scale=l]) .content{--calcite-shell-panel-width:45vw;--calcite-shell-panel-max-width:680px;--calcite-shell-panel-min-width:340px}:host([detached-height-scale=s]) .content--detached{--calcite-shell-panel-detached-max-height:40vh}:host([detached-height-scale=m]) .content--detached{--calcite-shell-panel-detached-max-height:60vh}:host([detached-height-scale=l]) .content--detached{--calcite-shell-panel-detached-max-height:80vh}.content--detached{border-radius:var(--calcite-border-radius);-webkit-box-shadow:var(--calcite-shadow-0);box-shadow:var(--calcite-shadow-0);height:auto;margin:var(--calcite-spacing-half) var(--calcite-spacing-half) auto;max-height:var(--calcite-shell-panel-detached-max-height);overflow:hidden}.content--detached ::slotted(calcite-panel),.content--detached ::slotted(calcite-flow){max-height:unset}.content[hidden]{display:none}:host([position=start]) slot[name=action-bar]::slotted(calcite-action-bar){border-right:1px solid var(--calcite-ui-border-3)}:host([position=end]) slot[name=action-bar]::slotted(calcite-action-bar){border-left:1px solid var(--calcite-ui-border-3)}";

const CalciteShellPanel = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteShellPanelToggle = index.createEvent(this, "calciteShellPanelToggle", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * Hide the content panel.
     */
    this.collapsed = false;
    /**
     * This property makes the content area appear like a "floating" panel.
     */
    this.detached = false;
    /**
     * Specifies the maxiumum height of the contents when detached.
     */
    this.detachedHeightScale = "l";
    /**
     * This sets width of the content area.
     */
    this.widthScale = "m";
  }
  watchHandler() {
    this.calciteShellPanelToggle.emit();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { collapsed, detached, position } = this;
    const contentNode = (index.h("div", { class: { [CSS$1.content]: true, [CSS$1.contentDetached]: detached }, hidden: collapsed }, index.h("slot", null)));
    const actionBarNode = index.h("slot", { name: SLOTS$1.actionBar });
    const mainNodes = [actionBarNode, contentNode];
    if (position === "end") {
      mainNodes.reverse();
    }
    return index.h(index.Host, null, mainNodes);
  }
  static get watchers() { return {
    "collapsed": ["watchHandler"]
  }; }
};
CalciteShellPanel.style = calciteShellPanelCss;

exports.calcite_shell = CalciteShell;
exports.calcite_shell_panel = CalciteShellPanel;
