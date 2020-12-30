import { Component, Element, Host, Listen, Method, Prop, State, h } from "@stencil/core";
import { CSS } from "./resources";
/**
 * @slot - A slot for adding `calcite-panel`s to the flow.
 */
export class CalciteFlow {
  constructor() {
    this.panelCount = 0;
    this.flowDirection = null;
    this.panels = [];
    this.getFlowDirection = (oldPanelCount, newPanelCount) => {
      const allowRetreatingDirection = oldPanelCount > 1;
      const allowAdvancingDirection = oldPanelCount && newPanelCount > 1;
      if (!allowAdvancingDirection && !allowRetreatingDirection) {
        return null;
      }
      return newPanelCount < oldPanelCount ? "retreating" : "advancing";
    };
    this.updateFlowProps = () => {
      const { panels } = this;
      const newPanels = Array.from(this.el.querySelectorAll("calcite-panel"));
      const oldPanelCount = panels.length;
      const newPanelCount = newPanels.length;
      const activePanel = newPanels[newPanelCount - 1];
      const previousPanel = newPanels[newPanelCount - 2];
      if (newPanelCount && activePanel) {
        newPanels.forEach((panelNode) => {
          panelNode.showBackButton = newPanelCount > 1;
          panelNode.hidden = panelNode !== activePanel;
        });
      }
      if (previousPanel) {
        previousPanel.menuOpen = false;
      }
      this.panels = newPanels;
      if (oldPanelCount !== newPanelCount) {
        const flowDirection = this.getFlowDirection(oldPanelCount, newPanelCount);
        this.panelCount = newPanelCount;
        this.flowDirection = flowDirection;
      }
    };
    this.panelItemObserver = new MutationObserver(this.updateFlowProps);
  }
  // --------------------------------------------------------------------------
  //
  //  Public Methods
  //
  // --------------------------------------------------------------------------
  /**
   * Removes the currently active `calcite-panel`.
   */
  async back() {
    const lastItem = this.el.querySelector("calcite-panel:last-child");
    if (!lastItem) {
      return;
    }
    const beforeBack = lastItem.beforeBack
      ? lastItem.beforeBack
      : () => Promise.resolve();
    return beforeBack.call(lastItem).then(() => {
      lastItem.remove();
      return lastItem;
    });
  }
  // --------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  // --------------------------------------------------------------------------
  connectedCallback() {
    this.panelItemObserver.observe(this.el, { childList: true, subtree: true });
    this.updateFlowProps();
  }
  disconnectedCallback() {
    this.panelItemObserver.disconnect();
  }
  // --------------------------------------------------------------------------
  //
  //  Private Methods
  //
  // --------------------------------------------------------------------------
  handleCalcitePanelBackClick() {
    this.back();
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const { flowDirection, panelCount } = this;
    const frameDirectionClasses = {
      [CSS.frame]: true,
      [CSS.frameAdvancing]: flowDirection === "advancing",
      [CSS.frameRetreating]: flowDirection === "retreating"
    };
    return (h(Host, null,
      h("div", { class: frameDirectionClasses, key: panelCount },
        h("slot", null))));
  }
  static get is() { return "calcite-flow"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-flow.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-flow.css"]
  }; }
  static get properties() { return {
    "theme": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "CalciteTheme",
        "resolved": "\"dark\" | \"light\"",
        "references": {
          "CalciteTheme": {
            "location": "import",
            "path": "../interfaces"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Used to set the component's color scheme."
      },
      "attribute": "theme",
      "reflect": true
    }
  }; }
  static get states() { return {
    "panelCount": {},
    "flowDirection": {},
    "panels": {}
  }; }
  static get methods() { return {
    "back": {
      "complexType": {
        "signature": "() => Promise<HTMLCalcitePanelElement>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          },
          "HTMLCalcitePanelElement": {
            "location": "global"
          }
        },
        "return": "Promise<HTMLCalcitePanelElement>"
      },
      "docs": {
        "text": "Removes the currently active `calcite-panel`.",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "el"; }
  static get listeners() { return [{
      "name": "calcitePanelBackClick",
      "method": "handleCalcitePanelBackClick",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
