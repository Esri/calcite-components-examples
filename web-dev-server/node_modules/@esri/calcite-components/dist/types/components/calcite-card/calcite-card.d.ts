import { EventEmitter, VNode } from "../../stencil-public-runtime";
/**
 * @slot thumbnail - A slot for adding a thumnail to the card.
 * @slot - A slot for adding subheader/description content.
 * @slot title - A slot for adding a card title.
 * @slot subtitle - A slot for adding a card subtitle or short summary.
 * @slot footer-leading - A slot for adding a leading footer.
 * @slot footer-trailing - A slot for adding a trailing footer.
 */
/** Cards do not include a grid or bounding container
 * - cards will expand to fit the width of their container
 */
export declare class CalciteCard {
  el: HTMLCalciteCardElement;
  /**  When true, the cards content is waiting to be loaded. This state shows a busy indicator.*/
  loading: boolean;
  /** Indicates whether the card is selected. */
  selected: boolean;
  /** Indicates whether the card is selectable. */
  selectable: boolean;
  /**  The theme of the card.*/
  theme: "light" | "dark";
  /** string to override English loading text */
  intlLoading?: string;
  /** string to override English select text for checkbox when selectable is true */
  intlSelect: string;
  /** string to override English deselect text for checkbox when selectable is true */
  intlDeselect: string;
  /** Fired when a selectable card is selected */
  calciteCardSelect: EventEmitter;
  render(): VNode;
  private cardSelectClick;
  private cardSelectKeyDown;
  private selectCard;
  private renderThumbnail;
  private renderCheckbox;
  private renderHeader;
  private renderFooter;
}
