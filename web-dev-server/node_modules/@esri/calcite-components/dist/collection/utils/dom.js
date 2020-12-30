export function nodeListToArray(nodeList) {
  return Array.isArray(nodeList) ? nodeList : Array.from(nodeList);
}
export function getElementDir(el) {
  return getElementProp(el, "dir", "ltr");
}
export function getElementTheme(el) {
  return getElementProp(el, "theme", "light");
}
export function getElementProp(el, prop, fallbackValue, crossShadowBoundary = false) {
  const selector = `[${prop}]`;
  const closest = crossShadowBoundary ? closestElementCrossShadowBoundary(selector, el) : el.closest(selector);
  return closest ? closest.getAttribute(prop) : fallbackValue;
}
function closestElementCrossShadowBoundary(selector, base = this) {
  // based on https://stackoverflow.com/q/54520554/194216
  function closestFrom(el) {
    if (!el || el === document || el === window)
      return null;
    const found = el.closest(selector);
    return found ? found : closestFrom(el.getRootNode().host);
  }
  return closestFrom(base);
}
export function focusElement(el) {
  if (!el) {
    return;
  }
  typeof el.setFocus === "function" ? el.setFocus() : el.focus();
}
export function getSlotted(element, slotName, options) {
  const slotSelector = `[slot="${slotName}"]`;
  if (options === null || options === void 0 ? void 0 : options.all) {
    return queryMultiple(element, slotSelector, options);
  }
  return querySingle(element, slotSelector, options);
}
function queryMultiple(element, slotSelector, options) {
  let matches = Array.from(element.querySelectorAll(slotSelector));
  matches = options && options.direct === false ? matches : matches.filter((el) => el.parentElement === element);
  const selector = options === null || options === void 0 ? void 0 : options.selector;
  return selector
    ? matches
      .map((item) => Array.from(item.querySelectorAll(selector)))
      .reduce((previousValue, currentValue) => [...previousValue, ...currentValue], [])
      .filter((match) => !!match)
    : matches;
}
function querySingle(element, slotSelector, options) {
  let match = element.querySelector(slotSelector);
  match = options && options.direct === false ? match : (match === null || match === void 0 ? void 0 : match.parentElement) === element ? match : null;
  const selector = options === null || options === void 0 ? void 0 : options.selector;
  return selector ? match.querySelector(selector) : match;
}
export function filterDirectChildren(el, selector) {
  return Array.from(el.children).filter((child) => child.matches(selector));
}
export function getElementByAttributeId(element, attrName) {
  const id = element === null || element === void 0 ? void 0 : element.getAttribute(attrName);
  return (id && document.getElementById(id)) || null;
}
export function hasLabel(labelEl, el) {
  return labelEl.contains(el);
}
// set a default icon from a defined set or allow an override with an icon name string
export function setRequestedIcon(iconObject, iconValue, matchedValue) {
  if (typeof iconValue === "string" && iconValue !== "") {
    return iconValue;
  }
  else if (iconValue === "") {
    return iconObject[matchedValue];
  }
}
