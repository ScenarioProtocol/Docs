"use strict";
exports.id = 513;
exports.ids = [513];
exports.modules = {

/***/ 5513:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ GridPattern)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function GridPattern({ width , height , x , y , squares , ...props }) {
    let patternId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pattern", {
                    id: patternId,
                    width: width,
                    height: height,
                    patternUnits: "userSpaceOnUse",
                    x: x,
                    y: y,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        d: `M.5 ${height}V.5H${width}`,
                        fill: "none"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                width: "100%",
                height: "100%",
                strokeWidth: 0,
                fill: `url(#${patternId})`
            }),
            squares && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                x: x,
                y: y,
                className: "overflow-visible",
                children: squares.map(([x, y])=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                        strokeWidth: "0",
                        width: width + 1,
                        height: height + 1,
                        x: x * width,
                        y: y * height
                    }, `${x}-${y}`))
            })
        ]
    });
}


/***/ })

};
;