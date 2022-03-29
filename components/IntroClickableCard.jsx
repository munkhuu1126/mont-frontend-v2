import React from 'react'
import { useTranslation } from 'react-i18next'

export default function IntroClickableCard() {
    const {t} = useTranslation()

    return (
        <div className={`group bg-white hover:bg-blue-500 lg:w-1/2 transition ease-out duration-700 p-10`}>
            <div className="flex justify-between items-start">
                <h1 className={`group-hover:text-white text-blue-500 text-3xl mb-4 font-bold`}>{t('intro2')}</h1>
                <div className='text-blue-500 group-hover:text-white flex'>
                    <p className="hidden group-hover:flex">{t('intro2_pof')}</p>
                    <i className="bi bi-arrow-right  text-lg"></i>
                </div>
            </div>
            <p className={`group-hover:text-white text-black text-xl`}>
                {t('intro2_text')}
                
            </p>
        </div>
    )
}