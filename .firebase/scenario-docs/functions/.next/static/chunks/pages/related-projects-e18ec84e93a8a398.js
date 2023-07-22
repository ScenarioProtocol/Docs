(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[621],{9195:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/related-projects",function(){return r(2850)}])},2850:function(e,s,r){"use strict";r.r(s),r.d(s,{__N_SSG:function(){return o}});var t=r(5893),n=r(1151);function i(e){let s=Object.assign({h1:"h1",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",strong:"strong",a:"a",tbody:"tbody",td:"td",em:"em"},(0,n.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{children:"Related Projects"}),"\n",(0,t.jsx)(s.p,{children:"In this guide, we will look at how to register and consume webhooks to integrate your app with Protocol. With webhooks, your app can know when something happens in Protocol, such as someone sending a message or adding a contact.",className:"lead"}),"\n",(0,t.jsxs)(s.p,{children:["SCENARIO shares some design principles with ",(0,t.jsx)("a",{href:"https://polymarket.com/",target:"_blank",children:"Polymarket"})," and ",(0,t.jsx)("a",{href:"https://augur.net/",target:"_blank",children:"Augur"})," (and with decentralised prediction markets generally) in that these protocols make use of real-world, off-chain occurrences in on-chain or semi-on-chain use-cases. Prediction markets like those listed allow their users (or in some cases, the people behind the platform), to create markets such as will Argentina win the 2022 World Cup?, with other users then able to buy or sell either side of that market’s binary yes/no position at fluctuating prices determined by market activity."]}),"\n",(0,t.jsxs)(s.p,{children:["Good examples of current work on prediction markets are found in the ",(0,t.jsx)("a",{href:"https://docs.gnosis.io/conditionaltokens/docs/introduction1/",target:"_blank",children:"Gnosis Conditional Token Framework (CTF)"})," in combination with ",(0,t.jsx)("a",{href:"https://docs.umaproject.org/protocol-overview/how-does-umas-oracle-work",target:"_blank",children:"UMA's Optimistic Oracle"})," (which is discussed in more detail shortly). Gnosis’ conditional tokens represent defined outcomes which, when coupled with the UMA (Universal Market access) optimistic oracle, allow for these conditional outcomes to be resolved and for prediction market payouts to be made – a mechanism upon which ",(0,t.jsx)("a",{href:"https://docs.polymarket.com/polymarket-+-uma",target:"_blank",children:"Polymarket’s service is built"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Importantly, in the case of SCENARIO, rather than asking users to predict or bet on whether X will occur, the protocol is focused solely on the question: Has X occurred? In this way, SCENARIO deals with a more basic primitive than prediction markets, which instead seek to combine the wisdom of the crowd with market forces to price future events and form predictions about their probabilities. SCENARIO’s focus on a simpler, post-event, yes/no distinction means that it is not burdened by needing to price markets or manage pay-outs that are based on event likelihoods or user wagers."}),"\n",(0,t.jsxs)(s.p,{children:["A further project that shares some common ground with SCENARIO is ",(0,t.jsx)("a",{href:"https://earni.fi/",target:"_blank",children:"earni.fi"}),", which allows users to connect their Ethereum public address with their email address in order to receive emails when they have new airdrops to claim. As was noted in Section 3, this type of service is currently centralised, is focused almost completely on airdrops, and does not allow users to create their own bespoke notification requests."]}),"\n",(0,t.jsxs)(s.p,{children:["Another notification-focused protocol is ",(0,t.jsx)("a",{href:"https://app.push.org/",target:"_blank",children:"Push App"}),". As explained in its ",(0,t.jsx)("a",{href:"https://whitepaper.push.org/index",target:"_blank",children:"white paper"}),", Push App (formerly called EPNS, or ‘Ethereum Push Notification Service’) was the first ever notification protocol for web 3. Push App differs from SCENARIO in several ways, with the most important being that Push is channel-based. Users are encouraged to opt in or subscribe to channels so that they can receive notifications, with these channels needing first to have been created by developers of Push (or other projects) for the purpose of pushing out updates to their users and community members."]}),"\n",(0,t.jsx)(s.p,{children:"In this way, Push App subscriptions operate somewhat like a Discord push notification in instances where a user has joined a Discord channel and opted in for notifications. The ‘Future Features’ section in the protocol’s current white paper does not indicate any plans to allow the application to facilitate bespoke, user-requested notifications, nor does it include any scope for decentralised triggering or verification of notification events."}),"\n",(0,t.jsxs)(s.p,{children:["SCENARIO’s underlying mechanism may have the most common ground with decentralised oracle services such as ",(0,t.jsx)("a",{href:"https://chain.link/",target:"_blank",children:"Chainlink"})," and ",(0,t.jsx)("a",{href:"https://docs.umaproject.org/protocol-overview/how-does-umas-oracle-work",target:"_blank",children:"UMA’s Optimistic Oracle"}),", both of which focus on confirming the occurrence (or nature) of off-chain events in a way that is trustless and highly secure for use in on-chain smart contracts. However, SCENARIO differs from both of these protocols in several ways."]}),"\n",(0,t.jsx)(s.p,{children:"Unlike Chainlink, SCENARIO allows any user to both create and confirm event/oracle parameters permissionlessly and at any time. SCENARIO deals only with one-off ‘trigger-yes’ events (rather than ongoing oracle services such as Chainlink’s price-feeds), and instead of being built with the explicit intention of providing oracle data for a host of other applications, SCENARIO is designed to have a narrower primary focus (notifications) with the potential for these to lead to possible oracle uses in time."}),"\n",(0,t.jsx)(s.p,{children:"Importantly, SCENARIO’s focus on paid notifications as its key initial use-case means that it has a path to sustainably generate revenue and data outputs without needing to rely on future demand for oracle-style use cases as a revenue driver (though these use-cases may still develop with time). In other words, SCENARIO’s underlying data driver is people’s desire for notifications, rather than people’s desire for data. This is expected to generate a wider range of data types in a more agile and retail-driven manner."}),"\n",(0,t.jsx)(s.p,{children:"SCENARIO also differs from UMA’s optimistic oracle (OO) in crucial ways. Though the UMA OO model does allow for users (usually developers of other protocols such as prediction markets) to ask for bespoke oracle outputs that are verified by other users, as its name suggests, the UMA OO assumes that its actors are behaving honestly. For this reason, UMA’s OO requires only one actor to mark an event as having occurred, with there then being the possibility of dispute by other ecosystem participants if needed. SCENARIO places a greater emphasis on having high confidence at the verification stage by virtue of allowing for a wider set of verifying participants."}),"\n",(0,t.jsxs)(s.p,{children:["As is the case with Chainlink, notification use-cases do not yet appear to feature in any current or future plans for UMA’s oracle outputs. Further, due to the fact that UMA’s OO is used primarily to power financialised ",(0,t.jsx)("a",{href:"https://docs.umaproject.org/protocol-overview/example-projects",target:"_blank",children:"applications"})," for trading, bridging, synthetic assets and prediction markets, almost all of its oracle data requestors are developers and applications rather than retail users. This is another area in which SCENARIO distinguishes itself from other projects; its data requesters and data generators will comprise a varied network of individual actors and retail participants, all of whom will be free to generate idiosyncratic and hugely varying event parameters."]}),"\n",(0,t.jsx)(s.p,{children:"SCENARIO’s front-end user experience will be designed to ensure that it is easy, useful and enjoyable for anyone to act as both an asker and a confirmer, driving more data creation and notification outputs as a result."}),"\n",(0,t.jsx)(s.p,{children:"Informed by aspects of the above projects, SCENARIO is positioned to fill a market gap and offer a useful new primitive by having a clear focus on being the first fully open and tailorable decentralised notification service."}),"\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"Feature or Function"})}),(0,t.jsxs)(s.th,{children:[(0,t.jsx)(s.a,{href:"https://docs.umaproject.org/protocol-overview/how-does-umas-oracle-work",children:(0,t.jsx)(s.strong,{children:"UMA OO"})})," ",(0,t.jsx)(s.strong,{children:"/"})," ",(0,t.jsx)(s.a,{href:"https://docs.gnosis.io/conditionaltokens/docs/introduction1/",children:(0,t.jsx)(s.strong,{children:"Gnosis CTF"})})]}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.a,{href:"http://Earni.fi",children:(0,t.jsx)(s.strong,{children:"Earni.fi"})})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.a,{href:"https://app.push.org/",children:(0,t.jsx)(s.strong,{children:"Push App"})})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.a,{href:"https://chain.link/",children:(0,t.jsx)(s.strong,{children:"Chainlink"})})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"CEX (with notifications)"})}),(0,t.jsx)(s.th,{children:(0,t.jsx)(s.strong,{children:"SCENARIO"})})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Brings off-chain events on-chain"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Allows any user to validate permissionlessly"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"100% on-chain consensus"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Data outputs can act as on-chain oracle"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Allows all users to request & receive notifications"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Allows all users to create their own bespoke notification requests"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Allows for price-based notifications"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Allows for non-price based notifications"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Allows for airdrop notifications"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Allows for non-crypto notifications"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Parameters are 100% tailorable"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Returns all revenue to users/actors/token holders"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:(0,t.jsx)(s.em,{children:"Open-source and ready for others to build on top of"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"❌"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.strong,{children:"✅"})})]})]})]})]})}var o=!0;s.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,n.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(i,e)})):i(e)}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9195)}),_N_E=e.O()}]);