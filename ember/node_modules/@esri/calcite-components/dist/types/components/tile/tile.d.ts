import { VNode } from "../../stencil-public-runtime";
import { ConditionalSlotComponent } from "../../utils/conditionalSlot";
import { InteractiveComponent } from "../../utils/interactive";
/**
 * @slot content-start - A slot for adding non-actionable elements before the tile content.
 * @slot content-end - A slot for adding non-actionable elements after the tile content.
 */
export declare class Tile implements ConditionalSlotComponent, InteractiveComponent {
  el: HTMLCalciteTileElement;
  /** The active state of the tile. */
  active: boolean;
  /** The description text that appears beneath the heading of the tile. */
  description?: string;
  /**
   * When true, prevents interaction.
   */
  disabled: boolean;
  /** The embed mode of the tile.  When true, renders without a border and padding for use by other components. */
  embed: boolean;
  /**
   * The focused state of the tile.
   * @internal
   */
  focused: boolean;
  /** The heading text that appears between the icon and description of the tile. */
  heading?: string;
  /** The hidden state of the tile. */
  hidden: boolean;
  /** The (optional) url for the tile. (Only applies when embed is set to false) */
  href?: string;
  /** The icon that appears at the top of the tile. */
  icon?: string;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentDidRender(): void;
  renderTile(): VNode;
  render(): VNode;
}
