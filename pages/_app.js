import "../styles/globals.css"
import Header from "../components/Header/Header"
import { SessionProvider } from "next-auth/react"
import { StateContext } from "../context/StateContext"
import Footer from '../components/Footer'
import {Toaster} from 'react-hot-toast'
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <StateContext>
        <Header />
        <Toaster />
        <Component {...pageProps} />
        <Footer />
      </StateContext>
    </SessionProvider>
  )
}

export default MyApp
