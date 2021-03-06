/*
 This is a Next.js project bootstrapped with Strapazzon/next-starter
 You can change this header message in .eslint.json.
 And run yarn lint --fix to change all files
 Ex: Your Company 2022
*/

import { globalStyles } from 'common/theme/stitches'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import 'wipe.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles()

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
