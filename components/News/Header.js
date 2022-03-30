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
            
            
        </div>
    )
}

