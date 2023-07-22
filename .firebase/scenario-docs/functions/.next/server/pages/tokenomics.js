"use strict";
(() => {
var exports = {};
exports.id = 288;
exports.ids = [288];
exports.modules = {

/***/ 6787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
"use client";



const DynamicChart = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 8403, 23)), {
    loadableGenerated: {
        modules: [
            "..\\components\\Chart.jsx -> " + "react-apexcharts"
        ]
    },
    ssr: false
});
const PieChart = ()=>{
    const [loaded, setLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setOptions({
            labels: [
                "Protocol Users",
                "Founding Team",
                "Backers",
                "Builder Bounty Fund",
                "Partnering Fund",
                "Advisors"
            ],
            chart: {
                type: "donut",
                width: "100%"
            },
            colors: [
                "#508181",
                "#506d81",
                "#525081",
                "#6d5081",
                "#81506d",
                "#816550"
            ],
            legend: {
                show: false
            },
            stroke: {
                show: false
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: "100%"
                        },
                        legend: {
                            position: "bottom"
                        }
                    }
                }
            ]
        });
        setLoaded(true);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col lg:flex-row gap-x-4 mt-8 justify-center items-center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: loaded && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicChart, {
                    options: options,
                    type: "donut",
                    width: "350",
                    series: [
                        60,
                        13,
                        12,
                        7,
                        6,
                        2
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-left items-start",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
                    className: "table-auto mt-0",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "60%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#508181]",
                                            children: "Protocol Users"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "4 year distribution, 1-year linear vest"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "13%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#506d81]",
                                            children: "Founding Team"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "Distributed at TGE, vesting period applies"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "12%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#525081]",
                                            children: "Backers"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "Distributed at TGE, vesting period applies"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "7%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#6d5081]",
                                            children: "Builder Bounty Fund"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "Fully liquid at TGE, issued at the discretion of founding team"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "6%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#81506d]",
                                            children: "Community Marketing & Partnering Fund"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "Fully liquid at TGE, issued at the discretion of founding team"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "2%"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-[#816550]",
                                            children: "Advisors"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                        children: "Distributed at TGE, vesting period applies"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PieChart);


/***/ }),

