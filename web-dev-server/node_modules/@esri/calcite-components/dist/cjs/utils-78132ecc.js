'use strict';

function rgbToHex(color) {
  const { r, g, b } = color;
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b
    .toString(16)
    .padStart(2, "0")}`.toLowerCase();
}
const hexChar = /^[0-9A-F]{1}$/i;
const shortHandHex = /^#[0-9A-F]{3}$/i;
const longhandHex = /^#[0-9A-F]{6}$/i;
function isValidHex(hex) {
  return isShorthandHex(hex) || isLonghandHex(hex);
}
function isShorthandHex(hex) {
  return hex && hex.length === 4 && shortHandHex.test(hex);
}
function isLonghandHex(hex) {
  return hex && hex.length === 7 && longhandHex.test(hex);
}
function normalizeHex(hex) {
  hex = hex.toLowerCase();
  if (!hex.startsWith("#")) {
    hex = `#${hex}`;
  }
  if (isShorthandHex(hex)) {
    return rgbToHex(hexToRGB(hex));
  }
  return hex;
}
function hexToRGB(hex) {
  if (!isValidHex(hex)) {
    return null;
  }
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    const [first, second, third] = hex.split("");
    const r = parseInt(`${first}${first}`, 16);
    const g = parseInt(`${second}${second}`, 16);
    const b = parseInt(`${third}${third}`, 16);
    return { r, g, b };
  }
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return { r, g, b };
}
(function (CSSColorMode) {
  CSSColorMode["HEX"] = "hex";
  CSSColorMode["HEXA"] = "hexa";
  CSSColorMode["RGB_CSS"] = "rgb-css";
  CSSColorMode["RGBA_CSS"] = "rgba-css";
  CSSColorMode["HSL_CSS"] = "hsl-css";
  CSSColorMode["HSLA_CSS"] = "hsla-css";
})(exports.CSSColorMode || (exports.CSSColorMode = {}));
var ObjectColorMode;
(function (ObjectColorMode) {
  ObjectColorMode["RGB"] = "rgb";
  ObjectColorMode["RGBA"] = "rgba";
  ObjectColorMode["HSL"] = "hsl";
  ObjectColorMode["HSLA"] = "hsla";
  ObjectColorMode["HSV"] = "hsv";
  ObjectColorMode["HSVA"] = "hsva";
})(ObjectColorMode || (ObjectColorMode = {}));
function parseMode(colorValue) {
  if (typeof colorValue === "string") {
    if (colorValue.startsWith("#")) {
      const { length } = colorValue;
      if (length === 4 || length === 7) {
        return exports.CSSColorMode.HEX;
      }
      if (length === 5 || length === 9) {
        return exports.CSSColorMode.HEXA;
      }
    }
    if (colorValue.startsWith("rgba(")) {
      return exports.CSSColorMode.RGBA_CSS;
    }
    if (colorValue.startsWith("rgb(")) {
      return exports.CSSColorMode.RGB_CSS;
    }
    if (colorValue.startsWith("hsl(")) {
      return exports.CSSColorMode.HSL_CSS;
    }
    if (colorValue.startsWith("hsla(")) {
      return exports.CSSColorMode.HSLA_CSS;
    }
  }
  if (typeof colorValue === "object") {
    if (hasChannels(colorValue, "r", "g", "b")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.RGBA : ObjectColorMode.RGB;
    }
    if (hasChannels(colorValue, "h", "s", "l")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.HSLA : ObjectColorMode.HSL;
    }
    if (hasChannels(colorValue, "h", "s", "v")) {
      return hasChannels(colorValue, "a") ? ObjectColorMode.HSVA : ObjectColorMode.HSV;
    }
  }
  return null;
}
function hasChannels(colorObject, ...channels) {
  return channels.every((channel) => `${channel}` in colorObject);
}
function colorEqual(value1, value2) {
  return value1.rgbNumber() === value2.rgbNumber();
}

exports.colorEqual = colorEqual;
exports.hexChar = hexChar;
exports.hexToRGB = hexToRGB;
exports.isLonghandHex = isLonghandHex;
exports.isValidHex = isValidHex;
exports.normalizeHex = normalizeHex;
exports.parseMode = parseMode;
exports.rgbToHex = rgbToHex;
