import '../globals.css'
import type { AppProps } from 'next/app'
import "../styles.css";

// import Layout from '../components/Layout' // Assuming you have a Layout component

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp