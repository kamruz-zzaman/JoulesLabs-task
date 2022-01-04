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
      {loading && <div className="h-screen text-center my-80">
        <p className="text-2xl">Loading.............</p>
      </div>}
      <AuthProvider>
        <ThemeProvider enableSystem={true} attribute='class'>
          <Component {...pageProps} />
        </ThemeProvider>
      </AuthProvider>

    </>
  )

}

export default MyApp
