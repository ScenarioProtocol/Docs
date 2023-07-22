"use strict";
exports.id = 662;
exports.ids = [662];
exports.modules = {

/***/ 4313:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EK": () => (/* binding */ Code),
/* harmony export */   "P3": () => (/* binding */ CodeGroup),
/* harmony export */   "SU": () => (/* binding */ Pre)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6912);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5933);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, zustand__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, zustand__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const languageNames = {
    js: "JavaScript",
    ts: "TypeScript",
    javascript: "JavaScript",
    typescript: "TypeScript",
    php: "PHP",
    python: "Python",
    ruby: "Ruby",
    go: "Go"
};
function getPanelTitle({ title , language  }) {
    return title ?? languageNames[language] ?? "Code";
}
function ClipboardIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 20 20",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                strokeWidth: "0",
                d: "M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinejoin: "round",
                d: "M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
            })
        ]
    });
}
function CopyButton({ code  }) {
    let [copyCount, setCopyCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let copied = copyCount > 0;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (copyCount > 0) {
            let timeout = setTimeout(()=>setCopyCount(0), 1000);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        copyCount
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        type: "button",
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100", copied ? "bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20" : "bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"),
        onClick: ()=>{
            window.navigator.clipboard.writeText(code).then(()=>{
                setCopyCount((count)=>count + 1);
            });
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                "aria-hidden": copied,
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300", copied && "-translate-y-1.5 opacity-0"),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ClipboardIcon, {
                        className: "h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"
                    }),
                    "Copy"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                "aria-hidden": !copied,
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300", !copied && "translate-y-1.5 opacity-0"),
                children: "Copied!"
            })
        ]
    });
}
function CodePanelHeader({ tag , label  }) {
    if (!tag && !label) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex h-9 items-center gap-2 border-y border-t-transparent border-b-white/7.5 bg-zinc-900 bg-white/2.5 px-4 dark:border-b-white/5 dark:bg-white/1",
        children: [
            tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "dark flex",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_5__/* .Tag */ .V, {
                    variant: "small",
                    children: tag
                })
            }),
            tag && label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "h-0.5 w-0.5 rounded-full bg-zinc-500"
            }),
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "font-mono text-xs text-zinc-400",
                children: label
            })
        ]
    });
}
function CodePanel({ tag , label , code , children  }) {
    let child = react__WEBPACK_IMPORTED_MODULE_1__.Children.only(children);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "group dark:bg-white/2.5",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanelHeader, {
                tag: child.props.tag ?? tag,
                label: child.props.label ?? label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                        className: "overflow-x-auto p-4 text-xs text-white",
                        children: children
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CopyButton, {
                        code: child.props.code ?? code
                    })
                ]
            })
        ]
    });
}
function CodeGroupHeader({ title , children , selectedIndex  }) {
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    if (!title && !hasTabs) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent",
        children: [
            title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                className: "mr-auto pt-3 text-xs font-semibold text-white",
                children: title
            }),
            hasTabs && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.List, {
                className: "-mb-px flex gap-4 text-xs font-medium",
                children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child, childIndex)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab, {
                        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("border-b py-3 transition focus:[&:not(:focus-visible)]:outline-none", childIndex === selectedIndex ? "border-emerald-500 text-emerald-400" : "border-transparent text-zinc-400 hover:text-zinc-300"),
                        children: getPanelTitle(child.props)
                    }))
            })
        ]
    });
}
function CodeGroupPanels({ children , ...props }) {
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    if (hasTabs) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panels, {
            children: react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Panel, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanel, {
                        ...props,
                        children: child
                    })
                }))
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodePanel, {
        ...props,
        children: children
    });
}
function usePreventLayoutShift() {
    let positionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    let rafRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        return ()=>{
            window.cancelAnimationFrame(rafRef.current);
        };
    }, []);
    return {
        positionRef,
        preventLayoutShift (callback) {
            let initialTop = positionRef.current.getBoundingClientRect().top;
            callback();
            rafRef.current = window.requestAnimationFrame(()=>{
                let newTop = positionRef.current.getBoundingClientRect().top;
                window.scrollBy(0, newTop - initialTop);
            });
        }
    };
}
const usePreferredLanguageStore = (0,zustand__WEBPACK_IMPORTED_MODULE_4__.create)((set)=>({
        preferredLanguages: [],
        addPreferredLanguage: (language)=>set((state)=>({
                    preferredLanguages: [
                        ...state.preferredLanguages.filter((preferredLanguage)=>preferredLanguage !== language),
                        language
                    ]
                }))
    }));
