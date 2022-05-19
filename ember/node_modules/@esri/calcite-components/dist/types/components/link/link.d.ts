import { VNode } from "../../stencil-public-runtime";
import { FlipContext } from "../interfaces";
import { InteractiveComponent } from "../../utils/interactive";
/** Any attributes placed on <calcite-link> component will propagate to the rendered child */
/** Passing a 'href' will render an anchor link, instead of a span. Role will be set to link, or link, depending on this. */
/** It is the consumers responsibility to add aria information, rel, target, for links, and any link attributes for form submission */
/** @slot - A slot for adding text. */
export declare class Link implements InteractiveComponent {
  el: HTMLCalciteLinkElement;
  /** is the link disabled  */
  disabled: boolean;
  /** Prompts the user to save the linked URL instead of navigating to it. Can be used with or without a value:
   * Without a value, the browser will suggest a filename/extension
   * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-download
   */
  download: string | boolean;
  /** optionally pass a href - used to determine if the component should render as a link or an anchor */
  href?: string;
  /** optionally pass an icon to display at the end of a button - accepts calcite ui icon names  */
  iconEnd?: string;
  /** flip the icon(s) in rtl */
  iconFlipRtl?: FlipContext;
  /** optionally pass an icon to display at the start of a button - accepts calcite ui icon names  */
  iconStart?: string;
  /** The rel attribute to apply to the hyperlink */
  rel?: string;
  /** The target attribute to apply to the hyperlink */
  target?: string;
  componentDidRender(): void;
  render(): VNode;
  /** Sets focus on the component. */
  setFocus(): Promise<void>;
  /** the rendered child element */
  private childEl;
  private storeTagRef;
}
