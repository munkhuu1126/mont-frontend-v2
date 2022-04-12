import React from 'react'
import mont from '../img/mont-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import Swal from 'sweetalert2'
import { BiCopy } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'

export default function MarketCap() {
    const {t}=useTranslation()
    const copy = () => {
        navigator.clipboard.writeText('0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4')
        Swal.fire({
            position: 'center',
            title: 'Successfully copied the token address!',
            showConfirmButton: false,
            timer: 1500
        })

    }
    return (
        <div className="xl:px-10 px-4 relative md:flex items-center md:my-20 container mx-auto">
            <div className="md:absolute md:w-[250px] mx-auto md:mx-0 translate-y-5 md:translate-y-0 md:h-[250px] w-[60px] h-[60px]">
                <Image src={mont} alt="" width='250' height='250'></Image>
            </div>
            <div className="container mx-auto lg:pl-20 md:pl-24  ">
                <div className="bg-white shadow-lg overflow-hidden md:text-left text-center rounded-xl md:pl-48 md:py-7 py-9">
                    <h1 className='text-gray-400 text-sm md:text-base md:mb-2 mb-1'>{t('marketcap')}</h1>
                    <p className="md:text-5xl text-3xl font-extralight md:mb-5 mb-2 text-blue-500">1,466,864,747.82₮</p>
                    <div className="lg:flex md:space-x-3">
                        <h1 className="md:text-base text-sm text-gray-400">{t('tokenaddress')}</h1>
                        <div className="flex overflow-hidden justify-center opacity-75 hover:opacity-100 text-xs md:text-base md:justify-start cursor-pointer hover:text-blue-500 transition duration-200 ease-in" onClick={() => { copy() }}>
                            <p className="">0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4</p>
                            <BiCopy />
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
