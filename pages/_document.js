import Document, { Head, Main, NextScript } from "next/document";

import { ServerStyleSheet } from 'styled-components'

class MyDocument extends git Document {
	// fixes serverside flicker render with styled components
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <html lang="en" dir="ltr">
				//Every page should have a link to the manifest and the icons
        <Head>          
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon-16x16.png"
          />

          <link rel="manifest" href="/static/manifest.json" />
        </Head>
        <body>
          <Main />
          {/* Below for auth */}
          {/* <script dangerouslySetInnerHTML={{ __html: getUserScript(user) }} /> */}
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;