/**
 * Defines interface for components with a dynamically changing slot.
 */
export interface ConditionalSlotComponent {
  /**
   * The host element.
   */
  readonly el: HTMLElement;
}
/**
 * Helper to set up a conditional slot component on connectedCallback.
 */
export declare function connectConditionalSlotComponent(component: ConditionalSlotComponent): void;
/**
 * Helper to tear down a conditional slot component on disconnectedCallback.
 */
export declare function disconnectConditionalSlotComponent(component: ConditionalSlotComponent): void;
