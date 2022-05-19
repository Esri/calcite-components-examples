import { DateLocaleData } from "../components/date-picker/utils";
export interface HoverRange {
  focused: "end" | "start";
  start: Date;
  end: Date;
}
/**
 * Check if date is within a min and max
 */
export declare function inRange(date: Date, min?: Date | string, max?: Date | string): boolean;
/**
 * Ensures date is within range,
 * returns min or max if out of bounds
 */
export declare function dateFromRange(date?: any, min?: Date | string, max?: Date | string): Date | null;
/**
 * Parse an iso8601 string (YYYY-mm-dd) into a valid date.
 * TODO: handle time when time of day UI is added
 */
export declare function dateFromISO(iso8601: string | Date): Date | null;
/**
 * Return first portion of ISO string (YYYY-mm-dd)
 */
export declare function dateToISO(date?: Date | string): string;
/**
 * Check if two dates are the same day, month, year
 */
export declare function sameDate(d1: Date, d2: Date): boolean;
/**
 * Get a date one month in the past
 */
export declare function prevMonth(date: Date): Date;
/**
 * Get a date one month in the future
 */
export declare function nextMonth(date: Date): Date;
/**
 * Translate a number into a given locals numeral system
 */
export declare function localizeNumber(num: number, localeData: DateLocaleData): string;
/**
 * Calculate actual number from localized string
 */
export declare function parseNumber(str: string, localeData: DateLocaleData): number;
/**
 * Parse numeric units for day, month, and year from a localized string
 * month starts at 0 (can pass to date constructor)
 */
export declare function parseDateString(str: string, localeData: DateLocaleData): {
  day: number;
  month: number;
  year: number;
};
/**
 * Convert eastern arbic numerals
 */
export declare function replaceArabicNumerals(str?: string): string;
declare type unitOrderSignifier = "m" | "d" | "y";
/**
 * Based on the unitOrder string, find order of month, day, and year for locale
 */
export declare function getOrder(unitOrder: string): unitOrderSignifier[];
/**
 * Get number of days between two dates
 */
export declare function getDaysDiff(date1: Date, date2: Date): number;
export {};
