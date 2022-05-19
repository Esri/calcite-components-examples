import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { HoverRange } from "../../utils/date";
import { DateLocaleData } from "../date-picker/utils";
import { Scale } from "../interfaces";
export declare class DatePickerMonth {
  el: HTMLCalciteDatePickerMonthElement;
  /** Already selected date.*/
  selectedDate: Date;
  /** Date currently active.*/
  activeDate: Date;
  /** Start date currently active. */
  startDate?: Date;
  /** End date currently active  */
  endDate?: Date;
  /** Minimum date of the calendar below which is disabled.*/
  min: Date;
  /** Maximum date of the calendar above which is disabled.*/
  max: Date;
  /** specify the scale of the date picker */
  scale: Scale;
  /**
   * CLDR locale data for current locale
   *
   * @internal
   */
  localeData: DateLocaleData;
  /** The range of dates currently being hovered */
  hoverRange: HoverRange;
  /**
   * Event emitted when user selects the date.
   */
  calciteDatePickerSelect: EventEmitter;
  /**
   * Event emitted when user hovers the date.
   * @internal
   */
  calciteDatePickerHover: EventEmitter;
  /**
   * Active date for the user keyboard access.
   */
  calciteDatePickerActiveDateChange: EventEmitter;
  /**
   * @internal
   */
  calciteDatePickerMouseOut: EventEmitter;
  keyDownHandler: (e: KeyboardEvent) => void;
  /**
   * Once user is not interacting via keyboard,
   * disable auto focusing of active date
   */
  disableActiveFocus: () => void;
  mouseoutHandler(): void;
  render(): VNode;
  private activeFocus;
  /**
   * Add n months to the current month
   */
  private addMonths;
  /**
   * Add n days to the current date
   */
  private addDays;
  /**
   * Get dates for last days of the previous month
   */
  private getPrevMonthdays;
  /**
   * Get dates for the current month
   */
  private getCurrentMonthDays;
  /**
   * Get dates for first days of the next month
   */
  private getNextMonthDays;
  /**
   * Determine if the date is in between the start and end dates
   */
  private betweenSelectedRange;
  /**
   * Determine if the date should be in selected state
   */
  private isSelected;
  /**
   * Determine if the date is the start of the date range
   */
  private isStartOfRange;
  private isEndOfRange;
  dayHover: (e: CustomEvent) => void;
  daySelect: (e: CustomEvent) => void;
  /**
   * Render calcite-date-picker-day
   */
  private renderDateDay;
  private isFocusedOnStart;
  private isHoverInRange;
  private isRangeHover;
}
