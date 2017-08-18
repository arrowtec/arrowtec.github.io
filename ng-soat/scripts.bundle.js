webpackJsonp([3],{

/***/ "../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/culqi.js":
/***/ (function(module, exports) {

module.exports = "var culqiActions = (function () {\r\n    return {\r\n        pagar: function () {\r\n            Culqi.publicKey = 'pk_test_gg8EU9cGeF7EQO0W';\r\n            Culqi.settings({\r\n                title: 'Soat en linea',\r\n                currency: 'PEN',\r\n                description: 'Soat en linea',\r\n                amount: 7500\r\n            });\r\n\r\n            Culqi.open();\r\n        }\r\n    }\r\n})(culqiActions || {});"

/***/ }),

/***/ "../../../../script-loader/addScript.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(src) {
	if (typeof execScript !== "undefined")
		execScript(src);
	else
		eval.call(null, src);
}


/***/ }),

/***/ "../../../../script-loader/index.js!../../../../../src/culqi.js":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../script-loader/addScript.js")(__webpack_require__("../../../../raw-loader/index.js!../../../../source-map-loader/index.js!../../../../../src/culqi.js"))

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../script-loader/index.js!../../../../../src/culqi.js");


/***/ })

},[3]);
//# sourceMappingURL=scripts.bundle.js.map