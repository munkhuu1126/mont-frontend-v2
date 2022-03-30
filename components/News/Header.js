import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsFillGridFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'




export default function Header() {
    const { t } = useTranslation()
    
    return (
        <div>
            <div className="bg-black">
                <h1 className="text-6xl text-white container mx-auto py-24 text-center lg:px-48 ">{t('news_')}</h1>
            </div>
            <div className="bg-[#e5e7eb]">
                <div className="container lg:flex hidden mx-auto justify-end space-x-2 text-xl px-4 lg:px-32 py-4">
                    <p>{t('layout_')}</p>
                    <button><BsFillGridFill /></button>
                    <button><GiHamburgerMenu /></button>
                </div>
            </div>
            
        </div>
    )
}

