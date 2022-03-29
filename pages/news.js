import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/News/Header'
import Head from 'next/head'

export default function news() {
  return (
    <div>
        <Head>
            <title>News</title>
        </Head>
       <Header/>
    </div>
  )
}

