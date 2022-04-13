import React from 'react'
import twitter from '../img/twitter.png'
import discord from '../img/discord.webp'
import telegram from '../img/telegram.png'
import github from '../img/github.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import {BsDiscord, BsGithub, BsFacebook, BsNewspaper} from 'react-icons/bs'
import {FaTelegramPlane, FaChartBar} from 'react-icons/fa'
import Link from 'next/link'
import krypto from '../img/krypto.jpg'

export default function Community() {
    const icons =[
        {
            id:5,
            icon: <BsNewspaper className="text-2xl text-blue-500"/>,
            name:'Whitepaper',
            description: 'whitepaper',
            link:"https://www.stablecoin.mn/whitepaper.pdf"
        },
        {
            id:1,
            icon: <Image src={krypto} width='24' height='24' alt=""/>,
            name: 'Krypto.mn',
            description: 'krypto',
            link: "https://krypto.mn/currencies/mongol-tether"
        },
        {
            id:2,
            icon: <BsFacebook className="text-2xl text-blue-500"/>,
            name: 'Facebook',
            description: 'facebook',
            link:"https://www.facebook.com/MONTstablecoin"
        },
        {
            id:3,
            icon: <FaTelegramPlane className="text-2xl text-blue-500"/>,
            name:'Telegram',
            description: 'telegram',
            link: "https://t.me/MoNTstablecoin"
        },
        {
            id:4,
            icon: <BsGithub className="text-2xl text-blue-500"/>,
            name:'Github',
            description: 'github',
            link: "https://github.com/DiverseSolutions/Mont-Stable-Coin"
        },
        
        {
            id:6,
            icon: <FaChartBar className="text-2xl text-blue-500"/>,
            name:'BSCScan',
            description: 'bscscan',
            link: "https://bscscan.com/token/0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4"
        },
        
]
    const {t} = useTranslation()

    return (
        <div id="community" className="container mx-auto lg:px-0 px-4 ">
            <div className='text-center mt-5 lg:p-20  rounded-xl mb-10'>
                <h1 className="font-bold p-5 lg:p-0 text-3xl text-blue-500 mb-16">{t('join_the_community')}</h1>
                <p className="px-20 mb-5 font-extralight text-lg">{t('community_text')}</p>
                <div className=" items-center grid gap-4 lg:grid-cols-3 justify-evenly mt-10">
                    {
                        icons.map(icon => {
                            return (
                                <div className=" xl:p-8 lg:p-6 p-8 shadow-lg  h-[128px] bg-white hover:shadow-2xl transition ease-in duration-200 cursor-pointer rounded-md" key={icon.id}>
                                    <Link href= {icon.link} alt="" passHref>
                                    <div className="flex items-center mb-3 space-x-3">
                                    
                                    {icon.icon}
                                    
                                    <p className="font-bold text-blue-500 text-xl">{icon.name}</p>
                                    </div>
                                    </Link>
                                    <p className="text-blue-500 text-left">{t(icon.description)}</p>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}