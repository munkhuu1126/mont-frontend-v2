import React from 'react'
import twitter from '../img/twitter.png'
import discord from '../img/discord.webp'
import telegram from '../img/telegram.png'
import github from '../img/github.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { BsDiscord, BsGithub, BsFacebook, BsNewspaper } from 'react-icons/bs'
import { FaTelegramPlane, FaChartBar } from 'react-icons/fa'
import Link from 'next/link'
import krypto from '../img/krypto.jpg'
import { useRouter } from 'next/router'

export default function Community() {
    const router = useRouter()
    const icons = [
        // {
        //     id: 5,
        //     icon: <BsNewspaper className="text-2xl text-blue-500" />,
        //     name: 'Whitepaper',
        //     description: 'whitepaper',
        //     link: "https://news.stablecoin.mn/assets/eae02cbc-9f49-420f-a5c7-39e7806491fd"
        // },
        {
            id: 1,
            icon: <Image src={krypto} width='24' height='24' alt="" />,
            name: 'Krypto.mn',
            description: 'krypto',
            link: "https://krypto.mn/currencies/mongol-tether"
        },
        {
            id: 2,
            icon: <BsFacebook className="text-2xl text-blue-500" />,
            name: 'Facebook',
            description: 'facebook',
            link: "https://www.facebook.com/MONTstablecoin"
        },
        {
            id: 3,
            icon: <FaTelegramPlane className="text-2xl text-blue-500" />,
            name: 'Telegram',
            description: 'telegram',
            link: "https://t.me/MoNTstablecoin"
        },
        {
            id: 4,
            icon: <BsGithub className="text-2xl text-blue-500" />,
            name: 'Github',
            description: 'github',
            link: "https://github.com/DiverseSolutions/Mont-Stable-Coin"
        },

        // {
        //     id: 6,
        //     icon: <FaChartBar className="text-2xl text-blue-500" />,
        //     name: 'BSCScan',
        //     description: 'bscscan',
        //     link: "https://bscscan.com/token/0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4"
        // },

    ]
    const { t } = useTranslation()

    return (
        <div id="community" className="container mx-auto lg:px-0 px-4 ">
            <div className='text-center mt-5 lg:p-20  rounded-xl mb-10'>
                <h1 className="font-bold p-5 lg:p-0 text-3xl text-blue-500 mb-16">{t('join_the_community')}</h1>
                <p className="px-20 mb-5 font-extralight text-lg">{t('community_text')}</p>
                <div className=" items-center grid gap-4 lg:grid-cols-3 justify-evenly mt-10">
                    <div className=" xl:p-8 lg:p-6 p-8 shadow-lg  h-[128px] bg-white hover:shadow-2xl transition ease-in duration-200 rounded-md">
                        <div className="cursor-pointer">
                            <div className="flex items-center mb-3 space-x-3">
                                <BsNewspaper className="text-2xl text-blue-500" />
                                <p className="font-bold text-blue-500 text-xl">Whitepaper</p>
                                <button onClick={() => { window.open('https://news.stablecoin.mn/assets/eae02cbc-9f49-420f-a5c7-39e7806491fd', '_blank') }} className="font-bold text-blue-500 text-lg hover:text-blue-300 transition ease-in duration-200">
                                    MN
                                </button>
                                <p className="text-blue-500 text-bold text-xl">/</p>
                                <button onClick={() => { window.open('https://news.stablecoin.mn/assets/f1371090-4aa9-4438-932d-a76726e7e313.pdf', '_blank') }} className="font-bold text-blue-500 text-lg hover:text-blue-300 transition ease-in duration-200">
                                    EN
                                </button>
                            </div>
                        </div>
                        <p className="text-blue-500 text-left">{t('whitepaper')}</p>

                    </div>
                    {
                        icons.map(icon => {
                            return (
                                <div onClick={() => { window.open(icon.link, '_blank') }} className=" xl:p-8 lg:p-6 p-8 cursor-pointer shadow-lg  h-[128px] bg-white hover:shadow-2xl transition ease-in duration-200 rounded-md" key={icon.id}>
                                    <div  className="cursor-pointer">
                                        <div className="flex items-center mb-3 space-x-3">

                                            {icon.icon}

                                            <p className="font-bold text-blue-500 text-xl">{icon.name}</p>
                                        </div>
                                    </div>
                                    <p className="text-blue-500 text-left">{t(icon.description)}</p>

                                </div>
                            )
                        })
                    }
                    <div className=" xl:p-8 lg:p-6 p-8 shadow-lg  h-[128px] bg-white hover:shadow-2xl transition ease-in duration-200 rounded-md">
                        <div className="cursor-pointer">
                            <div className="flex items-center mb-3 space-x-3">
                                <FaChartBar className="text-2xl text-blue-500" />
                                <button onClick={() => { window.open('https://bscscan.com/token/0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4', '_blank') }} className="font-bold text-blue-500 text-lg hover:text-blue-300 transition ease-in duration-200">
                                    BSCScan
                                </button>
                                <p className="text-blue-500 text-bold text-xl">/</p>
                                <button onClick={() => { window.open('https://polygonscan.com/token/0x7ea130ec7508a1224737b7d56f108601c6a46c73', '_blank') }} className="font-bold text-blue-500 text-lg hover:text-blue-300 transition ease-in duration-200">
                                    PolygonScan
                                </button>
                            </div>
                        </div>
                        <p className="text-blue-500 text-left">{t('bscscan')}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}