import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-8fd57462.js';
import { a as getElementTheme, c as getSlotted, g as getElementDir } from './dom-d9ba1da4.js';
import { g as guid } from './guid-09142681.js';
import { C as CSS_UTILITY } from './resources-f0858a17.js';

const CSS = {
  article: "article",
  content: "content",
  headerContainer: "header-container",
  icon: "icon",
  toggle: "toggle",
  toggleIcon: "toggle-icon",
  title: "title",
  heading: "heading",
  header: "header",
  button: "button",
  summary: "summary",
  controlContainer: "control-container"
};
const TEXT = {
  collapse: "Collapse",
  expand: "Expand",
  loading: "Loading"
};
const SLOTS = {
  icon: "icon",
  control: "control"
};

const calciteBlockCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-direction:column;flex-direction:column;padding:0;border-bottom:1px solid var(--calcite-ui-border-3);-webkit-transition:margin 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:margin 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out;transition:margin 150ms ease-in-out, box-shadow 150ms ease-in-out;transition:margin 150ms ease-in-out, box-shadow 150ms ease-in-out, -webkit-box-shadow 150ms ease-in-out}.header{margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;color:var(--calcite-ui-text-2);fill:var(--calcite-ui-text-2)}.heading{padding:0;margin:0;font-weight:var(--calcite-ui-text-weight-demi);line-height:1.5}.header .heading{-ms-flex:1 0 auto;flex:1 0 auto;padding:var(--calcite-spacing-half) var(--calcite-spacing-half)}h1.heading{font-size:1.25rem}h2.heading{font-size:1.125rem}h3.heading{font-size:1rem}h4.heading,h5.heading{font-size:0.875rem}.header{-ms-flex-pack:start;justify-content:flex-start;padding:0}.header,.toggle{grid-area:header}.header-container{display:grid;grid-template:auto/auto 1fr auto;grid-template-areas:\"handle header control\";grid-column:header-start/control-end;grid-row:1/2;-ms-flex-align:stretch;align-items:stretch}.header-container>.header{padding:var(--calcite-spacing-three-quarters) 0}.toggle{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin:0;padding:var(--calcite-spacing-three-quarters) 0;background-color:transparent;border:none;cursor:pointer;font-family:inherit;text-align:unset;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0;padding:0 var(--calcite-spacing-three-quarters)}.header .title .heading{padding:0;color:var(--calcite-ui-text-3);-webkit-transition:color 150ms ease-in-out;transition:color 150ms ease-in-out;font-size:0.875rem;word-wrap:break-word;word-break:break-word}.summary{color:var(--calcite-ui-text-3);padding:0;font-size:0.75rem;word-wrap:break-word;word-break:break-word}.icon{margin-left:var(--calcite-spacing-three-quarters)}.toggle-icon{fill:currentColor;-ms-flex:0 0 var(--calcite-icon-size);flex:0 0 var(--calcite-icon-size);margin:0 var(--calcite-spacing) 0 0}.content{padding:var(--calcite-spacing-half) var(--calcite-spacing-three-quarters);position:relative}.control-container{grid-area:control;display:-ms-flexbox;display:flex;margin:0}calcite-scrim{pointer-events:none}.calcite--rtl .icon{margin-left:0;margin-right:var(--calcite-spacing-three-quarters)}:host([open]){margin-top:var(--calcite-spacing);margin-bottom:var(--calcite-spacing);-webkit-box-shadow:1px 0 0 var(--calcite-ui-border-1) inset;box-shadow:1px 0 0 var(--calcite-ui-border-1) inset}:host([open]).calcite--rtl{-webkit-box-shadow:-1px 0 0 var(--calcite-ui-border-1) inset;box-shadow:-1px 0 0 var(--calcite-ui-border-1) inset}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}:host([disabled]){pointer-events:none;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none}:host([disabled]) .header-container{opacity:var(--calcite-ui-opacity-disabled)}:host([drag-handle]) .title{padding-left:var(--calcite-spacing-quarter)}:host([drag-handle]) .icon{margin-left:0;margin-right:var(--calcite-spacing-half)}:host([drag-handle]) .calcite--rtl .title{padding-left:0;padding-right:var(--calcite-spacing-quarter)}:host([drag-handle]) .calcite--rtl .icon{margin-right:0;margin-left:var(--calcite-spacing-quarter)}";

const CalciteBlock = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteBlockToggle = createEvent(this, "calciteBlockToggle", 7);
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * When true, this block will be collapsible.
     */
    this.collapsible = false;
    /**
     * When true, disabled prevents interaction. This state shows items with lower opacity/grayed.
     */
    this.disabled = false;
    /**
     * When true, displays a drag handle in the header.
     */
    this.dragHandle = false;
    /** string to override English loading text */
    this.intlLoading = TEXT.loading;
    /**
     * When true, content is waiting to be loaded. This state shows a busy indicator.
     */
    this.loading = false;
    /**
     * When true, the block's content will be displayed.
     */
    this.open = false;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.onHeaderClick = () => {
      this.open = !this.open;
      this.calciteBlockToggle.emit();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  renderScrim() {
    const { disabled, loading, el } = this;
    const defaultSlot = h("slot", null);
    return loading || disabled ? (h("calcite-scrim", { loading: loading, theme: getElementTheme(el) }, defaultSlot)) : (defaultSlot);
  }
  render() {
    const { collapsible, disabled, el, heading, intlCollapse, intlExpand, loading, open, summary, intlLoading } = this;
    const toggleLabel = open ? intlCollapse || TEXT.collapse : intlExpand || TEXT.expand;
    const hasIcon = getSlotted(el, SLOTS.icon);
    const headerContent = (h("header", { class: CSS.header }, hasIcon ? (h("div", { class: CSS.icon }, h("slot", { name: SLOTS.icon }))) : null, h("div", { class: CSS.title }, h("h4", { class: CSS.heading }, heading), summary ? h("div", { class: CSS.summary }, summary) : null)));
    const hasControl = getSlotted(el, SLOTS.control);
    const headerNode = (h("div", { class: CSS.headerContainer }, this.dragHandle ? h("calcite-handle", null) : null, collapsible ? (h("button", { "aria-label": toggleLabel, class: CSS.toggle, onClick: this.onHeaderClick, title: toggleLabel }, headerContent)) : (headerContent), loading ? (h("calcite-loader", { inline: true, "is-active": true, label: intlLoading })) : hasControl ? (h("div", { class: CSS.controlContainer }, h("slot", { name: SLOTS.control }))) : null));
    const rtl = getElementDir(el) === "rtl";
    return (h(Host, { tabIndex: disabled ? -1 : null }, h("article", { "aria-busy": loading.toString(), "aria-expanded": collapsible ? open.toString() : null, class: {
        [CSS.article]: true,
        [CSS_UTILITY.rtl]: rtl
      } }, headerNode, h("div", { class: CSS.content, hidden: !open }, this.renderScrim()))));
  }
  get el() { return getElement(this); }
};
CalciteBlock.style = calciteBlockCss;

const CSS$1 = {
  content: "content",
  toggle: "toggle",
  toggleSwitch: "toggle--switch",
  sectionHeader: "section-header",
  sectionHeaderText: "section-header__text"
};
const TEXT$1 = {
  collapse: "Collapse",
  expand: "Expand"
};
const ICONS = {
  menuOpen: "chevron-down",
  menuClosedLeft: "chevron-left",
  menuClosedRight: "chevron-right"
};

const calciteBlockSectionCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}:host{-webkit-box-sizing:border-box;box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:0.875rem;line-height:1.5}:host *{-webkit-box-sizing:border-box;box-sizing:border-box}:root{--calcite-popper-transition:150ms ease-in-out}:host([hidden]){display:none}:host{display:block}:host([open]){border-bottom:1px solid var(--calcite-ui-border-3)}:host(:last-child){border-bottom:none}.toggle{background-color:transparent;border:none;color:var(--calcite-ui-text-2);font-family:Avenir Next, Avenir, Helvetica Neue, sans-serif;font-weight:400;width:100%}.toggle--switch,.section-header{-ms-flex-align:center;align-items:center;cursor:pointer;display:-ms-flexbox;display:flex;margin:var(--calcite-spacing-quarter) 0;padding:var(--calcite-spacing-half) 0;-webkit-user-select:none;-ms-user-select:none;-moz-user-select:none;user-select:none;font-size:0.875rem;outline-offset:0;outline-color:transparent;-webkit-transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out;transition:outline-offset 100ms ease-in-out, outline-color 100ms ease-in-out}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-blue-1);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header__text{margin:0 var(--calcite-spacing-quarter)}.toggle--switch{-ms-flex-pack:justify;justify-content:space-between}.toggle--switch calcite-switch{pointer-events:none;margin:0 0 0 var(--calcite-spacing-half)}.calcite--rtl .toggle--switch calcite-switch{margin-left:0;margin-right:var(--calcite-spacing-half)}";

const CalciteBlockSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.calciteBlockSectionToggle = createEvent(this, "calciteBlockSectionToggle", 7);
    /**
     * When true, the block's section content will be displayed.
     */
    this.open = false;
    /**
     * This property determines the look of the section toggle.
     * If the value is "switch", a toggle-switch will be displayed.
     * If the value is "button", a clickable header is displayed.
     *
     * @todo revisit doc
     */
    this.toggleDisplay = "button";
    this.guid = `calcite-block-section-${guid()}`;
    this.toggleSection = () => {
      this.open = !this.open;
      this.calciteBlockSectionToggle.emit();
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  handleHeaderLabelKeyDown(event) {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.click();
    }
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { el, guid: id, intlCollapse, intlExpand, open, text, toggleDisplay } = this;
    const dir = getElementDir(el);
    const arrowIcon = open
      ? ICONS.menuOpen
      : dir === "rtl"
        ? ICONS.menuClosedLeft
        : ICONS.menuClosedRight;
    const toggleLabel = open ? intlCollapse || TEXT$1.collapse : intlExpand || TEXT$1.expand;
    const labelId = `${id}__label`;
    const headerNode = toggleDisplay === "switch" ? (h("label", { "aria-label": toggleLabel, class: {
        [CSS$1.toggle]: true,
        [CSS$1.toggleSwitch]: true
      }, id: labelId, onKeyDown: this.handleHeaderLabelKeyDown, tabIndex: 0, title: toggleLabel }, text, h("calcite-switch", { "aria-labelledby": labelId, onCalciteSwitchChange: this.toggleSection, scale: "s", switched: open, tabIndex: -1 }))) : (h("button", { "aria-label": toggleLabel, class: {
        [CSS$1.sectionHeader]: true,
        [CSS$1.toggle]: true
      }, name: toggleLabel, onClick: this.toggleSection, onKeyDown: this.handleHeaderLabelKeyDown }, h("calcite-icon", { icon: arrowIcon, scale: "s" }), h("span", { class: CSS$1.sectionHeaderText }, text)));
    return (h("section", { "aria-expanded": open.toString(), class: { [CSS_UTILITY.rtl]: dir === "rtl" } }, headerNode, h("div", { class: CSS$1.content, hidden: !open }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
CalciteBlockSection.style = calciteBlockSectionCss;

export { CalciteBlock as calcite_block, CalciteBlockSection as calcite_block_section };
