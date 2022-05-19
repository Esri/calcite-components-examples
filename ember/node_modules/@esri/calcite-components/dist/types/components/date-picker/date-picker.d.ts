import { EventEmitter, VNode } from "../../stencil-public-runtime";
import { HeadingLevel } from "../functional/Heading";
import { DateRangeChange } from "./interfaces";
export declare class DatePicker {
  el: HTMLCalciteDatePickerElement;
  /** Active range */
  activeRange?: "start" | "end";
  /** Selected date */
  value?: string | string[];
  /**
   * Number at which section headings should start for this component.
   */
  headingLevel: HeadingLevel;
  /** Selected date as full date object*/
  valueAsDate?: Date | Date[];
  handleValueAsDate(date: Date | Date[]): void;
  /**
   * Selected start date as full date object
   * @deprecated use valueAsDate instead
   */
  startAsDate?: Date;
  /**
   * Selected end date as full date object
   * @deprecated use valueAsDate instead
   */
  endAsDate?: Date;
  /** Earliest allowed date as full date object */
  minAsDate?: Date;
  /** Latest allowed date as full date object */
  maxAsDate?: Date;
  handleRangeChange(): void;
  /** Earliest allowed date ("yyyy-mm-dd") */
  min?: string;
  onMinChanged(min: string): void;
  /** Latest allowed date ("yyyy-mm-dd") */
  max?: string;
  onMaxChanged(max: string): void;
  /** Localized string for "previous month" (used for aria label)
   * @default "Previous month"
   */
  intlPrevMonth?: string;
  /** Localized string for "next month" (used for aria label)
   * @default "Next month"
   */
  intlNextMonth?: string;
  /** Localized string for "year" (used for aria label)
   * @default "Year"
   */
  intlYear?: string;
  /** BCP 47 language tag for desired language and country format */
  locale?: string;
  /** specify the scale of the date picker */
  scale: "s" | "m" | "l";
  /** Range mode activation */
  range: boolean;
  /**
   * Selected start date
   * @deprecated use value instead
   */
  start?: string;
  /**
   * Selected end date
   * @deprecated use value instead
   */
  end?: string;
  /** Disables the default behaviour on the third click of narrowing or extending the range and instead starts a new range. */
  proximitySelectionDisabled: boolean;
  /**
   * Trigger calcite date change when a user changes the date.
   */
  calciteDatePickerChange: EventEmitter<Date>;
  /**
   * Trigger calcite date change when a user changes the date range.
   * @see [DateRangeChange](https://github.com/Esri/calcite-components/blob/master/src/components/date-picker/interfaces.ts#L1)
   */
  calciteDatePickerRangeChange: EventEmitter<DateRangeChange>;
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
  connectedCallback(): void;
  componentWillLoad(): Promise<void>;
  render(): VNode;
  private localeData;
  private hoverRange;
  private mostRecentRangeValue?;
  keyUpHandler: (e: KeyboardEvent) => void;
  valueHandler(value: string | string[]): void;
  startWatcher(start: string): void;
  endWatcher(end: string): void;
  private loadLocaleData;
  monthHeaderSelectChange: (e: CustomEvent<Date>) => void;
  monthActiveDateChange: (e: CustomEvent<Date>) => void;
  monthHoverChange: (e: CustomEvent<Date>) => void;
  monthMouseOutChange: () => void;
  /**
   * Render calcite-date-picker-month-header and calcite-date-picker-month
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
  reset: () => void;
  private setEndDate;
  private setStartDate;
  /**
   * Event handler for when the selected date changes
   */
  private monthDateChange;
  /**
   * Get an active date using the value, or current date as default
   */
  private getActiveDate;
  private getActiveStartDate;
  private getActiveEndDate;
}
