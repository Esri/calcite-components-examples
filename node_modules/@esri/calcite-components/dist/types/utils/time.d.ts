import { NumberingSystem } from "./locale";
export declare type HourCycle = "12" | "24";
export interface LocalizedTime {
  localizedHour: string;
  localizedHourSuffix: string;
  localizedMinute: string;
  localizedMinuteSuffix: string;
  localizedSecond: string;
  localizedSecondSuffix: string;
  localizedMeridiem: string;
}
export declare type Meridiem = "AM" | "PM";
export declare type MinuteOrSecond = "minute" | "second";
export interface Time {
  hour: string;
  minute: string;
  second: string;
}
export declare type TimePart = "hour" | "hourSuffix" | "minute" | "minuteSuffix" | "second" | "secondSuffix" | "meridiem";
export declare const maxTenthForMinuteAndSecond = 5;
export declare function formatTimePart(number: number): string;
export declare function formatTimeString(value: string): string;
export declare function getLocaleHourCycle(locale: string, numberingSystem: NumberingSystem): HourCycle;
export declare function getMeridiem(hour: string): Meridiem;
export declare function isValidTime(value: string): boolean;
interface LocalizeTimePartParameters {
  value: string;
  part: TimePart;
  locale: string;
  numberingSystem: NumberingSystem;
}
export declare function localizeTimePart({ value, part, locale, numberingSystem }: LocalizeTimePartParameters): string;
interface LocalizeTimeStringParameters {
  value: string;
  includeSeconds?: boolean;
  locale: string;
  numberingSystem: NumberingSystem;
}
export declare function localizeTimeString({ value, locale, numberingSystem, includeSeconds }: LocalizeTimeStringParameters): string;
interface LocalizeTimeStringToPartsParameters {
  value: string;
  locale: string;
  numberingSystem: NumberingSystem;
}
export declare function localizeTimeStringToParts({ value, locale, numberingSystem }: LocalizeTimeStringToPartsParameters): LocalizedTime;
interface GetTimePartsParameters {
  value: string;
  locale: string;
  numberingSystem: NumberingSystem;
}
export declare function getTimeParts({ value, locale, numberingSystem }: GetTimePartsParameters): Intl.DateTimeFormatPart[];
export declare function parseTimeString(value: string): Time;
export {};
