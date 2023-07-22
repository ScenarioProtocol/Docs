"use strict";
(() => {
var exports = {};
exports.id = 77;
exports.ids = [77];
exports.modules = {

/***/ 3036:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7834);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__]);
_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*@jsxRuntime automatic @jsxImportSource react*/ 

const title = "Growth Pool";
const description = "Scenario's Growth Pool will allow for a future in which free notifications are possible";
const sections = [];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Growth Pool"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "As was noted in ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/revenues",
                        children: "Protocol Revenue"
                    }),
                    ", 2% of all funds paid out from resolved scenario pools will be directed to a protocol growth pool. The purpose of funds in the growth pool will be to allow for a future in which free notifications are possible. Free notifications will not be made available initially, but are likely to be important in ultimately providing the type of optionality and user experience that will allow the protocol to scale to a large retail user base."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Once the growth pool reaches a certain size (or when protocol adoption is deemed by the founding team to be at a suitable level), a ‘free pool’ option will be switched on and made available to asker-makers. Free pools will mean that anyone can create a pool (or join ‘free pools’) without needing to pay a fee, with the incentive for confirmers to resolve the pool and trigger a notification coming instead from the funds in the growth pool."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "It is expected that relative to standard pools, the rewards for acting as a confirmer and resolving a free pool will be modest; for this reason, askers who create or join free pools will be aware that they may receive a lower level of service, potentially with less guarantees of notification receipt. However, in time, the growth pool may develop to a level that makes it a powerful asset for the protocol."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "In its early phases, the founding team will explore ways to ensure that funds in the growth pool are productive and yield-bearing by deploying them in low-risk DeFi protocols. Automated conversion to staked ETH (in the form of liquid staking tokens) will also be an option for the longer-term use of funds in the growth pool. Additionally, as noted in ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "/tokenomics#token-s-primary-functions",
                        children: "Tokenomics"
                    }),
                    ", the growth pool will be bolstered by receiving 50% of any slashed SNR for the life of the protocol."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To ensure that the growth pool is never fully depleted, free scenario pools will only be able to receive a predetermined percentage of the available funds in the growth pool for each instance of pool resolution. Whilst this will necessarily mean a smaller pay-out to confirmers (especially initially), as long as the pay-out for acting as a confirmer is larger than the gas cost of doing so, an incentive will still exist for free pools to be resolved and notifications to be sent to askers."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A feature of the pre-token ‘user reputation’ phase in the protocol’s early life will be the ability for any user to contribute or donate to this growth pool by choice. During this period, as users are being allocated ‘reputation scores’ by the founding team, voluntary contributions to the growth pool will be among the many factors taken into consideration for the allocation of reputation points. More detailed information will be made available to users once reputation scoring (pre token generation) is live."
            })
        ]
    });
}
function MDXContent(props = {}) {
    const { wrapper: MDXLayout  } = Object.assign({}, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return MDXLayout ? react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXLayout, Object.assign({}, props, {
        children: react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_createMdxContent, props)
    })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);
const getStaticProps = ()=>({
        props: JSON.parse(JSON.stringify({
            _provideComponents: _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents,
            description,
            sections,
            title
        }))
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3036));
module.exports = __webpack_exports__;

})();