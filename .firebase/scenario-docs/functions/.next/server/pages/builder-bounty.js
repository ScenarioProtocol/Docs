"use strict";
(() => {
var exports = {};
exports.id = 753;
exports.ids = [753];
exports.modules = {

/***/ 8950:
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

const title = "Builder Bounty Fund & SDK";
const description = "Funding for building on top of the Scenario Protocol.";
const sections = [];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Builder Bounty Fund & SDK"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "7% of the total supply of SNR (7,000,000 tokens) will be set aside for targeted builder bounty programs (to be awarded at the discretion of the founding team). The primary focus of this fund will be to encourage other builders to develop new and/or novel solutions for the protocol’s front-end notification service which improve upon or complement the founding team’s front end. Alternate front-ends will have the potential to create new drivers for user onboarding through targeting different user groups, being easier to use, being more decentralised, or simply by offering additional UI options for users."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "One example of how this model might work would be a case in which a third party decided to develop a centralised and/or highly abstracted notifications front-end utilising the SCENARIO protocol as a back end. This third party builder would be able to add an additional take-rate as part of their new product or service, and would be rewarded by the SCENARIO team in SNR tokens for bringing additional activity to the protocol. In this example, the Builder Bounty Fund is being used to fast-track adoption by supporting a front-end product that allows retail users to enjoy a fiat onramp and request notifications without having to engage with the self-custodying or on-chain aspects of the protocol. Such users may have no interest in the mechanisms that make the service effective, whilst still seeing great value in being able to generate novel and personalised notification requests that are quickly triggered when needed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "IMAGE GOES HERE"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A JavaScript software development kit (SDK) will provide a quick and easy way for third-party developers to interact with Scenario's smart contracts. The SDK will be designed to support both web2 and web3-native developers and allow them to build performant front-ends without having to worry about how best to communicate with the blockchain or have a strong understanding of the Solidity language. All functionality relating to SCENARIO contracts, such as creating, joining and confirming pools, will be abstracted away behind an easy-to-use SDK."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Initially, the builder bounty fund will also be the recipient of 50% of any slashed SNR in instances where users are penalised for dishonest pool resolutions. Once the protocol has reached maturity and the founding team’s involvement has reduced or ended, slashed SNR will instead be redirected to SNR stakers."
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
var __webpack_exports__ = (__webpack_exec__(8950));
module.exports = __webpack_exports__;

})();