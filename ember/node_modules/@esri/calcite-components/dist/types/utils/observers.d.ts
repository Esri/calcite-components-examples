declare type ObserverType = "mutation" | "intersection" | "resize";
declare type ObserverCallbackType<T extends ObserverType> = T extends "mutation" ? MutationCallback : T extends "intersection" ? IntersectionObserverCallback : T extends "resize" ? ResizeObserverCallback : never;
declare type ObserverOptions<T extends ObserverType> = T extends "mutation" ? MutationObserverInit : T extends "intersection" ? IntersectionObserverInit : T extends "resize" ? never : never;
declare type ObserverInstanceType<T extends ObserverType> = T extends "mutation" ? MutationObserver : T extends "intersection" ? IntersectionObserver : T extends "resize" ? ResizeObserver : never;
/**
 * This utility ensures observers are created only for browser contexts.
 *
 * @param type - the type of observer to create
 * @param callback - the observer callback
 * @param options - the observer options
 */
export declare function createObserver<T extends ObserverType>(type: T, callback: ObserverCallbackType<T>, options?: ObserverOptions<T>): ObserverInstanceType<T> | undefined;
export {};
