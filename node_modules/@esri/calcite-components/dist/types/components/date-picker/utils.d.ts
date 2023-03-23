/**
 * Translation resource data structure
 *
 * @private
 */
export interface DateLocaleData {
  "default-calendar": "gregorian" | "buddhist";
  separator: string;
  unitOrder: string;
  weekStart: number;
  placeholder: string;
  days: {
    abbreviated?: string[];
    narrow?: string[];
    short?: string[];
    wide?: string[];
  };
  numerals: string;
  months: {
    abbreviated: string[];
    narrow: string[];
    wide: string[];
  };
  year?: {
    suffix: string;
  };
}
/**
 * CLDR cache.
 * Exported for testing purposes.
 *
 * @private
 */
export declare const translationCache: Record<string, DateLocaleData>;
/**
 * CLDR request cache.
 * Exported for testing purposes.
 *
 * @private
 */
export declare const requestCache: Record<string, Promise<DateLocaleData>>;
/**
 * Fetch calendar data for a given locale from list of supported languages
 *
 * @param lang
 * @public
 */
export declare function getLocaleData(lang: string): Promise<DateLocaleData>;
/**
 *  Maps value to valueAsDate
 *
 * @param value
 */
export declare function getValueAsDateRange(value: string[]): Date[];
