import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'

import PageLayout from '@components/PageLayout'
import '@styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LOFTET - Retro but modern</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="LOFTET - Vintage clothing for men" />
      </Head>

      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  )
}
