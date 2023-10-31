import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import '@/styles/globals.sass'

// MyComponents
// import NavHeader from '@/components/molecules/NavHeader'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  
  // 各ページで指定のレイアウト構成があればこっち
  if(Component.getLayout) {
    return Component.getLayout(
      <RecoilRoot>
        <Component { ...pageProps } />
      </RecoilRoot>
    )
  }

  // 指定が無ければ共通ナビゲーションヘッダーが表示される
  return (
    <RecoilRoot>
      {/* <NavHeader> */}
        <Component { ...pageProps } />
      {/* </NavHeader> */}
    </RecoilRoot>
  )
}