import React from 'react'
import mont from '../img/logo-19.png'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { BsTwitter, BsFacebook, BsInstagram, BsTelegram } from 'react-icons/bs'
import audit from '../img/certik-logotype-h-w.png'
export default function Footer() {
    const { t } = useTranslation()
    return (
        <div className="bg-black text-white ">
            <div className='container mx-auto px-10 py-16 justify-between md:flex'>


                <div className=" mb-10 md:w-1/3 md:block grid grid-rows-3 justify-center">
                    <div className="flex items-center justify-center md:justify-start space-x-2">
                        <div className="">
                            <Image src={mont} width='50px' height='50px' alt="" />

                        </div>
                        <p className="text-white font-semibold text-3xl">MONT</p>
                    </div>
                    <p className="mb-8 mt-2">Mongolia&apos;s First StableCoin</p>
                    <div className="text-white justify-between md:justify-start flex space-x-4 text-3xl">
                        <button><BsTwitter className="hover:text-blue-500 duration-200 ease-in transition" /></button>
                        <button><BsFacebook className="hover:text-blue-500 duration-200 ease-in transition" /></button>
                        <button><BsInstagram className="hover:text-blue-500 duration-200 ease-in transition" /></button>
                        <button><BsTelegram className="hover:text-blue-500 duration-200 ease-in transition" /></button>
                    </div>
                </div>


                <div className="grid grid-cols-3 justify-between md:w-2/3">
                    <ul className="text-sm">
                        <h1 className="text-lg font-semibold mb-3">Products</h1>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200">Benefit</button></li>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200">Service</button></li>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200">Project Team</button></li>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200">Partners</button></li>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200">FAQ</button></li>
                    </ul>

                    <ul className="text-sm">
                        <h1 className="text-lg font-semibold mb-3">Support</h1>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200">Support</button></li>
                    </ul>

                    <ul className="text-sm">
                        <h1 className="text-lg font-semibold mb-3">Service</h1>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200">Help Center</button></li>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200">Referrals</button></li>
                    </ul>
                </div>
            </div>
            <div className="md:flex space-y-10 mx-auto container items-center justify-between px-10 pb-10">

                <div className="flex items-center space-x-4">
                    <p>Audited by </p>
                    <div className="w-[180px] h-auto">

                        <Image src={audit} alt='' />
                    </div>
                </div>
                <p className="">&copy;Diverse Solutions LLC </p>
            </div>
        </div>
    )
}
