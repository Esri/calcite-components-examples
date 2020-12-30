'use strict';

const index = require('./index-a9091fa4.js');
const dom = require('./dom-031e5053.js');
const debounce = require('./debounce-4a59289e.js');
const array = require('./array-4fc5abfa.js');
const resources = require('./resources-d8f3a156.js');

function mutationObserverCallback() {
  this.setUpItems();
  this.setUpFilter();
}
const SUPPORTED_ARROW_KEYS = ["ArrowUp", "ArrowDown"];
// --------------------------------------------------------------------------
//
//  Lifecycle
//
// --------------------------------------------------------------------------
function initialize() {
  this.setUpItems();
  this.setUpFilter();
  this.emitCalciteListChange = debounce.debounce(internalCalciteListChangeEvent.bind(this), 0);
}
function initializeObserver() {
  this.observer.observe(this.el, { childList: true, subtree: true });
}
function cleanUpObserver() {
  this.observer.disconnect();
}
// --------------------------------------------------------------------------
//
//  Listeners
//
// --------------------------------------------------------------------------
function calciteListItemChangeHandler(event) {
  const { selectedValues } = this;
  const { item, value, selected, shiftPressed } = event.detail;
  if (selected) {
    if (!this.multiple) {
      this.deselectSiblingItems(item);
    }
    if (this.multiple && shiftPressed) {
      this.selectSiblings(item);
    }
    selectedValues.set(value, item);
  }
  else {
    selectedValues.delete(value);
    if (this.multiple && shiftPressed) {
      this.selectSiblings(item, true);
    }
  }
  if (!this.multiple) {
    toggleSingleSelectItemTabbing(item, selected);
  }
  this.lastSelectedItem = item;
  this.emitCalciteListChange();
}
function calciteListItemValueChangeHandler(event) {
  event.stopPropagation();
  const oldValue = event.detail.oldValue;
  const selectedValues = this.selectedValues;
  if (selectedValues.has(oldValue)) {
    const item = selectedValues.get(oldValue);
    selectedValues.delete(oldValue);
    selectedValues.set(event.detail.newValue, item);
  }
}
// --------------------------------------------------------------------------
//
//  Private Methods
//
// --------------------------------------------------------------------------
function isValidNavigationKey(key) {
  return !!SUPPORTED_ARROW_KEYS.find((k) => k === key);
}
function keyDownHandler(event) {
  const { key, target } = event;
  if (!isValidNavigationKey(key)) {
    return;
  }
  const { items, multiple } = this;
  const { length: totalItems } = items;
  const currentIndex = items.indexOf(target);
  if (!totalItems || currentIndex === -1) {
    return;
  }
  event.preventDefault();
  const index = array.getRoundRobinIndex(currentIndex + (key === "ArrowUp" ? -1 : 1), totalItems);
  const item = items[index];
  toggleSingleSelectItemTabbing(item, true);
  dom.focusElement(item);
  if (!multiple) {
    item.selected = true;
  }
}
function internalCalciteListChangeEvent() {
  this.calciteListChange.emit(this.selectedValues);
}
function removeItem(event) {
  if (event.defaultPrevented) {
    return;
  }
  const item = event.target;
  const selectedValues = this.selectedValues;
  if (item.parentElement.tagName === "CALCITE-PICK-LIST-GROUP") {
    item.parentElement.remove();
    Array.from(item.parentElement.children).forEach((item) => selectedValues.delete(item.value));
  }
  else {
    item.remove();
    selectedValues.delete(item.value);
  }
  this.emitCalciteListChange();
}
function toggleSingleSelectItemTabbing(item, selectable) {
  // using attribute intentionally
  if (selectable) {
    item.removeAttribute("tabindex");
  }
  else {
    item.setAttribute("tabindex", "-1");
  }
}
function setFocus() {
  const { multiple, items } = this;
  if (items.length === 0) {
    return;
  }
  if (multiple) {
    return items[0].setFocus();
  }
  const selected = items.find((item) => item.selected);
  return (selected ? selected : items[0]).setFocus();
}
function setUpItems(tagName) {
  this.items = Array.from(this.el.querySelectorAll(tagName));
  let hasSelected = false;
  const { items } = this;
  items.forEach((item) => {
    item.icon = this.getIconType();
    if (!this.multiple) {
      item.disableDeselect = true;
      toggleSingleSelectItemTabbing(item, false);
    }
    if (item.selected) {
      hasSelected = true;
      toggleSingleSelectItemTabbing(item, true);
      this.selectedValues.set(item.value, item);
    }
  });
  const [first] = items;
  if (!hasSelected && first) {
    toggleSingleSelectItemTabbing(first, true);
  }
}
function deselectSiblingItems(item) {
  this.items.forEach((currentItem) => {
    if (currentItem.value !== item.value) {
      currentItem.toggleSelected(false);
      if (this.selectedValues.has(currentItem.value)) {
        this.selectedValues.delete(currentItem.value);
      }
    }
  });
}
function selectSiblings(item, deselect = false) {
  if (!this.lastSelectedItem) {
    return;
  }
  const { items } = this;
  const start = items.findIndex((currentItem) => {
    return currentItem.value === this.lastSelectedItem.value;
  });
  const end = items.findIndex((currentItem) => {
    return currentItem.value === item.value;
  });
  items.slice(Math.min(start, end), Math.max(start, end)).forEach((currentItem) => {
    currentItem.toggleSelected(!deselect);
    if (!deselect) {
      this.selectedValues.set(currentItem.value, currentItem);
    }
    else {
      this.selectedValues.delete(currentItem.value);
    }
  });
}
let groups;
function handleFilter(event) {
  const filteredData = event.detail;
  const values = filteredData.map((item) => item.value);
  if (!groups) {
    groups = new Set();
  }
  const matchedItems = this.items.filter((item) => {
    const parent = item.parentElement;
    const grouped = parent.matches("calcite-pick-list-group");
    if (grouped) {
      groups.add(parent);
    }
    const matches = values.includes(item.value);
    item.hidden = !matches;
    return matches;
  });
  groups.forEach((group) => {
    const hasAtLeastOneMatch = matchedItems.some((item) => group.contains(item));
    group.hidden = !hasAtLeastOneMatch;
    if (!hasAtLeastOneMatch) {
      return;
    }
    const parentItem = dom.getSlotted(group, "parent-item");
    if (parentItem) {
      parentItem.hidden = false;
      if (matchedItems.includes(parentItem)) {
        Array.from(group.children).forEach((child) => (child.hidden = false));
      }
    }
  });
  groups.clear();
}
function getItemData() {
  return this.items.map((item) => ({
    label: item.label,
    description: item.description,
    metadata: item.metadata,
    value: item.value
  }));
}

