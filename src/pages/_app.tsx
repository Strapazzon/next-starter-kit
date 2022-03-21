/*
This is a Next.js project bootstrapped with Strapazzon/next-starter
*/

import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
        />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default App
