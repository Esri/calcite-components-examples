import { ThemeClass, ThemeName } from "../components/interfaces";
interface Theme {
  name: ThemeName;
  className: ThemeClass;
}
export declare const THEMES: Theme[];
export declare const CSS_UTILITY: {
  autoTheme: string;
  darkTheme: string;
  lightTheme: string;
  rtl: string;
};
export declare const TEXT: {
  loading: string;
};
export {};
