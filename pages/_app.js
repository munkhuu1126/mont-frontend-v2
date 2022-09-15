import '../styles/globals.css'
import Layout from '../components/Layout'
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import HttpApi from 'i18next-http-backend';
import { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Head from 'next/head'
import Router from 'next/router'

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
  Router.events.on('routeChangeStart', (url) => {

    setLoading(true)
  })
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })
  return (
    <>
      {
        loading ? (
          <>
            <Head>
              <title>MONT | Stablecoin</title>
              <link rel="icon" href='/mont-logo.ico' />
            </Head>
            <LoadingScreen />
          </>
        )
          :
          (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )
      }

    </>)
}

export default MyApp
