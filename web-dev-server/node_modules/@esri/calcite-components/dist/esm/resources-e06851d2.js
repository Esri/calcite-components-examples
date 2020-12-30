const CSS = {
  sticky: "sticky"
};
var ICON_TYPES;
(function (ICON_TYPES) {
  ICON_TYPES["circle"] = "circle";
  ICON_TYPES["square"] = "square";
  ICON_TYPES["grip"] = "grip";
})(ICON_TYPES || (ICON_TYPES = {}));

export { CSS as C, ICON_TYPES as I };
