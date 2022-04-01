import React from 'react'
import { useTranslation } from 'react-i18next'

export default function IntroCards() {
  const {t} = useTranslation()
  return (
    <div className="bg-white lg:w-1/2 p-10">
      <h1 className='text-blue-500 text-3xl font-bold mb-4'>{t('intro1')}</h1>
      <p className="text-xl font-extralight text-black">{t('intro1_text')}</p>
    </div>
  )
}
