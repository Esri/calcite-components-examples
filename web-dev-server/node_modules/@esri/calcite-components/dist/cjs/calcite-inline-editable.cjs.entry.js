'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a9091fa4.js');
const dom = require('./dom-031e5053.js');

const TEXT = {
  intlEnablingEditing: "Click to edit",
  intlCancelEditing: "Cancel",
  intlConfirmChanges: "Save"
};

const calciteInlineEditableCss = "@-webkit-keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@keyframes calcite-fade-in{0%{opacity:0}100%{opacity:1}}@-webkit-keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-down{0%{opacity:0;-webkit-transform:translate3D(0, -5px, 0);transform:translate3D(0, -5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@keyframes calcite-fade-in-up{0%{opacity:0;-webkit-transform:translate3D(0, 5px, 0);transform:translate3D(0, 5px, 0)}100%{opacity:1;-webkit-transform:translate3D(0, 0, 0);transform:translate3D(0, 0, 0)}}@-webkit-keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}@keyframes calcite-fade-in-scale{0%{opacity:0;-webkit-transform:scale3D(0.95, 0.95, 1);transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;-webkit-transform:scale3D(1, 1, 1);transform:scale3D(1, 1, 1)}}.sc-calcite-inline-editable:root{--calcite-popper-transition:150ms ease-in-out}[hidden].sc-calcite-inline-editable-h{display:none}[scale=s].sc-calcite-inline-editable-h .calcite-inline-editable-controls-wrapper.sc-calcite-inline-editable{height:32px}[scale=m].sc-calcite-inline-editable-h .calcite-inline-editable-controls-wrapper.sc-calcite-inline-editable{height:44px}[scale=l].sc-calcite-inline-editable-h .calcite-inline-editable-controls-wrapper.sc-calcite-inline-editable{height:56px}.sc-calcite-inline-editable-h:not([editing-enabled]) .calcite-inline-editable-wrapper.sc-calcite-inline-editable:hover{background:var(--calcite-ui-foreground-2)}.calcite-inline-editable-wrapper.sc-calcite-inline-editable{-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out;background:var(--calcite-ui-foreground-1)}.calcite-inline-editable-wrapper.sc-calcite-inline-editable .calcite-inline-editable-input-wrapper.sc-calcite-inline-editable{-ms-flex:1;flex:1}.calcite-inline-editable-controls-wrapper.sc-calcite-inline-editable{display:-ms-flexbox;display:flex}.calcite-inline-editable-cancel-editing-button-wrapper.sc-calcite-inline-editable{border:1px solid var(--calcite-ui-border-1);border-left:none;border-right:none}[disabled].sc-calcite-inline-editable-h .calcite-inline-editable-cancel-editing-button-wrapper.sc-calcite-inline-editable{border-color:var(--calcite-ui-border-2)}.sc-calcite-inline-editable-h.sc-calcite-inline-editable-s .calcite-input-element-wrapper textarea,.sc-calcite-inline-editable-h.sc-calcite-inline-editable-s .calcite-input-element-wrapper input{-webkit-transition:150ms ease-in-out;transition:150ms ease-in-out}.sc-calcite-inline-editable-h:not([editing-enabled]):not([theme=dark]).sc-calcite-inline-editable-s .calcite-input-element-wrapper{background:transparent}.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .sc-calcite-input{display:none}.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper{display:-ms-flexbox;display:flex;cursor:pointer}.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper textarea,.sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper input{border-color:transparent;padding-left:0;cursor:pointer;display:-ms-flexbox;display:flex}.sc-calcite-inline-editable-h:not([editing-enabled]):hover.sc-calcite-inline-editable-s textarea,.sc-calcite-inline-editable-h:not([editing-enabled]):hover.sc-calcite-inline-editable-s input{background:var(--calcite-ui-foreground-2)}.sc-calcite-inline-editable-h[dir=rtl]:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper textarea,.sc-calcite-inline-editable-h[dir=rtl]:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper input{padding-right:0;padding-left:unset}[dir=rtl] .sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper textarea,[dir=rtl] .sc-calcite-inline-editable-h:not([editing-enabled]).sc-calcite-inline-editable-s .calcite-input-element-wrapper input{padding-right:0;padding-left:unset}";

