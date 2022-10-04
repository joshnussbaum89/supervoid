import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

// TODO: put code here that will be used on all pages
export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/supervoid-favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          src="https://player.vimeo.com/api/player.js"
          strategy="lazyOnload"
        />
      </body>
    </Html>
  )
}
