import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="globalWrapper">
      <Navbar alt={'Sheesh'} />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default MyApp
