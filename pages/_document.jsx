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
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png"/>
      </Head>
      <body className="bg-white antialiased dark:bg-black">
        <HeroPattern />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
