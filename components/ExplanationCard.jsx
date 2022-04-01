import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ExplanationCard(props) {
  const {t} = useTranslation()
  return (
    <div className="p-10 bg-white">
      <i className={`${props.icon} text-6xl text-blue-500`} />
      <p className="text-xl font-light mt-5">{t(props.paragraph)}</p>
    </div>
  )
}
