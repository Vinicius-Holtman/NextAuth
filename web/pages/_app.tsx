import React from 'react'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
