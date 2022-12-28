import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState } from 'react'

import Footer from '@components/Footer'
import Navbar from '@components/Navbar'
import '@styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>LOFTET - Retro but modern</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="LOFTET - Vintage clothing for men" />
      </Head>

      <Navbar menuOpen={menuOpen} setMenuOpen={() => setMenuOpen(!menuOpen)} />

      <Component {...pageProps} />

      <Footer />
    </>
  )
}
