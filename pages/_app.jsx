import Head from 'next/head'
import { Router, useRouter } from 'next/router'
import { MDXProvider } from '@mdx-js/react'

import { Layout } from '@/components/Layout'
import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'

import '@/styles/tailwind.css'
import 'focus-visible'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('hashChangeStart', onRouteChange)
Router.events.on('routeChangeComplete', onRouteChange)
Router.events.on('routeChangeError', onRouteChange)

export default function App({ Component, pageProps }) {
  let router = useRouter()

  return (
    <>
      <Head>
        {router.pathname === '/' ? (
          <title>Scenario Protocol Documentation</title>
        ) : (
          <title>{`${pageProps.title} - Scenario Protocol Documentation`}</title>
        )}
        <meta property="og:url" content="https://docs.scenarioprotocol.io/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${pageProps.title} - Scenario Protocol Documentation`} />
        <meta property="og:description" content="Scenario is a decentralised protocol which allows for on-chain consensus of user-requested topics, whether web3 related or offline occurrences." />
        <meta property="og:image" content="https://scenarioprotocol.io/og.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="docs.scenarioprotocol.io" />
        <meta property="twitter:url" content="https://docs.scenarioprotocol.io/" />
        <meta
          name="twitter:title"
          content="Scenario Protocol Docs - A decentralised notifications protocol"
        />
        <meta
          name="twitter:description"
          content="Scenario is a decentralised protocol which allows for on-chain consensus of user-requested topics, whether web3 related or offline occurrences."
        />
        <meta name="twitter:image" content="https://scenarioprotocol.io/og.png" />
      </Head>
      <MDXProvider components={mdxComponents}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </MDXProvider>
    </>
  )
}
