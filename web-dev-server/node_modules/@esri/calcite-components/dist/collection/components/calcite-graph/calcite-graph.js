import { Component, Element, Prop, h } from "@stencil/core";
import { guid } from "../../utils/guid";
import { area, range, translate } from "./util";
export class CalciteGraph {
  constructor() {
    //--------------------------------------------------------------------------
    //
    //  Properties
    //
    //--------------------------------------------------------------------------
    /**
     * Array of tuples describing a single data point ([x, y])
     * These data points should be sorted by x-axis value
     */
    this.data = [];
    /** Width of graph in pixels*/
    this.width = 300;
    /** Width of graph in pixels*/
    this.height = 100;
    //--------------------------------------------------------------------------
    //
    //  Private State/Props
    //
    //--------------------------------------------------------------------------
    this.maskId = `calcite-graph-mask-${guid()}`;
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  render() {
    const { data, width, height, highlightMax, highlightMin } = this;
    const id = this.maskId;
    // if we have no data, return empty svg
    if (!data || data.length === 0) {
      return (h("svg", { class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width }));
    }
    const { min, max } = range(data);
    const t = translate({ min, max, width, height });
    const [hMinX] = t([highlightMin, max[1]]);
    const [hMaxX] = t([highlightMax, max[1]]);
    const areaPath = area({ data, min, max, t });
    return (h("svg", { class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width }, highlightMin !== undefined ? (h("svg", { class: "svg", height: height, preserveAspectRatio: "none", viewBox: `0 0 ${width} ${height}`, width: width },
      h("mask", { height: "100%", id: `${id}1`, width: "100%", x: "0%", y: "0%" },
        h("path", { d: `
              M 0,0
              L ${hMinX - 1},0
              L ${hMinX - 1},${height}
              L 0,${height}
              Z
            `, fill: "white" })),
      h("mask", { height: "100%", id: `${id}2`, width: "100%", x: "0%", y: "0%" },
        h("path", { d: `
              M ${hMinX + 1},0
              L ${hMaxX - 1},0
              L ${hMaxX - 1},${height}
              L ${hMinX + 1}, ${height}
              Z
            `, fill: "white" })),
      h("mask", { height: "100%", id: `${id}3`, width: "100%", x: "0%", y: "0%" },
        h("path", { d: `
                  M ${hMaxX + 1},0
                  L ${width},0
                  L ${width},${height}
                  L ${hMaxX + 1}, ${height}
                  Z
                `, fill: "white" })),
      h("path", { class: "graph-path", d: areaPath, mask: `url(#${id}1)` }),
      h("path", { class: "graph-path--highlight", d: areaPath, mask: `url(#${id}2)` }),
      h("path", { class: "graph-path", d: areaPath, mask: `url(#${id}3)` }))) : (h("path", { class: "graph-path", d: areaPath }))));
  }
  static get is() { return "calcite-graph"; }
  static get originalStyleUrls() { return {
    "$": ["calcite-graph.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["calcite-graph.css"]
  }; }
  static get properties() { return {
    "data": {
      "type": "unknown",
      "mutable": false,
      "complexType": {
        "original": "DataSeries",
        "resolved": "Point[]",
        "references": {
          "DataSeries": {
            "location": "import",
            "path": "../../interfaces/Graph"
          }
        }
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Array of tuples describing a single data point ([x, y])\nThese data points should be sorted by x-axis value"
      },
      "defaultValue": "[]"
    },
    "width": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Width of graph in pixels"
      },
      "attribute": "width",
      "reflect": false,
      "defaultValue": "300"
    },
    "height": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Width of graph in pixels"
      },
      "attribute": "height",
      "reflect": false,
      "defaultValue": "100"
    },
    "highlightMin": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Start of highlight color if highlighting range"
      },
      "attribute": "highlight-min",
      "reflect": false
    },
    "highlightMax": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "End of highlight color if highlighting range"
      },
      "attribute": "highlight-max",
      "reflect": false
    }
  }; }
  static get elementRef() { return "el"; }
}
