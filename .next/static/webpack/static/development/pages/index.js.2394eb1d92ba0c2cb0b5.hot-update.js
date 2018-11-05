webpackHotUpdate("static/development/pages/index.js",{

/***/ "./c/scan.js":
/*!*******************!*\
  !*** ./c/scan.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-emotion */ "./node_modules/react-emotion/dist/index.esm.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _btn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./btn */ "./c/btn.js");
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./input */ "./c/input.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  padding: 8px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex: 1;\n  justify-content: flex-start;\n  align-items: stretch;\n  height: 40px;\n  margin: 8px 0;\n  overflow: hidden;\n  border-radius: 2px;\n  background-color: #fff;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Item = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])('li')(_templateObject());
var Link = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])('a')(_templateObject2());
var Name = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject3());
var Controls = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__["default"])('div')(_templateObject4());
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

  var query = "mutation ($id: ID, $scan: ScanInput) {\n    updateScan(id: $id, scan: $scan) {\n      id\n      chapter\n    }\n  }";
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return _client__WEBPACK_IMPORTED_MODULE_2__["client"].request(query, {
      id: id,
      scan: {
        chapter: chap
      }
    });
  }, [chap]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Name, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_btn__WEBPACK_IMPORTED_MODULE_3__["Delete"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    target: "_blank",
    href: "".concat(uri, "/").concat(chapter)
  }, name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Controls, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_btn__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    text: "-",
    onClick: down
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_input__WEBPACK_IMPORTED_MODULE_4__["default"], {
    align: "center",
    value: chap,
    onChange: function onChange(e) {
      return setChap(e.target.value);
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_btn__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    text: "+",
    onClick: up
  })));
});

/***/ })

})
//# sourceMappingURL=index.js.2394eb1d92ba0c2cb0b5.hot-update.js.map