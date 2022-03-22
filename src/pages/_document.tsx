/*
 This is a Next.js project bootstrapped with Strapazzon/next-starter
 You can change this header message in .eslint.json.
 And run yarn lint --fix to change all files
 Ex: Your Company 2022
*/

import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from 'common/theme/stitches'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
