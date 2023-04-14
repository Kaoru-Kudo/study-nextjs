import '@/styles/globals.css'
import '@/styles/sass/top.module.sass'
import '@/styles/sass/layout/header.module.sass'
import '@/styles/sass/layout/footer.module.sass'
import '@/styles/sass/object/pages/works.module.sass'
import '@/styles/sass/object/pages/plans.module.sass'
import '@/styles/sass/object/component/btn.module.sass'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
