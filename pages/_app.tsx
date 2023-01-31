import '../styles/globals.css'
import '../styles/design_tokens.css'
import type { AppProps } from 'next/app'
import { Nunito } from '@next/font/google'

const nunito = Nunito({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  )
}
