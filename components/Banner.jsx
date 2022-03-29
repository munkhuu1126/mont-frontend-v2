import React from 'react'
import background from '../img/bg2.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'


export default function Banner() {
    const {t} = useTranslation()
    return (
        <div className="my-20 banner-background">
            <div className="text-white relative">




                <div className="container mx-auto relative lg:px-0 py-20 px-4">
                    <h1 className="text-4xl font-bold text-center">{t('proof_of_funds')}</h1>
                    <p className="mt-3 lg:px-72 lg:text-left text-justify">
                        {t('proof_of_funds_text')}
                    </p>
                    <div className="flex justify-center mt-5">
                        <button className="rounded-lg border-white border hover:text-black hover:bg-white transition ease-in duration-100 p-2 mx-auto">
                            <Link href={'/proofoffunds'}>
                            See more
                            </Link>
                            
                        </button>
                    </div>

                </div>
                
                
            </div>
        </div>
    )
}