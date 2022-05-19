import { RGB } from "../color-picker/interfaces";
/**
 * Convert a string to a valid hex by hashing its contents
 * and using the hash as a seed for three distinct color values
 */
export declare function stringToHex(str: string): string;
/**
 * Find the hue of a color given the separate RGB color channels
 */
export declare function rgbToHue(rgb: RGB): number;
/**
 * For a hex color, find the hue
 * @param hex {string} - form of "#------"
 */
export declare function hexToHue(hex: string): number;
