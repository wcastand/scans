webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "./node_modules/emotion/dist/index.esm.js");
/* harmony import */ var _c_fakeSuspense__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../c/fakeSuspense */ "./c/fakeSuspense.js");
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client */ "./client.js");
/* harmony import */ var _c_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../c/layout */ "./c/layout.js");
/* harmony import */ var _c_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../c/list */ "./c/list.js");
/* harmony import */ var _c_scan__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../c/scan */ "./c/scan.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    box-sizing: border-box;\n  }\n  html, body {\n    font-family: Arial, Helvetica, sans-serif;\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1.5;\n    font-size: 16px;\n    margin: 0;\n    padding: 0;\n    color: #181419;\n    background-color: #FFF;\n    background: #FFF url(\"/static/pattern.png\") no-repeat fixed center;\n    background-image: url('/static/pattern.png') repeat center center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








Object(emotion__WEBPACK_IMPORTED_MODULE_1__["injectGlobal"])(_templateObject());
var query = "{ allScans { id name uri chapter} }";
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.7c708ae29fc924b75de0.hot-update.js.map