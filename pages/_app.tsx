// imports
import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
// styles
import '../styles/globals.css'
import { darkTheme } from '../util/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
