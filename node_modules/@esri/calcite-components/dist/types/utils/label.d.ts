export interface LabelableComponent {
  /**
   * When true, disabled prevents interaction.
   */
  disabled: boolean;
  /**
   * The host element.
   */
  readonly el: HTMLElement;
  /**
   * Text label.
   */
  label?: string;
  /**
   * The label this component is associated with.
   */
  labelEl: HTMLCalciteLabelElement;
  /**
   * Hook for components to provide custom label click behavior.
   */
  onLabelClick: (event: CustomEvent<any>) => void;
}
/**
 * Exported for testing purposes only
 *
 * @internal
 */
export declare const labelClickEvent = "calciteInternalLabelClick";
export declare const labelConnectedEvent = "calciteInternalLabelConnected";
export declare const labelDisconnectedEvent = "calciteInternaLabelDisconnected";
/**
 * Helper to set up label interactions on connectedCallback.
 *
 * @param component
 */
export declare function connectLabel(component: LabelableComponent): void;
/**
 * Helper to tear down label interactions on disconnectedCallback on labelable components.
 *
 * @param component
 */
export declare function disconnectLabel(component: LabelableComponent): void;
/**
 * Helper to get the label text from a component.
 *
 * @param component
 */
export declare function getLabelText(component: LabelableComponent): string;
