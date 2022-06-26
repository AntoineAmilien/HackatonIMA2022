import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {

  return (
  <>
    <Head>
      <script src='https://npmcdn.com/@turf/turf/turf.min.js'/>
      <link href='https://api.mapbox.com/mapbox-gl-js/v2.8.2/mapbox-gl.css' rel='stylesheet' />
    </Head>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
