declare type AttributeObject = {
  [k: string]: any;
};
declare type AllowedGlobalAttribute = "lang";
/**
 * Watches global attributes of a component.
 *
 * Derived from: https://gist.github.com/willmartian/b4dd6b57d71dd0438fb9e7c6f4048578
 */
export interface GlobalAttrComponent {
  /**
   * The host element.
   */
  readonly el: HTMLElement;
  /**
   * The watched attributes object.
   * Should be stateful.
   * '@State() inheritedAttributes = {};'
   */
  globalAttributes: AttributeObject;
}
/**
 * Helper to set up listening for changes to global attributes.
 *
 * render(): VNode {
 *   const lang = this.inheritedAttributes['lang'] ?? 'en';
 *   return <div>My lang is {lang}</div>;
 * }
 *
 * @param component
 * @param attributeFilter
 */
export declare function watchGlobalAttributes(component: GlobalAttrComponent, attributeFilter: AllowedGlobalAttribute[]): void;
/**
 * Helper remove listening for changes to inherited attributes.
 *
 * @param component
 */
export declare function unwatchGlobalAttributes(component: GlobalAttrComponent): void;
export {};
