import React from 'react'
import twitter from '../img/twitter.png'
import discord from '../img/discord.webp'
import telegram from '../img/telegram.png'
import github from '../img/github.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import {BsDiscord, BsGithub, BsTwitter} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'

export default function Community() {
    
    const icons =[
        {
            id:1,
            icon: <BsDiscord className="text-2xl text-blue-500"/>,
            name: 'Discord',
            description: 'Get Involved'
        },
        {
            id:2,
            icon: <BsTwitter className="text-2xl text-blue-500"/>,
            name: 'Twitter',
            description: 'Follow the latest news'
        },
        {
            id:3,
            icon: <FaTelegramPlane className="text-2xl text-blue-500"/>,
            name:'Telegram',
            description: 'Join the Community'
        },
        {
            id:4,
            icon: <BsGithub className="text-2xl text-blue-500"/>,
            name:'Github',
            description: 'Check the progress'
        },
        
]
    const {t} = useTranslation()

    return (
        <div className="container mx-auto lg:px-0 px-4 ">
            <div className='text-center mt-5 lg:p-20  rounded-xl mb-10'>
                <h1 className="font-bold p-5 lg:p-0 text-3xl text-blue-500 mb-16">{t('join_the_community')}</h1>
                <p className="px-20 mb-5 font-extralight text-lg">{t('community_text')}</p>
                <div className="lg:flex lg:space-x-4 items-center justify-evenly mt-10">
                    {
                        icons.map(icon => {
                            return (
                                <div className=" p-8 shadow-lg lg:w-1/3 h-[128px] hover:-translate-y-2 transition ease-in duration-200 cursor-pointer rounded-md" key={icon.id}>
                                    <div className="flex items-center mb-3 space-x-3">
                                    
                                    {icon.icon}
                                    
                                    <p className="font-bold text-blue-500 text-xl">{icon.name}</p>
                                    </div>
                                    <p className="text-blue-500 text-left">{icon.description}</p>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}