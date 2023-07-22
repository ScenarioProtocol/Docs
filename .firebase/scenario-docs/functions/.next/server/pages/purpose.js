"use strict";
(() => {
var exports = {};
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 7908:
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

const title = "Purpose";
const description = "This guide will get you all set up and ready to use the Protocol API. We’ll cover how to get started an API client and how to make your first API request.";
const sections = [
    {
        title: "Use Case Examples",
        id: "use-case-examples",
        ...{
            anchor: true
        }
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        h3: "h3"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Purpose"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The crypto industry moves quickly. Each new day has the potential to bring fresh applications, forks, mints, hacks, airdrops, regulations or use-cases – and that’s without mentioning price volatility. Crypto users are well aware that the space is full of both opportunities and challenges, and they know that they’re best served by paying attention."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Opportunities and threats are often specialised, localised, or require reasonably quick action. This may mean moving liquidity to a new yield farm, meeting airdrop claim criteria before a deadline, getting funds off a failing CEX, or taking advantage of a potential price arbitrage."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Whatever the reason, crypto natives usually need to be highly engaged to minimise risks and maximise opportunities. This constant engagement can result in burn-out."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Switched-on users risk hitting the wall, and less engaged users risk being completely left behind. Users might be heard saying, ‘I’ll be back when X happens,’ without necessarily having a plan for how to be notified when that day comes. Other users may want to step away from the space for a month to clear their head, but know that doing so might cost them if staking suddenly goes live on their favourite token while they’re gone."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "use-case-examples",
                children: "Use Case Examples",
                ...{
                    anchor: true
                }
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Some examples of how a user might use the protocol."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Use Case 1"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "SCENARIO makes it possible for fatigued or busy crypto users to step away from the space with confidence, and at the same time, allows switched-on users to get paid for staying tuned in. SCENARIO is not only a product that crypto users need, but one that addresses a gap in the market. There are currently only a handful of crypto notification services available. These tend to focus exclusively on price alerts, patchy airdrop notifications, or top-down push updates sent by project teams themselves. All of these services are centralised, and none allow users to create bespoke events or scenarios about which they wish to be notified."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Use Case 2"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "SCENARIO also makes it possible for any person, anywhere, to be informed about occurrences of importance to them. This is something which is not easily achieved today without closely monitoring a wide range of channels across various platforms. The protocol will function like a personalised notification assistant, and because of this - though beyond its initial scope - the protocol has the potential to grow to find an addressable market outside the world of crypto, where a highly reliable means for receiving notifications about any event or occurrence globally, irrespective of domain or sector, is an enticing prospect."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Use Case 3"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "SCENARIO’s event occurrence data will exist on-chain. Scenarios sitting in a ‘has occurred / has not yet occurred’ format will be able to serve as triggers for on-chain oracle data outputs and be leveraged by other decentralised applications. The protocol will significantly broaden the range and nature of oracle data currently available through services such as Chainlink and UMA."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Use Case 4"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "SCENARIO’s generation of decentralised consensus about real-word occurrences means that value may one day be placed on the protocol’s ability to separate signal from noise and act as an arbiter of truth more broadly. In such a world, the protocol has the scope to serve not just as a highly flexible oracle on-chain, but as an independent confirmer of truth off it."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "Use Case 5"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "SCENARIO will provide opportunities for engaged users to ‘get the alpha’ by seeing exactly what others are waiting for. As a rich source of insights into a range of outcomes that are niche and/or hotly anticipated, the platform will be able to support features similar to trending topics on Twitter - but with a focus on what is yet to occur rather than what is happening now. Users will be able to see where the public’s interest in future events lies, observing the creation or confirmation of scenario pools in real time and being presented with opportunities to take advantage of the alpha on offer."
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
var __webpack_exports__ = (__webpack_exec__(7908));
module.exports = __webpack_exports__;

})();