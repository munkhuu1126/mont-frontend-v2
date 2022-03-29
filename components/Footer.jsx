import React from 'react'
import mont from '../img/mont-logo.png'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
export default function Footer() {
    const {t}=useTranslation()
    return (
        <div className="bg-[#1a202c]">
            <div className="container mx-auto p-10 flex justify-between items-start">
                <Image src={mont} width='128px' height='128px' alt="" />
                <div className="lg:grid grid-cols-2 gap-x-10">
                    <ul>
                        <h1 className="text-white font-bold">{t('products')}</h1>
                        {
                            ['Benefit', 'Service', 'Project Team', 'Partners', 'FAQ'].map(list => {
                                return (
                                    <li key={nanoid()} className="text-[#798595] text-sm hover:text-white transition ease-in duration-100">{list}</li>
                                )
                            })
                        }
                    </ul>
                    <ul>
                        <h1 className="text-white font-bold">{t('partners')}</h1>
                        {
                            ['GrapeCity Mongolia LLC', 'Diverse Solutions LLC', 'Ard Financial Group', 'Dax.mn', 'Complex.mn', 'Trade.mn', 'Tenger League Media group'].map(list => {
                                return (
                                    <li key={nanoid()} className='text-[#798595] text-sm hover:text-white transition ease-in duration-100'>{list}</li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>
            <div>
                <p className="bg-black text-center text-white text-sm p-2">Diverse Solutions LLC &copy;</p>
            </div>

        </div>
    )
}
