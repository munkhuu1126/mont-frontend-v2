import '../styles/globals.css'
import Layout from '../components/Layout'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ['en', 'mn'],

    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false }

  });


function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setTimeout(()=>{
      setLoading(true)
    }, 8000)
  }, [])
  return (
    <>
      {
        loading ? (
          <Layout>
            <Component {...pageProps} />
          </Layout>)
          :
          (<LoadingScreen />)
      }

    </>)
}

export default MyApp
