import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/index.scss'
import 'react-toastify/dist/ReactToastify.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar alt={'Sheesh'} />
      <Component {...pageProps} />
      <Footer />
      <ToastContainer />
    </>
  )
}

export default MyApp
