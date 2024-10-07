import { HeroPattern } from '@/components/HeroPattern'
import { Head, Html, Main, NextScript } from 'next/document'

const modeScript = `
  document.documentElement.classList.add('dark')
`

export default function Document() {
  return (
    <Html lang="en" className='dark'>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: modeScript }} />
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Docs - Scenario" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="bg-white antialiased dark:bg-black">
        <HeroPattern />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
