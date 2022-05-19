import { VNode, EventEmitter } from "../../stencil-public-runtime";
import { Scale } from "../interfaces";
import { TimePart, HourCycle, Meridiem } from "../../utils/time";
export declare class TimePicker {
  el: HTMLCalciteTimePickerElement;
  /** aria-label for the hour input
   * @default "Hour"
   */
  intlHour: string;
  /** aria-label for the hour down button
   * @default "Decrease hour"
   */
  intlHourDown: string;
  /** aria-label for the hour up button
   * @default "Increase hour"
   */
  intlHourUp: string;
  /** aria-label for the meridiem (am/pm) input
   * @default "AM/PM"
   */
  intlMeridiem: string;
  /** aria-label for the meridiem (am/pm) down button
   * @default "Decrease AM/PM"
   */
  intlMeridiemDown: string;
  /** aria-label for the meridiem (am/pm) up button
   * @default "Increase AM/PM"
   */
  intlMeridiemUp: string;
  /** aria-label for the minute input
   * @default "Minute"
   */
  intlMinute: string;
  /** aria-label for the minute down button
   * @default "Decrease minute"
   */
  intlMinuteDown: string;
  /** aria-label for the minute up button
   * @default "Increase minute"
   */
  intlMinuteUp: string;
  /** aria-label for the second input
   * @default "Second"
   */
  intlSecond: string;
  /** aria-label for the second down button
   * @default "Decrease second"
   */
  intlSecondDown: string;
  /** aria-label for the second up button
   * @default "Increase second"
   */
  intlSecondUp: string;
  /**
   * BCP 47 language tag for desired language and country format
   * @internal
   */
  locale: string;
  localeWatcher(newLocale: string): void;
  /** The scale (size) of the time picker */
  scale: Scale;
  /** number (seconds) that specifies the granularity that the value must adhere to */
  step: number;
  /** The selected time in UTC (always 24-hour format) */
  value: string;
  valueWatcher(newValue: string): void;
  private activeEl;
  private hourEl;
  private meridiemEl;
  private minuteEl;
  private secondEl;
  private meridiemOrder;
  hour: string;
  hourCycle: HourCycle;
  localizedHour: string;
  localizedHourSuffix: string;
  localizedMeridiem: string;
  localizedMinute: string;
  localizedMinuteSuffix: string;
  localizedSecond: string;
  localizedSecondSuffix: string;
  meridiem: Meridiem;
  minute: string;
  second: string;
  showSecond: boolean;
  /**
   * @internal
   */
  calciteTimePickerBlur: EventEmitter<void>;
  /**
   * @internal
   */
  calciteTimePickerChange: EventEmitter<string>;
  /**
   * @internal
   */
  calciteTimePickerFocus: EventEmitter<void>;
  hostBlurHandler(): void;
  hostFocusHandler(): void;
  keyDownHandler(event: KeyboardEvent): void;
  /** Sets focus on the component. */
  setFocus(target: TimePart): Promise<void>;
  private buttonActivated;
  private decrementHour;
  private decrementMeridiem;
  private decrementMinuteOrSecond;
  private decrementMinute;
  private decrementSecond;
  private focusHandler;
  private hourDownButtonKeyDownHandler;
  private hourKeyDownHandler;
  private hourUpButtonKeyDownHandler;
  private incrementMeridiem;
  private incrementHour;
  private incrementMinuteOrSecond;
  private incrementMinute;
  private incrementSecond;
  private meridiemDownButtonKeyDownHandler;
  private meridiemKeyDownHandler;
  private meridiemUpButtonKeyDownHandler;
  private minuteDownButtonKeyDownHandler;
  private minuteKeyDownHandler;
  private minuteUpButtonKeyDownHandler;
  private secondDownButtonKeyDownHandler;
  private secondKeyDownHandler;
  private secondUpButtonKeyDownHandler;
  private setHourEl;
  private setMeridiemEl;
  private setMinuteEl;
  private setSecondEl;
  private setValue;
  private setValuePart;
  private getMeridiemOrder;
  connectedCallback(): void;
  render(): VNode;
}
