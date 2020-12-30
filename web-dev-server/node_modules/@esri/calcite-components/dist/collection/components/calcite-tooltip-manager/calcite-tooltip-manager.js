import { Component, Host, h, Listen, Prop } from "@stencil/core";
import { TOOLTIP_REFERENCE, TOOLTIP_DELAY_MS } from "../calcite-tooltip/resources";
import { getElementByAttributeId } from "../../utils/dom";
import { getKey } from "../../utils/key";
export class CalciteTooltipManager {
  constructor() {
    this.hoverTimeouts = new WeakMap();
    // --------------------------------------------------------------------------
    //
    //  Properties
    //
    // --------------------------------------------------------------------------
    /**
     * CSS Selector to match reference elements for tooltips.
     */
    this.selector = `[${TOOLTIP_REFERENCE}]`;
    // --------------------------------------------------------------------------
    //
    //  Private Methods
    //
    // --------------------------------------------------------------------------
    this.queryTooltip = (el) => {
      return getElementByAttributeId(el.closest(this.selector), TOOLTIP_REFERENCE);
    };
    this.clearHoverTimeout = (tooltip) => {
      const { hoverTimeouts } = this;
      if (hoverTimeouts.has(tooltip)) {
        window.clearTimeout(hoverTimeouts.get(tooltip));
      }
    };
    this.closeExistingTooltip = () => {
      const { tooltipEl } = this;
      if (tooltipEl) {
        this.toggleTooltip(tooltipEl, false);
      }
    };
    this.focusTooltip = ({ tooltip, value }) => {
      this.closeExistingTooltip();
      if (value) {
        this.clearHoverTimeout(tooltip);
      }
      this.toggleTooltip(tooltip, value);
    };
    this.toggleTooltip = (tooltip, value) => {
      tooltip.open = value;
      if (value) {
        this.tooltipEl = tooltip;
      }
    };
    this.hoverToggle = ({ tooltip, value }) => {
      const { hoverTimeouts } = this;
      hoverTimeouts.delete(tooltip);
      if (value) {
        this.closeExistingTooltip();
      }
      this.toggleTooltip(tooltip, value);
    };
    this.hoverTooltip = ({ tooltip, value }) => {
      this.clearHoverTimeout(tooltip);
      const { hoverTimeouts } = this;
      const timeoutId = window.setTimeout(() => this.hoverToggle({ tooltip, value }), TOOLTIP_DELAY_MS || 0);
      hoverTimeouts.set(tooltip, timeoutId);
    };
    this.activeTooltipHover = (event) => {
      const { tooltipEl, hoverTimeouts } = this;
      if (!tooltipEl || !hoverTimeouts.has(tooltipEl)) {
        return;
      }
      const hoveringActiveTooltip = event.composedPath().includes(tooltipEl);
      hoveringActiveTooltip
        ? this.clearHoverTimeout(tooltipEl)
        : this.hoverTooltip({ tooltip: tooltipEl, value: false });
    };
    this.hoverEvent = (event, value) => {
      const tooltip = this.queryTooltip(event.target);
      this.activeTooltipHover(event);
      if (!tooltip) {
        return;
      }
      this.hoverTooltip({ tooltip, value });
    };
    this.focusEvent = (event, value) => {
      const tooltip = this.queryTooltip(event.target);
      if (!tooltip) {
        return;
      }
      this.focusTooltip({ tooltip, value });
    };
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    return h(Host, null);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  keyUpHandler(event) {
    if (getKey(event.key) === "Escape") {
      const { tooltipEl } = this;
      if (tooltipEl) {
        this.clearHoverTimeout(tooltipEl);
        this.toggleTooltip(tooltipEl, false);
      }
    }
  }
  mouseEnterShow(event) {
    this.hoverEvent(event, true);
  }
  mouseLeaveHide(event) {
    this.hoverEvent(event, false);
  }
  focusShow(event) {
    this.focusEvent(event, true);
  }
  blurHide(event) {
    this.focusEvent(event, false);
  }
  static get is() { return "calcite-tooltip-manager"; }
  static get properties() { return {
    "selector": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "CSS Selector to match reference elements for tooltips."
      },
      "attribute": "selector",
      "reflect": false,
      "defaultValue": "`[${TOOLTIP_REFERENCE}]`"
    }
  }; }
  static get listeners() { return [{
      "name": "keyup",
      "method": "keyUpHandler",
      "target": "document",
      "capture": false,
      "passive": false
    }, {
      "name": "mouseenter",
      "method": "mouseEnterShow",
      "target": undefined,
      "capture": true,
      "passive": true
    }, {
      "name": "mouseleave",
      "method": "mouseLeaveHide",
      "target": undefined,
      "capture": true,
      "passive": true
    }, {
      "name": "focus",
      "method": "focusShow",
      "target": undefined,
      "capture": true,
      "passive": false
    }, {
      "name": "blur",
      "method": "blurHide",
      "target": undefined,
      "capture": true,
      "passive": false
    }]; }
}
