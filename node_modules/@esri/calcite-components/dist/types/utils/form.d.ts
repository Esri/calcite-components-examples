import { FunctionalComponent } from "../stencil-public-runtime";
/**
 * Exported for testing purposes.
 */
export declare const hiddenFormInputSlotName = "hidden-form-input";
/**
 * Defines interface for form owning components.
 *
 * Allows calling submit/reset methods on the form.
 */
export interface FormOwner {
  /**
   * The form this component is associated with.
   */
  formEl: HTMLFormElement;
}
/**
 * Defines interface for form-associated components.
 *
 * Along with the interface, use the matching form utils to help set up the component behavior.
 */
export interface FormComponent<T = any> extends FormOwner {
  /**
   * When true, this component's value will not be submitted in the form.
   */
  disabled: boolean;
  /**
   * When true, form submit requests will enforce field requirement.
   *
   * @todo remove optional in follow-up PR
   */
  required?: boolean;
  /**
   * The host element.
   */
  readonly el: HTMLElement;
  /**
   * The name used to submit the value to the associated form.
   *
   * Note that this prop should use the @Prop decorator.
   */
  name: string;
  /**
   * This form component's value.
   *
   * Note that this prop should use the @Prop decorator.
   */
  value: T;
  /**
   * The initial value for this form component.
   *
   * When the form is reset, the value will be set to this property.
   */
  defaultValue: T;
  /**
   * Hook for components to provide custom form reset behavior.
   */
  onFormReset?(): void;
  /**
   * Hook for components to sync _extra_ props on the hidden input form element used for form-submitting.
   *
   * Note: The following props are set by default: disabled, hidden, name, required, value.
   */
  syncHiddenFormInput?(input: HTMLInputElement): void;
}
/**
 * Defines interface for checkable form-associated components.
 *
 * Along with the interface, use the matching form utils to help set up the component behavior.
 */
export interface CheckableFormComponent<T = any> extends FormComponent<T> {
  /**
   * For boolean-valued components, this property defines whether the associated value is submitted to the form or not.
   */
  checked: boolean;
  /**
   * The initial checked value for this form component.
   *
   * When the form is reset, the checked property will be set to this value.
   */
  defaultChecked: boolean;
}
/**
 * Helper to submit a form.
 *
 * @param component
 * @returns true if its associated form was submitted, false otherwise.
 */
export declare function submitForm(component: FormOwner): boolean;
/**
 * Helper to reset a form.
 *
 * @param component
 */
export declare function resetForm(component: FormOwner): void;
/**
 * Helper to set up form interactions on connectedCallback.
 *
 * @param component
 */
export declare function connectForm<T>(component: FormComponent<T>): void;
/**
 * Helper to tear down form interactions on disconnectedCallback.
 *
 * @param component
 */
export declare function disconnectForm<T>(component: FormComponent<T>): void;
/**
 * Helper for setting the default value on initialization after connectedCallback.
 *
 * Note that this is only needed if the default value cannot be determined on connectedCallback.
 *
 * @param component
 * @param value
 */
export declare function afterConnectDefaultValueSet<T>(component: FormComponent<T>, value: any): void;
interface HiddenFormInputSlotProps {
  component: FormComponent;
}
/**
 * Helper to render the slot for form-associated component's hidden input.
 *
 * If the component has a default slot, this must be placed at the bottom of the component's root container to ensure it is the last child.
 *
 * render(): VNode {
 *   <Host>
 *     <div class={CSS.container}>
 *     // ...
 *     <HiddenFormInputSlot component={this} />
 *     </div>
 *   </Host>
 * }
 *
 * Note that the hidden-form-input Sass mixin must be added to the component's style to apply specific styles.
 *
 * @param root0
 * @param root0.component
 */
export declare const HiddenFormInputSlot: FunctionalComponent<HiddenFormInputSlotProps>;
export {};
