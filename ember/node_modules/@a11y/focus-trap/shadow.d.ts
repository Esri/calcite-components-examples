/**
 * Traverses the slots of the open shadowroots and returns all children matching the query.
 * @param {ShadowRoot | HTMLElement} root
 * @param skipNode
 * @param isMatch
 * @param {number} maxDepth
 * @param {number} depth
 * @returns {HTMLElement[]}
 */
export declare function queryShadowRoot(root: ShadowRoot | HTMLElement, skipNode: (($elem: HTMLElement) => boolean), isMatch: (($elem: HTMLElement) => boolean), maxDepth?: number, depth?: number): HTMLElement[];
