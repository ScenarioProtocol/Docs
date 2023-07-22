"use strict";
(() => {
var exports = {};
exports.id = 886;
exports.ids = [886];
exports.modules = {

/***/ 6773:
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

const title = "Protocol User Categories";
const description = "The two different user types of the Scenario Protocol.";
const sections = [
    {
        title: "Askers",
        id: "askers",
        ...undefined
    },
    {
        title: "Confirmers",
        id: "confirmers",
        ...undefined
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        h2: "h2",
        ul: "ul",
        li: "li"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Protocol User Categories"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Who are SCENARIO’s users and what are their roles?"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "askers",
                children: "Askers"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "An asker is a user who wishes to be notified as soon as a scenario has occurred and/or when specific scenario conditions have been met."
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Askers fall into two categories:",
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                class: "text-emerald-500",
                                                children: "Asker-maker"
                                            }),
                                            ": a user who generates a new scenario on the platform by defining the parameters for their notification and paying ETH to create a scenario pool. ",
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                                        ]
                                    }),
                                    "\n",
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                class: "text-emerald-500",
                                                children: "Asker-joiner"
                                            }),
                                            ": a user who 'joins in' by adding ETH to an existing scenario pool because they also wish to be notified when that scenario’s conditions are met."
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Any user of the platform can act as an asker-maker or an asker-joiner at any time."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Askers play a crucial role in populating the protocol with scenario pools, joining other user-created pools, and generating protocol revenue. At scale, askers are likely to constitute the greater majority of users; many askers may never engage with the full suite of protocol activities such as staking or confirming, instead accessing it only through more abstracted front-ends."
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "confirmers",
                children: "Confirmers"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "A confirmer is a user who confirms that a scenario has occurred (i.e. that its conditions have been met)."
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            "Confirmers fall into two categories:",
                            "\n",
                            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                                children: [
                                    "\n",
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                class: "text-emerald-500",
                                                children: "Confirmer-maker"
                                            }),
                                            ": a user who is first to state that a scenario’s conditions have been met."
                                        ]
                                    }),
                                    "\n",
                                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                                        children: [
                                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                class: "text-emerald-500",
                                                children: "Confirmer-joiner"
                                            }),
                                            ": a user who ‘joins in’ by subsequently verifying that a scenario’s conditions have been met (i.e. by agreeing with the confirmer-maker)."
                                        ]
                                    }),
                                    "\n"
                                ]
                            }),
                            "\n"
                        ]
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "A scenario is not considered resolved until it has been verified by a set number of confirmer-joiners (as specified in the parameters set by the scenario’s asker-maker)."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Any user of the platform can act as a confirmer-maker or a confirmer-joiner at any time."
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Confirmers play a crucial role in ‘keeping the machine running’ by resolving scenario pools and triggering notifications for askers. Confirmers are economically incentivised to perform this role to a high standard. Confirmers will usually be engaged users who are likely to represent a smaller percentage of all users once the protocol has scaled."
                    }),
                    "\n"
                ]
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
var __webpack_exports__ = (__webpack_exec__(6773));
module.exports = __webpack_exports__;

})();