const CalciteInlineEditable = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.calciteInlineEditableEditingCancel = index.createEvent(this, "calciteInlineEditableEditingCancel", 7);
    this.calciteInlineEditableChangesConfirm = index.createEvent(this, "calciteInlineEditableChangesConfirm", 7);
    this.calciteInlineEditableEnableEditingChange = index.createEvent(this, "calciteInlineEditableEnableEditingChange", 7);
    //--------------------------------------------------------------------------
    //
    //  Props
    //
    //--------------------------------------------------------------------------
    /** specify whether editing can be enabled */
    this.disabled = false;
    /** specify whether the wrapped input element is editable, defaults to false */
    this.editingEnabled = false;
    /** specify whether the confirm button should display a loading state, defaults to false */
    this.loading = false;
    /** specify whether save/cancel controls should be displayed when editingEnabled is true, defaults to false */
    this.controls = false;
    /** specify text to be user for the enable editing button's aria-label, defaults to `Click to edit` */
    this.intlEnableEditing = TEXT.intlEnablingEditing;
    /** specify text to be user for the cancel editing button's aria-label, defaults to `Cancel` */
    this.intlCancelEditing = TEXT.intlCancelEditing;
    /** specify text to be user for the confirm changes button's aria-label, defaults to `Save` */
    this.intlConfirmChanges = TEXT.intlConfirmChanges;
    this.enableEditing = () => {
      this.htmlInput.tabIndex = undefined;
      this.valuePriorToEditing = this.inputElement.value;
      this.editingEnabled = true;
      this.inputElement.setFocus();
      this.calciteInlineEditableEnableEditingChange.emit();
    };
    this.disableEditing = () => {
      this.htmlInput.tabIndex = -1;
      this.editingEnabled = false;
    };
    this.cancelEditing = () => {
      this.inputElement.value = this.valuePriorToEditing;
      this.disableEditing();
      setTimeout(() => this.enableEditingButton.setFocus(), 100);
      this.calciteInlineEditableEditingCancel.emit();
    };
    this.escapeKeyHandler = async (e) => {
      if (e.key !== "Escape")
        return;
      this.cancelEditing();
    };
    this.cancelEditingHandler = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.cancelEditing();
    };
    this.enableEditingHandler = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (this.disabled)
        return;
      if (!this.editingEnabled)
        this.enableEditing();
    };
    this.confirmChangesHandler = async (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.calciteInlineEditableChangesConfirm.emit();
      try {
        if (this.afterConfirm) {
          this.loading = true;
          await this.afterConfirm();
          this.disableEditing();
        }
      }
      catch (e) {
      }
      finally {
        this.loading = false;
      }
    };
  }
  disabledWatcher(disabled) {
    this.inputElement.disabled = disabled;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  componentWillLoad() {
    this.inputElement = this.el.querySelector("calcite-input");
    this.inputElement.disabled = this.disabled;
    this.scale =
      this.scale || this.inputElement.scale || dom.getElementProp(this.el, "scale", undefined);
    this.theme =
      this.theme || this.inputElement.theme || dom.getElementProp(this.el, "theme", undefined);
  }
  componentDidLoad() {
    this.htmlInput = this.inputElement.querySelector("input");
    if (!this.editingEnabled)
      this.htmlInput.tabIndex = -1;
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "calcite-inline-editable-wrapper", onClick: this.enableEditingHandler, onKeyDown: this.escapeKeyHandler }, index.h("div", { class: "calcite-inline-editable-input-wrapper" }, index.h("slot", null)), index.h("div", { class: "calcite-inline-editable-controls-wrapper" }, !this.editingEnabled && (index.h("calcite-button", { appearance: "transparent", "aria-label": this.intlEnableEditing, class: "calcite-inline-editable-enable-editing-button", color: "dark", disabled: this.disabled, iconStart: "pencil", onClick: this.enableEditingHandler, ref: (el) => (this.enableEditingButton = el), scale: this.scale, theme: this.theme })), this.shouldShowControls && [
      index.h("div", { class: "calcite-inline-editable-cancel-editing-button-wrapper" }, index.h("calcite-button", { appearance: "transparent", "aria-label": this.intlCancelEditing, class: "calcite-inline-editable-cancel-editing-button", color: "dark", disabled: this.disabled, iconStart: "x", onClick: this.cancelEditingHandler, scale: this.scale, theme: this.theme })),
      index.h("calcite-button", { appearance: "solid", "aria-label": this.intlConfirmChanges, class: "calcite-inline-editable-confirm-changes-button", color: "blue", disabled: this.disabled, iconStart: "check", loading: this.loading, onClick: this.confirmChangesHandler, scale: this.scale, theme: this.theme })
    ]))));
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  blurHandler() {
    if (!this.controls)
      this.disableEditing();
  }
  handleLabelFocus(e) {
    const htmlTarget = e.target;
    if (!(htmlTarget.parentElement.tagName === "LABEL" ||
      htmlTarget.parentElement.tagName === "CALCITE-LABEL"))
      return;
    if (!htmlTarget.parentElement.contains(this.el))
      return;
    e.preventDefault();
    e.stopPropagation();
    if (this.editingEnabled) {
      this.inputElement.setFocus();
    }
    else {
      this.enableEditingButton.setFocus();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  get shouldShowControls() {
    return this.editingEnabled && this.controls;
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledWatcher"]
  }; }
};
CalciteInlineEditable.style = calciteInlineEditableCss;

exports.calcite_inline_editable = CalciteInlineEditable;
