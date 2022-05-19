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
export declare function getLocaleHourCycle(locale: string): HourCycle;
export declare function getMeridiem(hour: string): Meridiem;
export declare function isValidTime(value: string): boolean;
export declare function localizeTimePart(value: string, part: TimePart, locale: string): string;
export declare function localizeTimeString(value: string, locale?: string, includeSeconds?: boolean): string;
export declare function localizeTimeStringToParts(value: string, locale?: string): LocalizedTime;
export declare function getTimeParts(value: string, locale?: string): Intl.DateTimeFormatPart[];
export declare function parseTimeString(value: string): Time;
