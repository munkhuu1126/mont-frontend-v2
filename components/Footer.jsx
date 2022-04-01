import React from 'react'
import mont from '../img/mont-logo.png'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import {BsTwitter, BsFacebook, BsInstagram} from 'react-icons/bs'
export default function Footer() {
    const {t}=useTranslation()
    return (
        <div className="container mx-auto lg:px-0 px-4 rounded-xl my-5 bg-[#5173ea]">
            <div className=" p-10 md:flex lg:space-y-0 text-center space-y-5 justify-between items-center">
                <Image src={mont} width='100px' height='100px' alt="" />
                <div className="flex md:translate-x-8 text-white justify-center text-4xl space-x-10 items-center">
                    <BsTwitter/>
                    <BsFacebook/>
                    <BsInstagram/>
                </div>
                
                <h1 className="text-white font-bold text-xl">&copy; Diverse Solution LLC</h1>
            </div>

        </div>
    )
}
