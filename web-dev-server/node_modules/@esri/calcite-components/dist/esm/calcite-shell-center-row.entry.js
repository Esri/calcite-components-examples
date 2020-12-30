import { r as registerInstance, h, g as getElement, H as Host } from './index-8fd57462.js';
import { g as getElementDir, c as getSlotted } from './dom-d9ba1da4.js';
import { C as CSS_UTILITY } from './resources-f0858a17.js';

const CSS = {
  actionBarContainer: "action-bar-container",
  content: "content"
};
const SLOTS = {
  actionBar: "action-bar"
};

const calciteShellCenterRowCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;overflow:hidden;-webkit-transition:height 150ms ease-in-out;transition:height 150ms ease-in-out;background-color:transparent;border-left:1px solid var(--calcite-ui-border-3);border-right:1px solid var(--calcite-ui-border-3);--calcite-shell-center-row-height-small:33%;--calcite-shell-center-row-height-medium:70%;--calcite-shell-center-row-height-large:100%;--calcite-shell-center-row-border:1px solid var(--calcite-ui-border-3)}.content{display:-ms-flexbox;display:flex;-ms-flex:1 0 0px;flex:1 0 0;height:100%;margin:0;overflow:hidden;width:100%}.action-bar-container{display:-ms-flexbox;display:flex}:host([detached]){-webkit-animation:calcite-fade-in-up 150ms ease-in-out;animation:calcite-fade-in-up 150ms ease-in-out;border:none;border-radius:var(--calcite-border-radius);-webkit-box-shadow:var(--calcite-shadow-0);box-shadow:var(--calcite-shadow-0);margin:var(--calcite-spacing-half) var(--calcite-spacing-half) var(--calcite-spacing-plus-half)}:host([position=end]){-ms-flex-item-align:end;align-self:flex-end}:host([position=start]){-ms-flex-item-align:start;align-self:flex-start}:host([height-scale=s]){height:var(--calcite-shell-center-row-height-small)}:host([height-scale=m]){height:var(--calcite-shell-center-row-height-medium)}:host([height-scale=l]){height:var(--calcite-shell-center-row-height-large)}:host([height-scale=l][detached]){height:calc(var(--calcite-shell-center-row-height-large) - var(--calcite-spacing-double))}::slotted(calcite-panel){width:100%;height:100%}::slotted(calcite-action-bar){border-right:var(--calcite-shell-center-row-border)}::slotted(calcite-action-bar[position=end]){border-right:none;border-left:var(--calcite-shell-center-row-border)}.calcite--rtl ::slotted(calcite-action-bar){border-right:none;border-left:var(--calcite-shell-center-row-border)}.calcite--rtl ::slotted(calcite-action-bar[position=end]){border-left:none;border-right:var(--calcite-shell-center-row-border)}";

const CalciteShellCenterRow = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * This property makes the content area appear like a "floating" panel.
     */
    this.detached = false;
    /**
     * Specifies the maxiumum height of the row.
     */
    this.heightScale = "s";
    /**
     * Arranges the component depending on the elements 'dir' property.
     */
    this.position = "end";
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el } = this;
    const rtl = getElementDir(el) === "rtl";
    const contentNode = (h("div", { class: { [CSS.content]: true, [CSS_UTILITY.rtl]: rtl } }, h("slot", null)));
    const actionBar = getSlotted(el, SLOTS.actionBar);
    const actionBarNode = actionBar ? (h("div", { class: { [CSS.actionBarContainer]: true, [CSS_UTILITY.rtl]: rtl } }, h("slot", { name: SLOTS.actionBar }))) : null;
    const children = [actionBarNode, contentNode];
    if ((actionBar === null || actionBar === void 0 ? void 0 : actionBar.position) === "end") {
      children.reverse();
    }
    return h(Host, null, children);
  }
  get el() { return getElement(this); }
};
CalciteShellCenterRow.style = calciteShellCenterRowCss;

export { CalciteShellCenterRow as calcite_shell_center_row };
