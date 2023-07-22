"use strict";
exports.id = 174;
exports.ids = [174];
exports.modules = {

/***/ 5174:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Resources)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _components_GridPattern__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5513);
/* harmony import */ var _components_icons_UsersIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7363);
/* harmony import */ var _icons_PackageIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9623);
/* harmony import */ var _icons_TagIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4236);
/* harmony import */ var _icons_CogIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4806);
/* harmony import */ var _icons_SquaresPlusIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5617);
/* harmony import */ var _icons_CheckIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8415);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const resources = [
    {
        name: "Scenario is...",
        description: "A battle-tested, immutable set of smart contracts",
        icon: _icons_PackageIcon__WEBPACK_IMPORTED_MODULE_4__/* .PackageIcon */ .j,
        pattern: {
            y: 16,
            squares: [
                [
                    0,
                    1
                ],
                [
                    1,
                    3
                ]
            ]
        }
    },
    {
        name: "Accessed by...",
        description: "A broad network of two different participant types",
        icon: _components_icons_UsersIcon__WEBPACK_IMPORTED_MODULE_3__/* .UsersIcon */ .o,
        pattern: {
            y: -6,
            squares: [
                [
                    -1,
                    2
                ],
                [
                    1,
                    3
                ]
            ]
        }
    },
    {
        name: "Who are...",
        description: "Economically incentivised to keep the service running",
        icon: _icons_TagIcon__WEBPACK_IMPORTED_MODULE_5__/* .TagIcon */ .l,
        pattern: {
            y: 32,
            squares: [
                [
                    0,
                    2
                ],
                [
                    1,
                    4
                ]
            ]
        }
    },
    {
        name: "Creating a...",
        description: "Decentralised and open base layer 'protocol-as-a-service'",
        icon: _icons_CogIcon__WEBPACK_IMPORTED_MODULE_6__/* .CogIcon */ .I,
        pattern: {
            y: 22,
            squares: [
                [
                    0,
                    1
                ]
            ]
        }
    },
    {
        name: "On top of which...",
        description: "Third parties can build and create",
        icon: _icons_SquaresPlusIcon__WEBPACK_IMPORTED_MODULE_7__/* .SquaresPlusIcon */ .P,
        pattern: {
            y: 22,
            squares: [
                [
                    0,
                    1
                ]
            ]
        }
    },
    {
        name: "Allowing them to...",
        description: "Further harness and monetise the protocol or offer second-layer services",
        icon: _icons_CheckIcon__WEBPACK_IMPORTED_MODULE_8__/* .CheckIcon */ .n,
        pattern: {
            y: 22,
            squares: [
                [
                    0,
                    1
                ]
            ]
        }
    }
];
function ResourceIcon({ icon: Icon  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Icon, {
            className: "h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400"
        })
    });
}
function ResourcePattern({ mouseX , mouseY , ...gridProps }) {
    let maskImage = framer_motion__WEBPACK_IMPORTED_MODULE_1__.useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`;
    let style = {
        maskImage,
        WebkitMaskImage: maskImage
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "pointer-events-none",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPattern__WEBPACK_IMPORTED_MODULE_2__/* .GridPattern */ .K, {
                    width: 72,
                    height: 56,
                    x: "50%",
                    className: "absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5",
                    ...gridProps
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]",
                style: style
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: "absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100",
                style: style,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_GridPattern__WEBPACK_IMPORTED_MODULE_2__/* .GridPattern */ .K, {
                    width: 72,
                    height: 56,
                    x: "50%",
                    className: "absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10",
                    ...gridProps
                })
            })
        ]
    });
}
function Resource({ resource  }) {
    let mouseX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useMotionValue)(0);
    let mouseY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useMotionValue)(0);
    function onMouseMove({ currentTarget , clientX , clientY  }) {
        let { left , top  } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        onMouseMove: onMouseMove,
        className: "group relative flex rounded-2xl bg-zinc-50 transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:bg-white/2.5 dark:hover:shadow-black/5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResourcePattern, {
                ...resource.pattern,
                mouseX: mouseX,
                mouseY: mouseY
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative rounded-2xl px-4 pt-16 pb-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ResourceIcon, {
                        icon: resource.icon
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
                        className: "mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "absolute inset-0 rounded-2xl"
                            }),
                            resource.name
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mt-1 text-sm text-zinc-600 dark:text-zinc-400",
                        children: resource.description
                    })
                ]
            })
        ]
    }, resource.name);
}
function Resources() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "xl:max-w-none",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-3",
            children: resources.map((resource, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Resource, {
                    resource: resource
                }, `resource_${i}`))
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ CheckIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CheckIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10 1.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m7.5 10.5 2 2c1-3.5 3-5 3-5"
            })
        ]
    });
}


/***/ }),

/***/ 4806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ CogIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CogIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeWidth: "0",
                fillRule: "evenodd",
                d: "M11.063 1.5H8.937l-.14 1.128c-.086.682-.61 1.22-1.246 1.484-.634.264-1.37.247-1.912-.175l-.898-.699-1.503 1.503.699.898c.422.543.44 1.278.175 1.912-.264.635-.802 1.16-1.484 1.245L1.5 8.938v2.124l1.128.142c.682.085 1.22.61 1.484 1.244.264.635.247 1.37-.175 1.913l-.699.898 1.503 1.503.898-.699c.543-.422 1.278-.44 1.912-.175.635.264 1.16.801 1.245 1.484l.142 1.128h2.124l.142-1.128c.085-.683.61-1.22 1.244-1.484.635-.264 1.37-.247 1.913.175l.898.699 1.503-1.503-.699-.898c-.422-.543-.44-1.278-.175-1.913.264-.634.801-1.16 1.484-1.245l1.128-.14V8.937l-1.128-.14c-.683-.086-1.22-.611-1.484-1.246-.264-.634-.247-1.37.175-1.912l.699-.898-1.503-1.503-.898.699c-.543.422-1.278.44-1.913.175-.634-.264-1.16-.802-1.244-1.484L11.062 1.5ZM10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
                clipRule: "evenodd"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.938 1.5h2.124l.142 1.128c.085.682.61 1.22 1.244 1.484v0c.635.264 1.37.247 1.913-.175l.898-.699 1.503 1.503-.699.898c-.422.543-.44 1.278-.175 1.912v0c.264.635.801 1.16 1.484 1.245l1.128.142v2.124l-1.128.142c-.683.085-1.22.61-1.484 1.244v0c-.264.635-.247 1.37.175 1.913l.699.898-1.503 1.503-.898-.699c-.543-.422-1.278-.44-1.913-.175v0c-.634.264-1.16.801-1.245 1.484l-.14 1.128H8.937l-.14-1.128c-.086-.683-.611-1.22-1.246-1.484v0c-.634-.264-1.37-.247-1.912.175l-.898.699-1.503-1.503.699-.898c.422-.543.44-1.278.175-1.913v0c-.264-.634-.802-1.16-1.484-1.245l-1.128-.14V8.937l1.128-.14c.682-.086 1.22-.61 1.484-1.246v0c.264-.634.247-1.37-.175-1.912l-.699-.898 1.503-1.503.898.699c.543.422 1.278.44 1.912.175v0c.635-.264 1.16-.802 1.245-1.484L8.938 1.5Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "2.5",
                fill: "none"
            })
        ]
    });
}


/***/ }),

/***/ 9623:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ PackageIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PackageIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeWidth: "0",
                d: "m10 9.5-7.5-4v9l7.5 4v-9ZM10 9.5l7.5-4v9l-7.5 4v-9Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "m2.5 5.5 7.5 4m-7.5-4v9l7.5 4m-7.5-13 7.5-4 7.5 4m-7.5 4v9m0-9 7.5-4m-7.5 13 7.5-4v-9m-11 6 .028-3.852L13.5 3.5"
            })
        ]
    });
}


/***/ }),

/***/ 5617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ SquaresPlusIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SquaresPlusIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M8.5 4.5v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2ZM8.5 13.5v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2ZM17.5 4.5v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M14.5 11.5v6M17.5 14.5h-6"
            })
        ]
    });
}


/***/ }),

/***/ 4236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ TagIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TagIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeWidth: "0",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3 8.69499V3H8.69499C9.18447 3 9.65389 3.19444 10 3.54055L16.4594 10C17.1802 10.7207 17.1802 11.8893 16.4594 12.61L12.61 16.4594C11.8893 17.1802 10.7207 17.1802 10 16.4594L3.54055 10C3.19444 9.65389 3 9.18447 3 8.69499ZM7 8.5C7.82843 8.5 8.5 7.82843 8.5 7C8.5 6.17157 7.82843 5.5 7 5.5C6.17157 5.5 5.5 6.17157 5.5 7C5.5 7.82843 6.17157 8.5 7 8.5Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M3 3V8.69499C3 9.18447 3.19444 9.65389 3.54055 10L10 16.4594C10.7207 17.1802 11.8893 17.1802 12.61 16.4594L16.4594 12.61C17.1802 11.8893 17.1802 10.7207 16.4594 10L10 3.54055C9.65389 3.19444 9.18447 3 8.69499 3H3Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "7",
                cy: "7",
                r: "1.5",
                fill: "none"
            })
        ]
    });
}


/***/ }),

/***/ 7363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ UsersIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function UsersIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M10.046 16H1.955a.458.458 0 0 1-.455-.459C1.5 13.056 3.515 11 6 11h.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M7.5 15.454C7.5 12.442 9.988 10 13 10s5.5 2.442 5.5 5.454a.545.545 0 0 1-.546.546H8.045a.545.545 0 0 1-.545-.546Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M6.5 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M13 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
            })
        ]
    });
}


/***/ })

};
;