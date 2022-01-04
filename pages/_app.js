import { ThemeProvider } from 'next-themes'
import Router from 'next/router'
import { useState } from 'react'
import AuthProvider from '../Component/Context/AuthProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true)
  })
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false)
  })
  return (
    <>
      <AuthProvider>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>

    </>
  )

}

export default MyApp
