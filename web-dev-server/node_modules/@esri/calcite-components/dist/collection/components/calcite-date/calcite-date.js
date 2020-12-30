import { Component, h, Prop, Event, Element, Host, State, Listen, Build, Watch, Method } from "@stencil/core";
import { getLocaleData } from "./utils";
import { getElementDir } from "../../utils/dom";
import { dateFromRange, inRange, dateFromISO, dateToISO, parseDateString, sameDate, getDaysDiff } from "../../utils/date";
import { getKey } from "../../utils/key";
import { TEXT } from "./calcite-date-resources";
import { createPopper, updatePopper, CSS as PopperCSS } from "../../utils/popper";
const DEFAULT_PLACEMENT = "bottom-start";
export class CalciteDate {
  constructor() {
    /** Expand or collapse when calendar does not have input */
    this.active = false;
    /** Localized string for "previous month" (used for aria label) */
    this.intlPrevMonth = TEXT.prevMonth;
    /** Localized string for "next month" (used for aria label) */
    this.intlNextMonth = TEXT.nextMonth;
    /** BCP 47 language tag for desired language and country format */
    this.locale = document.documentElement.lang || "en-US";
    /** Show only calendar popup */
    this.noCalendarInput = false;
    /** specify the scale of the date picker */
    this.scale = "m";
    /** Range mode activation */
    this.range = false;
    this.proximitySelection = true;
    /** Layout */
    this.layout = "horizontal";
    /**
     * In range mode, indicates which input was is focused on
     */
    this.focusedInput = "start";
    this.hasShadow = Build.isBrowser && !!document.head.attachShadow;
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    this.setMenuEl = (el) => {
      if (el) {
        this.menuEl = el;
      }
    };
    this.setStartWrapper = (el) => {
      this.startWrapper = el;
    };
    this.setEndWrapper = (el) => {
      this.endWrapper = el;
    };
  }
  activeHandler() {
    this.reposition();
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  focusOutHandler() {
    this.reset();
  }
  /**
   * Blur doesn't fire properly when there is no shadow dom (ege/IE11)
   * Check if the focused element is inside the date picker, if not close
   */
  focusInHandler(e) {
    if (!this.hasShadow && !this.el.contains(e.srcElement)) {
      this.reset();
    }
  }
  keyDownHandler(e) {
    if (getKey(e.key) === "Escape") {
      this.reset();
    }
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  async reposition() {
    const { popper, menuEl } = this;
    const modifiers = this.getModifiers();
    popper && !this.range
      ? updatePopper({
        el: menuEl,
        modifiers,
        placement: DEFAULT_PLACEMENT,
        popper
      })
      : this.createPopper();
  }
  focusedHandler() {
    this.reposition();
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.loadLocaleData();
    if (this.value) {
      this.valueAsDate = dateFromISO(this.value);
    }
    if (this.start) {
      this.setStartAsDate(dateFromISO(this.start));
    }
    if (this.end) {
      this.setEndAsDate(dateFromISO(this.end));
    }
    this.createPopper();
  }
  disconnectedCallback() {
    this.destroyPopper();
  }
  render() {
    var _a, _b, _c;
    const min = dateFromISO(this.min);
    const max = dateFromISO(this.max);
    const date = dateFromRange(this.range ? this.startAsDate : this.valueAsDate, min, max);
    const activeStartDate = this.range
      ? this.getActiveStartDate(date, min, max)
      : this.getActiveDate(date, min, max);
    let activeDate = activeStartDate;
    const endDate = this.range ? dateFromRange(this.endAsDate, min, max) : null;
    const activeEndDate = this.getActiveEndDate(endDate, min, max);
    if ((this.focusedInput === "end" ||
      (this.noCalendarInput &&
        ((_a = this.hoverRange) === null || _a === void 0 ? void 0 : _a.focused) === "end" &&
        (this.proximitySelection || endDate))) &&
      activeEndDate) {
      activeDate = activeEndDate;
    }
    if (this.range && this.noCalendarInput && this.mostRecentRangeValue) {
      activeDate = this.mostRecentRangeValue;
    }
    const formattedEndDate = endDate ? endDate.toLocaleDateString(this.locale) : "";
    const formattedDate = date ? date.toLocaleDateString(this.locale) : "";
    const minDate = this.focusedInput === "start" ? min : date || min;
    const maxDate = this.focusedInput === "start" && !this.noCalendarInput ? endDate || max : max;
    const dir = getElementDir(this.el);
    return (h(Host, { dir: dir, role: "application" }, this.localeData && (h("div", { "aria-expanded": this.active.toString(), class: "input-container", role: "application" },
      !this.noCalendarInput && (h("div", { class: "input-wrapper", ref: this.setStartWrapper },
        h("calcite-input", { class: `input ${this.layout === "vertical" && this.range ? `no-bottom-border` : ``}`, icon: "calendar", "number-button-type": "none", onCalciteInputBlur: (e) => this.blur(e.detail), onCalciteInputFocus: () => {
            this.active = true;
            this.focusedInput = "start";
          }, onCalciteInputInput: (e) => this.input(e.detail.value), placeholder: (_b = this.localeData) === null || _b === void 0 ? void 0 : _b.placeholder, scale: this.scale, type: "text", value: formattedDate }))),
      this.renderCalendar(activeDate, dir, maxDate, minDate, date, endDate),
      this.range && !this.noCalendarInput && this.layout === "horizontal" && (h("div", { class: "horizontal-arrow-container" },
        h("calcite-icon", { flipRtl: true, icon: "arrow-right", scale: "s" }))),
      this.range && !this.noCalendarInput && this.layout === "vertical" && (h("div", { class: "vertical-arrow-container" },
        h("calcite-icon", { icon: "arrow-down", scale: "s" }))),
      this.range && !this.noCalendarInput && (h("div", { class: "input-wrapper", ref: this.setEndWrapper },
        h("calcite-input", { class: "input", icon: "calendar", "number-button-type": "none", onCalciteInputBlur: (e) => this.blur(e.detail), onCalciteInputFocus: () => {
            this.active = true;
            this.focusedInput = "end";
          }, onCalciteInputInput: (e) => this.input(e.detail.value), placeholder: (_c = this.localeData) === null || _c === void 0 ? void 0 : _c.placeholder, ref: (el) => (this.endInput = el), scale: this.scale, type: "text", value: formattedEndDate })))))));
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
  createPopper() {
    this.destroyPopper();
    const { menuEl, startWrapper, endWrapper } = this;
    const modifiers = this.getModifiers();
    this.popper = createPopper({
      el: menuEl,
      modifiers,
      placement: DEFAULT_PLACEMENT,
      referenceEl: this.focusedInput === "end" || this.layout === "vertical" ? endWrapper : startWrapper
    });
  }
  destroyPopper() {
    const { popper } = this;
    if (popper) {
      popper.destroy();
    }
    this.popper = null;
  }
  valueWatcher(value) {
    this.valueAsDate = dateFromISO(value);
  }
  startWatcher(start) {
    this.setStartAsDate(dateFromISO(start));
  }
  endWatcher(end) {
    this.setEndAsDate(dateFromISO(end));
  }
  async loadLocaleData() {
    const { locale } = this;
    this.localeData = await getLocaleData(locale);
  }
  /**
   * Render calcite-date-month-header and calcite-date-month
   */
  renderCalendar(activeDate, dir, maxDate, minDate, date, endDate) {
    return (this.localeData && (h("div", { "aria-hidden": (!this.active).toString(), class: "menu-container", ref: this.setMenuEl },
      h("div", { class: {
          ["calendar-picker-wrapper"]: true,
          ["calendar-picker-wrapper--end"]: this.focusedInput === "end",
          [PopperCSS.animation]: true,
          [PopperCSS.animationActive]: this.active
        } },
        h("calcite-date-month-header", { activeDate: activeDate, dir: dir, intlNextMonth: this.intlNextMonth, intlPrevMonth: this.intlPrevMonth, localeData: this.localeData, max: maxDate, min: minDate, onCalciteDateSelect: (e) => {
            const date = new Date(e.detail);
            if (!this.range) {
              this.activeDate = date;
              this.handleDateChange(e);
            }
            else {
              if (this.focusedInput === "start") {
                this.activeStartDate = date;
              }
              else if (this.focusedInput === "end") {
                this.activeEndDate = date;
              }
              this.mostRecentRangeValue = date;
            }
          }, scale: this.scale, selectedDate: this.focusedInput === "start" ? date : endDate || new Date() }),
        h("calcite-date-month", { activeDate: activeDate, dir: dir, endDate: this.range ? endDate : undefined, hoverRange: this.hoverRange, localeData: this.localeData, max: maxDate, min: minDate, onCalciteActiveDateChange: (e) => {
            const date = new Date(e.detail);
            if (!this.range) {
              this.activeDate = date;
            }
            else {
              if (this.focusedInput === "start") {
                this.activeStartDate = date;
              }
              else if (this.focusedInput === "end") {
                this.activeEndDate = date;
              }
              this.mostRecentRangeValue = date;
            }
          }, onCalciteDateHover: (e) => {
            if (!this.startAsDate) {
              this.hoverRange = undefined;
              return this.hoverRange;
            }
            const date = new Date(e.detail);
            this.hoverRange = {
              focused: this.focusedInput,
              start: this.startAsDate,
              end: this.endAsDate
            };
            if (!this.noCalendarInput) {
              if (this.focusedInput === "start") {
                this.hoverRange.start = date;
              }
              else {
                this.hoverRange.end = date;
              }
            }
            else {
              if (this.proximitySelection) {
                if (this.endAsDate) {
                  const startDiff = getDaysDiff(date, this.startAsDate);
                  const endDiff = getDaysDiff(date, this.endAsDate);
                  if (startDiff < endDiff) {
                    this.hoverRange.start = date;
                    this.hoverRange.focused = "start";
                  }
                  else {
                    this.hoverRange.end = date;
                    this.hoverRange.focused = "end";
                  }
                }
                else {
                  if (date < this.startAsDate) {
                    this.hoverRange = {
                      focused: "start",
                      start: date,
                      end: this.startAsDate
                    };
                  }
                  else {
                    this.hoverRange.end = date;
                    this.hoverRange.focused = "end";
                  }
                }
              }
              else {
                if (!this.endAsDate) {
                  if (date < this.startAsDate) {
                    this.hoverRange = {
                      focused: "start",
                      start: date,
                      end: this.startAsDate
                    };
                  }
                  else {
                    this.hoverRange.end = date;
                    this.hoverRange.focused = "end";
                  }
                }
                else {
                  this.hoverRange = undefined;
                }
              }
            }
          }, onCalciteDateMouseOut: (_e) => {
            if (this.hoverRange) {
              this.hoverRange = undefined;
            }
          }, onCalciteDateSelect: (e) => this.handleDateChange(e, true), scale: this.scale, selectedDate: this.focusedInput === "start" ? date : endDate, startDate: this.range ? date : undefined })))));
  }
  /**
   * Update date instance of start if valid
   */
  setStartAsDate(startDate) {
    this.startAsDate = startDate;
    this.mostRecentRangeValue = this.startAsDate;
  }
  /**
   * Update date instance of end if valid
   */
  setEndAsDate(endDate) {
    this.endAsDate = endDate;
    this.mostRecentRangeValue = this.endAsDate;
  }
  /**
   * Reset active date and close
   */
  reset() {
    var _a, _b, _c, _d, _f, _g;
    if (this.valueAsDate && ((_a = this.valueAsDate) === null || _a === void 0 ? void 0 : _a.getTime()) !== ((_b = this.activeDate) === null || _b === void 0 ? void 0 : _b.getTime())) {
      this.activeDate = new Date(this.valueAsDate);
    }
    if (this.startAsDate && ((_c = this.startAsDate) === null || _c === void 0 ? void 0 : _c.getTime()) !== ((_d = this.activeStartDate) === null || _d === void 0 ? void 0 : _d.getTime())) {
      this.activeStartDate = new Date(this.startAsDate);
    }
    if (this.endAsDate && ((_f = this.endAsDate) === null || _f === void 0 ? void 0 : _f.getTime()) !== ((_g = this.activeEndDate) === null || _g === void 0 ? void 0 : _g.getTime())) {
      this.activeEndDate = new Date(this.endAsDate);
    }
    if (!this.noCalendarInput) {
      this.active = false;
    }
  }
  /**
   * If inputted string is a valid date, update value/active
   */
  input(value) {
    const date = this.getDateFromInput(value);
    if (date) {
      if (!this.range) {
        this.valueAsDate = date;
        this.activeDate = date;
        this.calciteDateChange.emit(new Date(date));
      }
      else {
        let changed = false;
        if (this.focusedInput === "start") {
          changed = !this.startAsDate || !sameDate(date, this.startAsDate);
          if (changed) {
            this.startAsDate = date;
            this.activeStartDate = date;
          }
        }
        else if (this.focusedInput === "end") {
          changed = !this.endAsDate || !sameDate(date, this.endAsDate);
          if (changed) {
            this.endAsDate = date;
            this.activeEndDate = date;
          }
        }
        if (changed) {
          this.calciteDateRangeChange.emit({
            startDate: this.startAsDate,
            endDate: this.endAsDate
          });
        }
      }
    }
  }
  /**
   * Clean up invalid date from input on blur
   */
  blur(target) {
    const date = this.getDateFromInput(target.value);
    if (!date) {
      if (!this.range && this.valueAsDate) {
        target.value = this.valueAsDate.toLocaleDateString(this.locale);
      }
      else if (this.focusedInput === "start" && this.startAsDate) {
        target.value = this.startAsDate.toLocaleDateString(this.locale);
      }
      else if (this.focusedInput === "end" && this.endAsDate) {
        target.value = this.endAsDate.toLocaleDateString(this.locale);
      }
    }
  }
  /**
   * Event handler for when the selected date changes
   */
  handleDateChange(e, doReset) {
    const date = new Date(e.detail);
    if (!this.range) {
      this.value = dateToISO(date);
      this.valueAsDate = e.detail;
      this.activeDate = date;
      this.calciteDateChange.emit(date);
      if (doReset) {
        this.reset();
      }
      return;
    }
    if (this.range && this.noCalendarInput) {
      if (!this.startAsDate || (!this.endAsDate && date < this.startAsDate)) {
        if (this.startAsDate) {
          const newEndDate = new Date(this.startAsDate);
          this.end = dateToISO(newEndDate);
          this.setEndAsDate(newEndDate);
          this.activeEndDate = newEndDate;
        }
        this.start = dateToISO(date);
        this.setStartAsDate(date);
        this.activeStartDate = date;
      }
      else if (!this.endAsDate) {
        this.end = dateToISO(date);
        this.setEndAsDate(date);
        this.activeEndDate = date;
      }
      else {
        if (this.proximitySelection) {
          const startDiff = getDaysDiff(date, this.startAsDate);
          const endDiff = getDaysDiff(date, this.endAsDate);
          if (startDiff < endDiff) {
            this.start = dateToISO(date);
            this.setStartAsDate(date);
            this.activeStartDate = date;
          }
          else {
            this.end = dateToISO(date);
            this.setEndAsDate(date);
            this.activeEndDate = date;
          }
        }
        else {
          this.start = dateToISO(date);
          this.setStartAsDate(date);
          this.activeStartDate = date;
          this.endAsDate = this.activeEndDate = this.end = undefined;
        }
      }
      if (doReset) {
        this.reset();
      }
      this.calciteDateRangeChange.emit({
        startDate: this.startAsDate,
        endDate: this.endAsDate
      });
      return;
    }
    if (this.focusedInput === "start") {
      this.start = dateToISO(date);
      this.setStartAsDate(date);
      this.activeStartDate = date;
    }
    else {
      this.end = dateToISO(date);
      this.setEndAsDate(date);
      this.activeEndDate = date;
    }
    if (doReset) {
      this.reset();
    }
    this.calciteDateRangeChange.emit({
      startDate: this.startAsDate,
      endDate: this.endAsDate
    });
    setTimeout(() => {
      if (this.focusedInput === "start" && !this.noCalendarInput) {
        this.endInput.setFocus();
      }
    }, 150);
  }
  /**
   * Get an active date using the value, or current date as default
   */
  getActiveDate(value, min, max) {
    return dateFromRange(this.activeDate, min, max) || value || dateFromRange(new Date(), min, max);
  }
  getActiveStartDate(value, min, max) {
    return (dateFromRange(this.activeStartDate, min, max) || value || dateFromRange(new Date(), min, max));
  }
  getActiveEndDate(value, min, max) {
    return (dateFromRange(this.activeEndDate, min, max) || value || dateFromRange(new Date(), min, max));
  }
  /**
   * Find a date from input string
   * return false if date is invalid, or out of range
   */
  getDateFromInput(value) {
    if (!this.localeData) {
      return false;
    }
    const { separator } = this.localeData;
    const { day, month, year } = parseDateString(value, this.localeData);
    const validDay = day > 0;
    const validMonth = month > -1;
    const date = new Date(year, month, day);
    date.setFullYear(year);
    const validDate = !isNaN(date.getTime());
    const validLength = value.split(separator).filter((c) => c).length > 2;
    const validYear = year.toString().length > 0;
    if (validDay &&
      validMonth &&
      validDate &&
      validLength &&
      validYear &&
      inRange(date, this.min, this.max)) {
      return date;
    }
    return false;
  }
  static get is() { return "calcite-date"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-date.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-date.css"]
  }; }
  static get assetsDirs() { return ["calcite-date-nls"]; }
  static get properties() { return {
    "value": {
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
        "text": "Selected date"
      },
      "attribute": "value",
      "reflect": false
    },
    "valueAsDate": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Selected date as full date object"
      }
    },
    "startAsDate": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Selected start date as full date object"
      }
    },
    "endAsDate": {
      "type": "unknown",
      "mutable": true,
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "Selected end date as full date object"
      }
    },
    "min": {
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
        "text": "Earliest allowed date (\"yyyy-mm-dd\")"
      },
      "attribute": "min",
      "reflect": false
    },
    "max": {
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
        "text": "Latest allowed date (\"yyyy-mm-dd\")"
      },
      "attribute": "max",
      "reflect": false
    },
    "active": {
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
        "text": "Expand or collapse when calendar does not have input"
      },
      "attribute": "active",
      "reflect": true,
      "defaultValue": "false"
    },
    "intlPrevMonth": {
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
        "text": "Localized string for \"previous month\" (used for aria label)"
      },
      "attribute": "intl-prev-month",
      "reflect": false,
      "defaultValue": "TEXT.prevMonth"
    },
    "intlNextMonth": {
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
        "text": "Localized string for \"next month\" (used for aria label)"
      },
      "attribute": "intl-next-month",
      "reflect": false,
      "defaultValue": "TEXT.nextMonth"
    },
    "locale": {
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
        "text": "BCP 47 language tag for desired language and country format"
      },
      "attribute": "locale",
      "reflect": false,
      "defaultValue": "document.documentElement.lang || \"en-US\""
    },
    "noCalendarInput": {
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
        "text": "Show only calendar popup"
      },
      "attribute": "no-calendar-input",
      "reflect": false,
      "defaultValue": "false"
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
        "text": "specify the scale of the date picker"
      },
      "attribute": "scale",
      "reflect": true,
      "defaultValue": "\"m\""
    },
    "range": {
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
        "text": "Range mode activation"
      },
      "attribute": "range",
      "reflect": true,
      "defaultValue": "false"
    },
    "start": {
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
        "text": "Selected start date"
      },
      "attribute": "start",
      "reflect": false
    },
    "end": {
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
        "text": "Selected end date"
      },
      "attribute": "end",
      "reflect": false
    },
    "proximitySelection": {
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
        "text": ""
      },
      "attribute": "proximity-selection",
      "reflect": false,
      "defaultValue": "true"
    },
    "layout": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "\"horizontal\" | \"vertical\"",
        "resolved": "\"horizontal\" | \"vertical\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Layout"
      },
      "attribute": "layout",
      "reflect": true,
      "defaultValue": "\"horizontal\""
    }
  }; }
  static get states() { return {
    "activeDate": {},
    "activeStartDate": {},
    "activeEndDate": {},
    "focusedInput": {},
    "localeData": {},
    "hoverRange": {}
  }; }
  static get events() { return [{
      "method": "calciteDateChange",
      "name": "calciteDateChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Trigger calcite date change when a user changes the date."
      },
      "complexType": {
        "original": "Date",
        "resolved": "Date",
        "references": {
          "Date": {
            "location": "global"
          }
        }
      }
    }, {
      "method": "calciteDateRangeChange",
      "name": "calciteDateRangeChange",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Trigger calcite date change when a user changes the date range."
      },
      "complexType": {
        "original": "DateRangeChange",
        "resolved": "DateRangeChange",
        "references": {
          "DateRangeChange": {
            "location": "import",
            "path": "../../interfaces/DateRangeChange"
          }
        }
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
      "propName": "focusedInput",
      "methodName": "focusedHandler"
    }, {
      "propName": "value",
      "methodName": "valueWatcher"
    }, {
      "propName": "start",
      "methodName": "startWatcher"
    }, {
      "propName": "end",
      "methodName": "endWatcher"
    }, {
      "propName": "locale",
      "methodName": "loadLocaleData"
    }]; }
  static get listeners() { return [{
      "name": "blur",
      "method": "focusOutHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "focusin",
      "method": "focusInHandler",
      "target": "window",
      "capture": false,
      "passive": false
    }, {
      "name": "keyup",
      "method": "keyDownHandler",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
