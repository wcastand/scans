module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./c/btn.js":
/*!******************!*\
  !*** ./c/btn.js ***!
  \******************/
/*! exports provided: Delete, Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  outline: none;\n  border: none;\n  background: none;\n  font-size: 22px;\n  font-weight: bold;\n  line-height: 16px;\n  color: #fc3a51;\n  width: 24px;\n  height: 24px;\n  padding: 4px;\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 16px;\n  transition: transform 0.3s ease;\n  transform: rotate(0deg);\n\n  &:hover {\n    transform: rotate(90deg);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 24px;\n  min-height: 100%;\n  outline: none;\n  border: none;\n  background: none;\n  color: #fff;\n  padding: 0;\n  background-color: #fc3a51;\n  transition: left 0.3s ease-in;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Del = react_emotion__WEBPACK_IMPORTED_MODULE_1___default()('button')(_templateObject());
var DelText = react_emotion__WEBPACK_IMPORTED_MODULE_1___default()('span')(_templateObject2());
var Action = react_emotion__WEBPACK_IMPORTED_MODULE_1___default()('button')(_templateObject3());
var Delete = function Delete(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Del, props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DelText, null, "\u2716"));
};
var Button = function Button(_ref) {
  var text = _ref.text,
      props = _objectWithoutProperties(_ref, ["text"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Action, props, text);
};

/***/ }),

/***/ "./c/fakeSuspense.js":
/*!***************************!*\
  !*** ./c/fakeSuspense.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var loading = _ref.loading,
      fallback = _ref.fallback,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["loading", "fallback", "children"]);

  return loading ? fallback : children(_objectSpread({
    loading: loading
  }, props));
});

/***/ }),

/***/ "./c/input.js":
/*!********************!*\
  !*** ./c/input.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 24px;\n  font-size: 14px;\n  border: none;\n  outline: none;\n  text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (react_emotion__WEBPACK_IMPORTED_MODULE_0___default()('input')(_templateObject()));

/***/ }),

/***/ "./c/layout.js":
/*!*********************!*\
  !*** ./c/layout.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display:flex;\n  justify-content: flex-start;\n  align-items: flex-start;\n  width: 100%;\n  min-height: 100vh;\n  padding: 15px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Layout = react_emotion__WEBPACK_IMPORTED_MODULE_1___default()('div')(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./c/list.js":
/*!*******************!*\
  !*** ./c/list.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-start;\n  align-items: flex-start;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


/* harmony default export */ __webpack_exports__["default"] = (react_emotion__WEBPACK_IMPORTED_MODULE_0___default()('ul')(_templateObject()));

/***/ }),

/***/ "./c/scan.js":
/*!*******************!*\
  !*** ./c/scan.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "react-emotion");
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btn */ "./c/btn.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./input */ "./c/input.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 96px;\n  height: 100%;\n  padding: 8px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: stretch;\n  flex: 3;\n  text-decoration: none;\n  color: #181419;\n  padding-left: 0px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  padding: 8px;\n  text-decoration: none;\n  color: #181419;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 2px;\n  background-color: #fff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Item = react_emotion__WEBPACK_IMPORTED_MODULE_1___default()('li')(_templateObject());
var Link = react_emotion__WEBPACK_IMPORTED_MODULE_1___default()('a')(_templateObject2());
var Name = react_emotion__WEBPACK_IMPORTED_MODULE_1___default()('div')(_templateObject3());
var Controls = react_emotion__WEBPACK_IMPORTED_MODULE_1___default()('div')(_templateObject4());
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _ref$scan = _ref.scan,
      id = _ref$scan.id,
      name = _ref$scan.name,
      uri = _ref$scan.uri,
      chapter = _ref$scan.chapter;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(chapter),
      _useState2 = _slicedToArray(_useState, 2),
      chap = _useState2[0],
      setChap = _useState2[1];

  var down = function down() {
    return setChap(chap - 1);
  };

  var up = function up() {
    return setChap(chap + 1);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_btn__WEBPACK_IMPORTED_MODULE_2__["Delete"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    target: "_blank",
    href: "".concat(uri, "/").concat(chapter)
  }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Controls, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_btn__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    text: "-",
    onClick: down
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    value: chap,
    onChange: function onChange(e) {
      return setChap(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_btn__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    text: "+",
    onClick: up
  })));
});

/***/ }),

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-request */ "graphql-request");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var useGraphQL = function useGraphQL(query, data) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    loading: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return Object(graphql_request__WEBPACK_IMPORTED_MODULE_1__["request"])('/api', query, data).then(function (res) {
      return setState({
        data: res,
        loading: false
      });
    });
  }, []);
  return state;
};

/* harmony default export */ __webpack_exports__["default"] = (useGraphQL);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _c_fakeSuspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../c/fakeSuspense */ "./c/fakeSuspense.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _c_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../c/layout */ "./c/layout.js");
/* harmony import */ var _c_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../c/list */ "./c/list.js");
/* harmony import */ var _c_scan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../c/scan */ "./c/scan.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n  html, body {\n    font-family: Arial, Helvetica, sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.5;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n    color: #181419;\n    background-color: #FFF;\n    background: #FFF url(\"/static/pattern.png\") repeat fixed center;\n    background-size: 35%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var query = "{ allScans { id name uri chapter} }";
Object(emotion__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useGraphQL = Object(_client__WEBPACK_IMPORTED_MODULE_3__["default"])(query),
      loading = _useGraphQL.loading,
      data = _useGraphQL.data;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_c_layout__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_c_fakeSuspense__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Loading..."),
    loading: loading
  }, function () {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_c_list__WEBPACK_IMPORTED_MODULE_5__["default"], null, data.allScans.map(function (scan) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_c_scan__WEBPACK_IMPORTED_MODULE_6__["default"], {
        scan: scan,
        key: scan.id
      });
    }));
  }));
});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("emotion");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-request");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-emotion":
/*!********************************!*\
  !*** external "react-emotion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-emotion");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map