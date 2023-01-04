import { Html, Head, Main, NextScript } from 'next/document'

// Code that is used on all pages
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href="/images/supernova-site-background.webp"
          type="image/png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