var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const List = (_a) => {
  var { props: { disabled, loading, filterEnabled, dataForFilter, handleFilter, filterPlaceholder, el } } = _a, rest = __rest(_a, ["props"]);
  const defaultSlot = index.h("slot", null);
  return (index.h(index.Host, Object.assign({ "aria-busy": loading.toString(), "aria-disabled": disabled.toString(), role: "menu" }, rest),
    index.h("section", null,
      index.h("header", { class: { [resources.CSS.sticky]: true } },
        filterEnabled ? (index.h("calcite-filter", { "aria-label": filterPlaceholder, data: dataForFilter, dir: dom.getElementDir(el), onCalciteFilterChange: handleFilter, placeholder: filterPlaceholder })) : null,
        index.h("slot", { name: "menu-actions" })),
      loading || disabled ? (index.h("calcite-scrim", { loading: loading, theme: dom.getElementTheme(el) }, defaultSlot)) : (defaultSlot))));
};

exports.List = List;
exports.calciteListItemChangeHandler = calciteListItemChangeHandler;
exports.calciteListItemValueChangeHandler = calciteListItemValueChangeHandler;
exports.cleanUpObserver = cleanUpObserver;
exports.deselectSiblingItems = deselectSiblingItems;
exports.getItemData = getItemData;
exports.handleFilter = handleFilter;
exports.initialize = initialize;
exports.initializeObserver = initializeObserver;
exports.keyDownHandler = keyDownHandler;
exports.mutationObserverCallback = mutationObserverCallback;
exports.removeItem = removeItem;
exports.selectSiblings = selectSiblings;
exports.setFocus = setFocus;
exports.setUpItems = setUpItems;
