/**
 * Translation resource data structure
 * @private
 */
export interface DateLocaleData {
  "default-calendar": "gregorian";
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
 * @private
 */
export declare const translationCache: Record<string, DateLocaleData>;
/**
 * CLDR request cache.
 * Exported for testing purposes.
 * @private
 */
export declare const requestCache: Record<string, Promise<DateLocaleData>>;
/**
 * Fetch calendar data for a given locale from list of supported languages
 * @public
 */
export declare function getLocaleData(lang: string): Promise<DateLocaleData>;
