import Head from 'next/head'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from 'theme'
import { LRAuthProvider } from 'loginradius-react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Franchise Ordering System</title>
      <link rel="shortcut icon" href="/img/chakra-logo.png" />
      <link rel="apple-touch-icon" href="/img/chakra-logo.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta
        name="description"
        content="Franchise Ordering System from afaf-group"
        />
    </Head>

      <LRAuthProvider
          appName="your-app-name"
          apiKey="your-api-key"
          redirectUri={"http://localhost:3000/"}
        >
        <ChakraProvider resetCSS theme={theme}>

          <Component {...pageProps} />
        </ChakraProvider>
      </LRAuthProvider>
    </>
  )
}

export default MyApp
