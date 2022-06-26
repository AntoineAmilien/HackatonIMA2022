import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
  <>
    <Head>
      <script src='https://npmcdn.com/@turf/turf/turf.min.js'/>
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp