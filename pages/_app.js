import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return (<>
    <Component {...pageProps} />
    <p>toto</p>
  </>
  )
}

export default MyApp
