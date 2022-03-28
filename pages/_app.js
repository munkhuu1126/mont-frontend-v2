import '../styles/globals.css'
import Layout from '../components/Layout'
import LanguageBar from '../components/LanguageBar'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <LanguageBar/>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>)
}

export default MyApp
