import '../styles/globals.css'
let am4core = null
let am4charts = null
let am4themesAnimated = null
if (process.browser) {
  am4core = require('@amcharts/amcharts4/core')
  am4charts = require('@amcharts/amcharts4/charts')
  am4themesAnimated = require('@amcharts/amcharts4/themes/animated')
  am4core.useTheme(am4themesAnimated.default)
}

function MyApp({ Component, pageProps }) {

  return (<>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
