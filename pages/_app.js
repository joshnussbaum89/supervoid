// Hooks
import { useRouter } from 'next/router'

// Styles
import '../styles/globals.css'
import 'aos/dist/aos.css'

function MyApp({ Component, pageProps }) {
  const urlPath = useRouter().pathname.replace('/', '')

  return <Component {...pageProps} pathname={urlPath} />
}

export default MyApp
