import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { DateRangeChange } from "../../interfaces/DateRangeChange";
import { StrictModifiers } from "@popperjs/core";
export declare class CalciteDate {
  el: HTMLCalciteDateElement;
  /** Selected date */
  value?: string;
  /** Selected date as full date object*/
  valueAsDate?: Date;
  /** Selected start date as full date object*/
  startAsDate?: Date;
  /** Selected end date as full date object*/
  endAsDate?: Date;
  /** Earliest allowed date ("yyyy-mm-dd") */
  min?: string;
  /** Latest allowed date ("yyyy-mm-dd") */
  max?: string;
  /** Expand or collapse when calendar does not have input */
  active: boolean;
  activeHandler(): void;
  /** Localized string for "previous month" (used for aria label) */
  intlPrevMonth?: string;
  /** Localized string for "next month" (used for aria label) */
  intlNextMonth?: string;
  /** BCP 47 language tag for desired language and country format */
  locale?: string;
  /** Show only calendar popup */
  noCalendarInput?: boolean;
  /** specify the scale of the date picker */
  scale: "s" | "m" | "l";
  /** Range mode activation */
  range?: boolean;
  /** Selected start date */
  start?: string;
  /** Selected end date */
  end?: string;
  proximitySelection?: boolean;
  /** Layout */
  layout: "horizontal" | "vertical";
  focusOutHandler(): void;
  /**
   * Blur doesn't fire properly when there is no shadow dom (ege/IE11)
   * Check if the focused element is inside the date picker, if not close
   */
  focusInHandler(e: FocusEvent): void;
  keyDownHandler(e: KeyboardEvent): void;
  reposition(): Promise<void>;
  /**
   * Trigger calcite date change when a user changes the date.
   */
  calciteDateChange: EventEmitter<Date>;
  /**
   * Trigger calcite date change when a user changes the date range.
   */
  calciteDateRangeChange: EventEmitter<DateRangeChange>;
  /**
   * Active date.
   */
  activeDate: Date;
  /**
   * Active start date.
   */
  activeStartDate: Date;
  /**
   * Active end date.
   */
  activeEndDate: Date;
  /**
   * In range mode, indicates which input was is focused on
   */
  focusedInput: "start" | "end";
  focusedHandler(): void;
  private endInput;
  connectedCallback(): void;
  disconnectedCallback(): void;
  render(): VNode;
  private localeData;
  private hoverRange;
  private hasShadow;
  private popper;
  private menuEl;
  private startWrapper;
  private endWrapper;
  private mostRecentRangeValue?;
  setMenuEl: (el: HTMLDivElement) => void;
  setStartWrapper: (el: HTMLDivElement) => void;
  setEndWrapper: (el: HTMLDivElement) => void;
  getModifiers(): Partial<StrictModifiers>[];
  createPopper(): void;
  destroyPopper(): void;
  valueWatcher(value: string): void;
  startWatcher(start: string): void;
  endWatcher(end: string): void;
  private loadLocaleData;
  /**
   * Render calcite-date-month-header and calcite-date-month
   */
  private renderCalendar;
  /**
   * Update date instance of start if valid
   */
  private setStartAsDate;
  /**
   * Update date instance of end if valid
   */
  private setEndAsDate;
  /**
   * Reset active date and close
   */
  private reset;
  /**
   * If inputted string is a valid date, update value/active
   */
  private input;
  /**
   * Clean up invalid date from input on blur
   */
  private blur;
  /**
   * Event handler for when the selected date changes
   */
  private handleDateChange;
  /**
   * Get an active date using the value, or current date as default
   */
  private getActiveDate;
  private getActiveStartDate;
  private getActiveEndDate;
  /**
   * Find a date from input string
   * return false if date is invalid, or out of range
   */
  private getDateFromInput;
}
