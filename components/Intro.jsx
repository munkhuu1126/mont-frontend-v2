import React from 'react'
import IntroCards from './IntroCards'
import IntroClickableCard from './IntroClickableCard'
import { useTranslation } from 'react-i18next'

export default function Intro() {
  const {t}=useTranslation()
  return (
    <div className="text-white bg-center">
      <div className="container mx-auto lg:py-44 px-16">
        <h1 className='text-[3.25rem] font-bold mb-3'>{t('first_stable_coin')}</h1>
        <h2 className='text-[#eeeeee] text-2xl'>{t('first_stable_coin_text')}</h2>
      </div>
      <div className=' container mx-auto lg:flex lg:space-y-0 space-y-5 xl:px-10 px-4 lg:gap-x-4'>
        <IntroCards />
        <IntroClickableCard />
      </div>
    </div>
  )
}