function useTabGroupProps(availableLanguages) {
    let { preferredLanguages , addPreferredLanguage  } = usePreferredLanguageStore();
    let [selectedIndex, setSelectedIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    let activeLanguage = [
        ...availableLanguages
    ].sort((a, z)=>preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a))[0];
    let languageIndex = availableLanguages.indexOf(activeLanguage);
    let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex;
    if (newSelectedIndex !== selectedIndex) {
        setSelectedIndex(newSelectedIndex);
    }
    let { positionRef , preventLayoutShift  } = usePreventLayoutShift();
    return {
        as: "div",
        ref: positionRef,
        selectedIndex,
        onChange: (newSelectedIndex)=>{
            preventLayoutShift(()=>addPreferredLanguage(availableLanguages[newSelectedIndex]));
        }
    };
}
const CodeGroupContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(false);
function CodeGroup({ children , title , ...props }) {
    let languages = react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, (child)=>getPanelTitle(child.props));
    let tabGroupProps = useTabGroupProps(languages);
    let hasTabs = react__WEBPACK_IMPORTED_MODULE_1__.Children.count(children) > 1;
    let Container = hasTabs ? _headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Tab.Group : "div";
    let containerProps = hasTabs ? tabGroupProps : {};
    let headerProps = hasTabs ? {
        selectedIndex: tabGroupProps.selectedIndex
    } : {};
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupContext.Provider, {
        value: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Container, {
            ...containerProps,
            className: "not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupHeader, {
                    title: title,
                    ...headerProps,
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroupPanels, {
                    ...props,
                    children: children
                })
            ]
        })
    });
}
function Code({ children , ...props }) {
    let isGrouped = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CodeGroupContext);
    if (isGrouped) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
            ...props,
            dangerouslySetInnerHTML: {
                __html: children
            }
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
        ...props,
        children: children
    });
}
function Pre({ children , ...props }) {
    let isGrouped = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CodeGroupContext);
    if (isGrouped) {
        return children;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CodeGroup, {
        ...props,
        children: children
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* reexport safe */ _components_Button__WEBPACK_IMPORTED_MODULE_4__.z),
/* harmony export */   "CodeGroup": () => (/* reexport safe */ _components_Code__WEBPACK_IMPORTED_MODULE_5__.P3),
/* harmony export */   "Col": () => (/* binding */ Col),
/* harmony export */   "Note": () => (/* binding */ Note),
/* harmony export */   "Properties": () => (/* binding */ Properties),
/* harmony export */   "Property": () => (/* binding */ Property),
/* harmony export */   "Row": () => (/* binding */ Row),
/* harmony export */   "a": () => (/* binding */ a),
/* harmony export */   "code": () => (/* reexport safe */ _components_Code__WEBPACK_IMPORTED_MODULE_5__.EK),
/* harmony export */   "h2": () => (/* binding */ h2),
/* harmony export */   "pre": () => (/* reexport safe */ _components_Code__WEBPACK_IMPORTED_MODULE_5__.SU)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9078);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1109);
/* harmony import */ var _components_Code__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4313);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Heading__WEBPACK_IMPORTED_MODULE_3__, _components_Code__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Heading__WEBPACK_IMPORTED_MODULE_3__, _components_Code__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const a = (next_link__WEBPACK_IMPORTED_MODULE_1___default());


const h2 = function H2(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Heading__WEBPACK_IMPORTED_MODULE_3__/* .Heading */ .X, {
        level: 2,
        ...props
    });
};
function InfoIcon(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        viewBox: "0 0 16 16",
        "aria-hidden": "true",
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "8",
                cy: "8",
                r: "8",
                strokeWidth: "0"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1.5",
                d: "M6.75 7.75h1.5v3.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                cx: "8",
                cy: "4",
                r: ".5",
                fill: "none"
            })
        ]
    });
}
function Note({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "my-6 flex gap-2.5 rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 leading-6 text-emerald-900 dark:border-emerald-500/30 dark:bg-emerald-500/5 dark:text-emerald-200 dark:[--tw-prose-links:theme(colors.white)] dark:[--tw-prose-links-hover:theme(colors.emerald.300)]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(InfoIcon, {
                className: "mt-1 h-4 w-4 flex-none fill-emerald-500 stroke-white dark:fill-emerald-200/20 dark:stroke-emerald-200"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "[&>:first-child]:mt-0 [&>:last-child]:mb-0",
                children: children
            })
        ]
    });
}
function Row({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2",
        children: children
    });
}
function Col({ children , sticky =false  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_2___default()("[&>:first-child]:mt-0 [&>:last-child]:mb-0", sticky && "xl:sticky xl:top-24"),
        children: children
    });
}
function Properties({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "my-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            role: "list",
            className: "m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5",
            children: children
        })
    });
}
function Property({ name , type , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "m-0 px-0 py-4 first:pt-0 last:pb-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("dl", {
            className: "m-0 flex flex-wrap items-center gap-x-3 gap-y-2",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Name"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
                        children: name
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Type"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    className: "font-mono text-xs text-zinc-400 dark:text-zinc-500",
                    children: type
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dt", {
                    className: "sr-only",
                    children: "Description"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("dd", {
                    className: "w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0",
                    children: children
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;