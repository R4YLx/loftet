import type { AppProps } from 'next/app'
import Head from 'next/head'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import PageLayout from '@components/PageLayout'
import 'react-toastify/dist/ReactToastify.css'
import '@styles/global.scss'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LOFTET - Retro but modern</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="LOFTET - Vintage clothing for men" />
      </Head>

      <ToastContainer
        autoClose={3000}
        closeOnClick
        draggable={false}
        hideProgressBar
        limit={3}
        newestOnTop
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        position="bottom-left"
        role="alert"
        rtl={false}
        theme="light"
      />

      <QueryClientProvider client={queryClient}>
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </QueryClientProvider>
    </>
  )
}
