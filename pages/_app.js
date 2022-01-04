import { ThemeProvider } from 'next-themes'
import AuthProvider from '../Component/Context/AuthProvider'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
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
