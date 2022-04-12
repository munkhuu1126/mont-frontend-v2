import React from 'react'
import mont from '../img/logo-19.png'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { FaFacebook, FaGithub, FaTelegram } from 'react-icons/fa'
import audit from '../img/certik-logotype-h-w.png'
import Link from 'next/link'
import { useRouter } from 'next/router'
import krypto from '../img/krypto-white.png'
export default function Footer() {
    const { t } = useTranslation()
    const router = useRouter()
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
                    <div className="text-white justify-between md:justify-start items-center flex space-x-4 text-3xl">
                        <button><Link href="https://krypto.mn/currencies/mongol-tether" passHref><Image src={krypto} width="36" height="36" alt='' className="hover:opacity-50 transition ease-in duration-200" /></Link></button>
                        <button><Link href="https://www.facebook.com/MONTstablecoin" passHref><FaFacebook className="hover:opacity-50 transition ease-in duration-200" /></Link></button>

                        <button><Link href="https://t.me/MoNTstablecoin" passHref><FaTelegram className="hover:opacity-50 transition ease-in duration-200" /></Link></button>
                        <button><Link href="https://github.com/DiverseSolutions/Mont-Stable-Coin" passHref><FaGithub className="hover:opacity-50 transition ease-in duration-200" /></Link></button>
                    </div>
                </div>


                <div className="grid grid-cols-3 justify-between md:w-2/3">
                    {/* <ul className="text-sm">
                        <h1 className="text-lg font-semibold mb-3">Products</h1>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200" onClick={()=>{router.push("/")}}>Benefit</button></li>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200" onClick={()=>{router.push("/")}}>Service</button></li>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200" onClick={()=>{router.push("/")}}>Project Team</button></li>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200" onClick={()=>{router.push("/")}}>Partners</button></li>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200" onClick={()=>{router.push("/")}}>FAQ</button></li>
                    </ul>

                    <ul className="text-sm">
                        <h1 className="text-lg font-semibold mb-3">Support</h1>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200"  onClick={()=>{router.push('/')}}>Support</button></li>
                    </ul>

                    <ul className="text-sm">
                        <h1 className="text-lg font-semibold mb-3">Service</h1>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200" onClick={()=>{router.push('/')}}>Help Center</button></li>
                        <li className="my-1"><button className="hover:text-blue-500 transition ease-in duration-200" onClick={()=>{router.push('/')}}>Referrals</button></li>
                    </ul> */}
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
