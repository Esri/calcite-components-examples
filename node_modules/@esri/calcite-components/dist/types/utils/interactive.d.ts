export interface InteractiveComponent {
  /**
   * The host element.
   */
  readonly el: HTMLElement;
  /**
   * When true, prevents user interaction.
   *
   * Notes:
   *
   * This prop should use the @Prop decorator and reflect.
   * The `disabled` Sass mixin must be added to the component's stylesheet.
   */
  disabled: boolean;
}
declare type HostIsTabbablePredicate = () => boolean;
/**
 * This helper updates the host element to prevent keyboard interaction on its subtree and sets the appropriate aria attribute for accessibility.
 *
 * This should be used in the `componentDidRender` lifecycle hook.
 *
 * **Notes**
 *
 * this util is not needed for simple components whose root element or elements are an interactive component (custom element or native control). For those cases, set the `disabled` props on the root components instead.
 * technically, users can override `tabindex` and restore keyboard navigation, but this will be considered user error
 *
 * @param component
 * @param hostIsTabbable
 */
export declare function updateHostInteraction(component: InteractiveComponent, hostIsTabbable?: boolean | HostIsTabbablePredicate | "managed"): void;
export {};
