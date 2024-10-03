import * as React from 'react';

function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

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
  React.useEffect(function () {
    var fadeElements = document.querySelectorAll('.fade-in .fade-element');
    fadeElements.forEach(function (element, index) {
      element.style.setProperty('--delay', "".concat(1 + index * 0.05, "s"));
    });
  }, [children]);
  var fadeContainerStyle = _objectSpread2({
    display: 'inline-block'
  }, style);

  // Default text styles
  var defaultTextStyle = {};

  // Header styling (for splitting by words)
  var headerStyle = _defineProperty(_defineProperty(_defineProperty({
    fontSize: '56px',
    lineHeight: '62px',
    fontWeight: 500,
    maxWidth: '750px',
    color: '#F7F8F8'
  }, "fontWeight", '500'), "fontFamily", 'Inter, sans-serif'), "letterSpacing", '-1.8px');

  // Body styling (for splitting by lines)
  var bodyStyle = {
    fontSize: '21px',
    lineHeight: '28px',
    fontWeight: '400',
    color: '#B4B5B5',
    maxWidth: '600px',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '-0.4px'
  };

  // Determine the text styling based on props
  var textStyle = defaultTextStyle;
  if (linear) {
    textStyle = lines ? bodyStyle : headerStyle;
  }
  var fadeStyle = _objectSpread2({
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
      // Map over the children directly
      var lineElements = React.Children.toArray(children);
      return lineElements.map(function (line, index) {
        return /*#__PURE__*/React.createElement("span", {
          key: index,
          className: "fade-element",
          style: fadeStyle
        }, line, /*#__PURE__*/React.createElement("br", null));
      });
    } else {
      // For word splitting, join all text and split by spaces
      var text = React.Children.toArray(children).join('');
      var words = text.split(' ').filter(function (word) {
        return word !== '';
      });
      return words.map(function (word, index) {
        return /*#__PURE__*/React.createElement("span", {
          key: index,
          className: "fade-element",
          style: fadeStyle
        }, word, "\xA0");
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "fade-in ".concat(className),
    style: fadeContainerStyle
  }, /*#__PURE__*/React.createElement("style", null, keyframesStyle), splitText());
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');\n";
styleInject(css_248z);

export { FadeIn as default };