/***/ 1590:
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
/* harmony import */ var _components_mdx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3662);
/* harmony import */ var _components_Chart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6787);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_mdx__WEBPACK_IMPORTED_MODULE_2__]);
([_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__, _components_mdx__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/*@jsxRuntime automatic @jsxImportSource react*/ 

const title = "Protocol Tokenomics";


const description = "How the mechanisms for scenario pool creation and resolution, covering the movements of ETH within these steps and the roles played by protocol participants across both user types.";
const sections = [
    {
        title: "The SNR Token",
        id: "the-snr-token",
        ...undefined
    },
    {
        title: "Token's Primary functions",
        id: "tokens-primary-functions",
        ...undefined
    },
    {
        title: "SNR Token Supply and Distribution",
        id: "snr-token-supply-and-distribution",
        ...undefined
    }
];
function _createMdxContent(props) {
    const _components = Object.assign({
        h1: "h1",
        p: "p",
        a: "a",
        h2: "h2",
        h3: "h3",
        ol: "ol",
        li: "li",
        ul: "ul"
    }, (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents)(), props.components);
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h1, {
                children: "Protocol Tokenomics"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "The process shown in the ",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.a, {
                        href: "/workflow",
                        children: "Workflow"
                    }),
                    " section explains the mechanisms for scenario pool creation and resolution, covering the movements of ETH within these steps and the roles played by protocol participants across both user types."
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "However, without additional protection, such a process would be highly vulnerable to manipulation. Depending on the number of confirmer-joiners required, Sybil attacks would be easily carried out,  allowing attackers to collude in creating confirmations, or for one attacker to act as both the confirmer-maker and all confirmer-joiners. This would leave open the possibility of that attacker incorrectly marking a scenario as ‘resolved,’ sending out false notifications, and unfairly gaining access to all of that scenario pool’s bounty."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "To protect against this, SCENARIO will make use of its own token to serve a range of crypto-economic functions and underpin a more robust protocol."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "the-snr-token",
                children: "The SNR Token"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In addition to representing an abbreviation of the protocol’s name, the acronym SNR also stands for signal-to-noise ratio. SCENARIO will be a protocol that helps to separate signal from noise."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The SNR token will be crucial to the effective functioning of the protocol once fully deployed."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "It will not function as a governance token, and will not be used to vote on protocol changes or upgrades. Instead, SNR will perform a set of roles that help to protect against Sybil attacks, facilitate dispute resolution, and allow for the protocol’s revenues to be distributed to its users over time."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "In order to support a safe, staged protocol roll-out (during which the V1 scenario pool contracts will be used to test and monitor user behaviour and incentive balancing), the SNR token will not be generated at protocol launch (see Section XXX: Staged roll-out)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "tokens-primary-functions",
                children: "Token's Primary functions"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "1 - Revenue Distribution"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "6% of all funds in each scenario pool, once resolved, will be returned to ‘the protocol’ as revenue."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Of this proportion, 4% will be sent as revenue to SNR stakers and 2% will be sent to the protocol’s growth pool (see section XXX)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "SNR will be staked and/or used to provide liquidity, with these actions giving users a ‘staking weight’ which will then determine their proportional claim on the 4% of all protocol revenues directed to stakers."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "A total protocol fee cut of 6% from resolved pools is expected to be viable as long as resolving scenario pools is profitable for those involved in correctly confirming them. Engaged, rational actors will choose to contribute to that process because they will profit from doing so, with this being true even if the protocol’s cut was much larger than 6%."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "At scale, SCENARIO will be populated with many thousands of scenario pools, and thousands of active confirmers. Competitor products would first need to compete on factors such as network size, overall bounty pool size and speed of scenario confirmation, before being able to compete by bettering SCENARIO’s 6% take-rate."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "If the underlying protocol is bootstrapped successfully, other builders or competitors will be incentivized to rely collectively on the powerful SCENARIO protocol and its smart contracts, and instead compete at the user-interface level by adding additional take-rates of their own at that layer."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "(See section XXX: Protocol revenue)"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h3, {
                children: "2 - Collateral: Sybil Resistance and Slashing"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "Whilst the majority of users who hold SNR will wish to stake it in order to benefit more passively from protocol revenue distributions, staking is not required for all users. Only users who wish to act as confirmer-makers or confirmer-joiners will be required to stake and lock some of their SNR tokens. This requirement will minimise the risk of Sybil attacks, as it will introduce a cost for each new address that wishes to act as a confirmer (whilst also putting those funds at risk should the confirmations be dishonest).\r\nA key role of the SNR token will therefore be to act as collateral, allowing slashing to occur in cases of Sybil attacks or dishonest behaviour by confirmer-makers or confirmer-joiners.*\r\nFollowing the resolution of a scenario pool, notifications will be triggered and sent to its askers immediately. The pool will then enter a 72-hour cool down period. During this time, if more than 20%** (‘asker dispute threshold’) of that pool’s askers flag the pool as having been incorrectly resolved, the following will occur:"
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ol, {
                children: [
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The planned pay-out to that pool’s confirmers will be cancelled"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The pool’s confirmer-maker will have 10% of their staked SNR slashed**"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The pool’s confirmer-joiners will have 5% of their staked SNR slashed**"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "The pool will re-open to additional asker-joiners or for fund removal"
                    }),
                    "\n",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.li, {
                        children: "Slashed SNR will be sent to the builder bounty fund (50%) and the growth pool (50%)"
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_mdx__WEBPACK_IMPORTED_MODULE_2__.Note, {
                children: "* It is worth noting that SCENARIO’s design means that honest Sybil attacks do not harm the protocol’s core purpose of triggering notifications; as long as askers are quickly and correctly advised of scenarios that have occurred, it is inconsequential if a small number of actors colluded or acted under many addresses to resolve that pool. It is only in cases of dishonest or incorrect notifications that Sybil attacks present a problem, and it is for this reason that the 72-hour cool down period and SNR slashing exist."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_mdx__WEBPACK_IMPORTED_MODULE_2__.Note, {
                children: "** It should also be noted that protocol rules relating to the ideal asker dispute threshold percentage, slashing percentages, minimum staking amounts, staking lock periods, staking tiers and/or proportional access to revenue distributions will need to be refined during protocol testing, given the relationship between these considerations and factors such as organic user behaviour, game theory and SNR price."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The protocol will seek to strike a balance between Sybil resistance and fairness, such that anyone who wishes to participate as a confirmer is able to do so."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The protocol’s early advisors will play a key role in assisting to refine the protocol’s planned tokenomics and refining the balance between incentives and penalties."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "It is possible that a final additional layer of arbitration may need to be added (as seen in UMA protocol). If this is deemed necessary, the SNR token will play a crucial role in this arbitration process."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.h2, {
                id: "snr-token-supply-and-distribution",
                children: "SNR Token Supply and Distribution"
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The SNR token will be a standard ERC-20 token with a maximum supply of 100 million (100,000,000). It will not be minted immediately, instead being introduced as part of a token generation event (TGE) which will follow an initial period of more limited-functionality protocol testing and user reputation scoring. (See section XXX: Staged roll-out). There will be no tail emissions or ongoing inflation of the token supply; 4 years after the TGE, the supply will be fully distributed (note: fully vesting the supply will take one additional year)."
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components.p, {
                children: "The SNR token, once minted, will exist in a combination of escrowed and liquid form. The majority will begin as escrowed SNR and will be subject to vesting periods of up to 3 years (linear). Some SNR will be liquid at TGE in order to support the use of these tokens for builder and partner incentives. More detail on these breakdowns is shown below."
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.p, {
                children: [
                    "SNR token allocation:",
                    react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {})
                ]
            }),
            "\n",
            (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.ul, {
                children: [
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "text-white",
                                children: "60%"
                            }),
                            " will be allocated to users of the protocol across its first 4 years (with 1-year linear vesting), distributed across 2 separate token distribution events: one which will follow a period of protocol testing and use by the community in year 1, and a second which will run over years 2-4 and be related to protocol use. The first testing phase (and distribution 1) will be based partly on whitelisted addresses."
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "text-white",
                                children: "13%"
                            }),
                            " will be allocated to the founding team (3-year linear vesting, 1-year cliff)"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "text-white",
                                children: "12%"
                            }),
                            " will be allocated to early backers (3-year linear vesting, 1-year cliff)"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "text-white",
                                children: "7%"
                            }),
                            " will be allocated to a builder bounty fund"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "text-white",
                                children: "6%"
                            }),
                            " will be allocated to a community marketing and partnering fund"
                        ]
                    }),
                    "\n",
                    (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components.li, {
                        children: [
                            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                class: "text-white",
                                children: "2%"
                            }),
                            " will be allocated to advisors (3-year linear vesting, 1-year cliff)"
                        ]
                    }),
                    "\n"
                ]
            }),
            "\n",
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Chart__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
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
            Note: _components_mdx__WEBPACK_IMPORTED_MODULE_2__.Note,
            PieChart: _components_Chart__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
            _provideComponents: _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__.useMDXComponents,
            description,
            sections,
            title
        }))
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8403:
/***/ ((module) => {

module.exports = require("react-apexcharts");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

/***/ }),

/***/ 7834:
/***/ ((module) => {

module.exports = import("@mdx-js/react");;

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,152,387,662], () => (__webpack_exec__(1590)));
module.exports = __webpack_exports__;

})();