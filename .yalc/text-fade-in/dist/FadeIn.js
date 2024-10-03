"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FadeIn = function FadeIn(_ref) {
  var children = _ref.children,
    _ref$lines = _ref.lines,
    lines = _ref$lines === void 0 ? false : _ref$lines,
    _ref$linear = _ref.linear,
    linear = _ref$linear === void 0 ? false : _ref$linear,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  var text = _react["default"].Children.toArray(children).join('');
  (0, _react.useEffect)(function () {
    var fadeElements = document.querySelectorAll('.fade-in span');
    fadeElements.forEach(function (element, index) {
      element.style.setProperty('--delay', "".concat(1 + index * 0.05, "s"));
    });
  }, [text]);
  var fadeContainerStyle = _objectSpread({
    display: 'inline-block'
  }, style);

  // Default text styles
  var defaultTextStyle = {};

  // Header styling (for splitting by words)
  var headerStyle = {
    fontSize: '46px',
    lineHeight: '50px',
    fontWeight: 500,
    color: '#F7F8F8'
  };

  // Body styling (for splitting by lines)
  var bodyStyle = {
    fontSize: '18px',
    lineHeight: '24px',
    color: '#AFAFAF',
    maxWidth: '600px'
  };

  // Determine the text styling based on props
  var textStyle = defaultTextStyle;
  if (linear) {
    textStyle = lines ? bodyStyle : headerStyle;
  }
  var fadeStyle = _objectSpread({
    opacity: 0,
    filter: 'blur(10px)',
    transform: 'translateY(20px)',
    animationName: 'fadeIn',
    animationDuration: '0.7s',
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'forwards',
    animationDelay: 'var(--delay)',
    display: 'inline-block'
  }, textStyle);
  var keyframesStyle = "\n    @keyframes fadeIn {\n      to {\n        opacity: 1;\n        filter: blur(0);\n        transform: translateY(0);\n      }\n    }\n  ";
  var splitText = function splitText() {
    if (lines) {
      return text.split('\n').map(function (line, index) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          key: index,
          style: fadeStyle
        }, line, /*#__PURE__*/_react["default"].createElement("br", null));
      });
    } else {
      return text.split(' ').map(function (word, index) {
        return /*#__PURE__*/_react["default"].createElement("span", {
          key: index,
          style: fadeStyle
        }, word, "\xA0");
      });
    }
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fade-in ".concat(className),
    style: fadeContainerStyle
  }, /*#__PURE__*/_react["default"].createElement("style", null, keyframesStyle), splitText());
};
var _default = exports["default"] = FadeIn;