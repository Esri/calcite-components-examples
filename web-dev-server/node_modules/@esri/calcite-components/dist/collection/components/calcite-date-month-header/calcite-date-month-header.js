import { Component, Element, Prop, Host, Event, h } from "@stencil/core";
import { getElementDir } from "../../utils/dom";
import { dateFromRange, nextMonth, prevMonth, localizeNumber, parseNumber, getOrder } from "../../utils/date";
import { getKey } from "../../utils/key";
export class CalciteDateMonthHeader {
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    var _a;
    const activeMonth = this.activeDate.getMonth();
    const { months, unitOrder } = this.localeData;
    const localizedMonth = (months.wide || months.narrow || months.abbreviated)[activeMonth];
    const localizedYear = localizeNumber(this.activeDate.getFullYear(), this.localeData);
    const iconScale = this.scale === "l" ? "m" : "s";
    const dir = getElementDir(this.el);
    const order = getOrder(unitOrder);
    const reverse = order.indexOf("y") < order.indexOf("m");
    const nextMonthDate = dateFromRange(nextMonth(this.activeDate), this.min, this.max);
    const prevMonthDate = dateFromRange(prevMonth(this.activeDate), this.min, this.max);
    const suffix = (_a = this.localeData.year) === null || _a === void 0 ? void 0 : _a.suffix;
    return (h(Host, { dir: dir },
      h("div", { class: "header" },
        h("a", { "aria-disabled": (prevMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlPrevMonth, class: "chevron", href: "#", onClick: (e) => this.handleArrowClick(e, prevMonthDate), onKeyDown: (e) => this.handleKeyDown(e, prevMonthDate), role: "button", tabindex: prevMonthDate.getMonth() === activeMonth ? -1 : 0 },
          h("calcite-icon", { dir: dir, "flip-rtl": true, icon: "chevron-left", scale: iconScale })),
        h("div", { class: { text: true, "text--reverse": reverse } },
          h("span", { "aria-level": "2", class: "month", role: "heading" }, localizedMonth),
          h("span", { class: "year-wrap" },
            h("input", { class: {
                year: true,
                "year--suffix": !!suffix
              }, inputmode: "numeric", maxlength: "4", minlength: "1", onChange: (event) => this.setYear(event.target.value), onKeyDown: (event) => this.onYearKey(event), pattern: "\\d*", ref: (el) => (this.yearInput = el), type: "text", value: localizedYear }),
            suffix && (h("span", { class: "suffix" },
              h("span", { "aria-hidden": "true", class: "suffix__invisible" }, localizedYear),
              " " + suffix)))),
        h("a", { "aria-disabled": (nextMonthDate.getMonth() === activeMonth).toString(), "aria-label": this.intlNextMonth, class: "chevron", href: "#", onClick: (e) => this.handleArrowClick(e, nextMonthDate), onKeyDown: (e) => this.handleKeyDown(e, nextMonthDate), role: "button", tabindex: nextMonthDate.getMonth() === activeMonth ? -1 : 0 },
          h("calcite-icon", { dir: dir, "flip-rtl": true, icon: "chevron-right", scale: iconScale })))));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Increment year on UP/DOWN keys
   */
  onYearKey(e) {
    const year = e.target.value;
    switch (getKey(e.key)) {
      case "ArrowDown":
        e.preventDefault();
        this.setYear(year, -1);
        break;
      case "ArrowUp":
        e.preventDefault();
        this.setYear(year, 1);
        break;
    }
  }
  /*
   * Update active month on clicks of left/right arrows
   */
  handleArrowClick(e, date) {
    e === null || e === void 0 ? void 0 : e.preventDefault();
    e.stopPropagation();
    this.calciteDateSelect.emit(date);
  }
  /*
   * Because we have to use an anchor rather than button (#1069),
   * ensure enter/space work like a button would
   */
  handleKeyDown(e, date) {
    const key = getKey(e.key);
    if (key === " " || key === "Enter") {
      this.handleArrowClick(e, date);
    }
  }
  /**
   * Parse localized year string from input,
   * set to active if in range
   */
  setYear(localizedYear, increment = 0) {
    const { min, max, activeDate, localeData, yearInput } = this;
    const parsedYear = parseNumber(localizedYear, localeData);
    const length = parsedYear.toString().length;
    const year = isNaN(parsedYear) ? false : parsedYear + increment;
    const inRange = year && (!min || min.getFullYear() <= year) && (!max || max.getFullYear() >= year);
    // if you've supplied a year and it's in range, update active date
    if (year && inRange && length === localizedYear.length) {
      const nextDate = new Date(activeDate);
      nextDate.setFullYear(year);
      const inRangeDate = dateFromRange(nextDate, min, max);
      this.calciteDateSelect.emit(inRangeDate);
      yearInput.value = localizeNumber(inRangeDate.getFullYear(), localeData);
    }
    else {
      // leave the current active date and clean up garbage input
      yearInput.value = localizeNumber(activeDate.getFullYear(), localeData);
    }
  }
  static get is() { return "calcite-date-month-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-date-month-header.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-date-month-header.css"]
  }; }
  static get properties() { return {
    "selectedDate": {
      "type": "unknown",
      "mutable": false,
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Already selected date."
      }
    },
    "activeDate": {
      "type": "unknown",
      "mutable": false,
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Focused date with indicator (will become selected date if user proceeds)"
      }
    },
    "min": {
      "type": "unknown",
      "mutable": false,
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Minimum date of the calendar below which is disabled."
      }
    },
    "max": {
      "type": "unknown",
      "mutable": false,
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Maximum date of the calendar above which is disabled."
      }
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "User's language and region as BCP 47 formatted string."
      },
      "attribute": "locale",
      "reflect": false
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Localized string for previous month."
      },
      "attribute": "intl-prev-month",
      "reflect": false
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
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Localized string for next month."
      },
      "attribute": "intl-next-month",
      "reflect": false
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
      "reflect": true
    },
    "localeData": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "DateLocaleData",
        "resolved": "DateLocaleData",
        "references": {
          "DateLocaleData": {
            "location": "import",
            "path": "../calcite-date/utils"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "CLDR locale data for translated calendar info"
      }
    }
  }; }
  static get events() { return [{
      "method": "calciteDateSelect",
      "name": "calciteDateSelect",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": "Changes to active date"
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
    }]; }
  static get elementRef() { return "el"; }
}
