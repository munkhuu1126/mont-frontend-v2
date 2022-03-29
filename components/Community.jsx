import React from 'react'
import twitter from '../img/twitter.png'
import discord from '../img/discord.webp'
import telegram from '../img/telegram.png'
import github from '../img/github.png'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

export default function Community() {
    const images = [
        {
            id: 1,
            image: twitter,
            name: 'Twitter',
            color: '#4aa1ec'
        },
        {
            id: 2,
            image: discord,
            name: 'Discord',
            color: '#8c9eff'
        },
        {
            id: 3,
            image: telegram,
            name: 'Telegram',
            color: '#3aa6d4'
        },
        {
            id: 4,
            image: github,
            name: 'Github',
            color: '#000000'
        }
    ]
    const {t} = useTranslation()

    return (
        <div className="container mx-auto lg:px-0 px-4 ">
            <h1 className="font-bold text-3xl text-blue-500 text-center">{t('community')}</h1>
            <div className='text-center bg-[#ecf0f1] mt-5 lg:p-32  rounded-xl mb-10'>
                <h1 className="font-bold p-5 lg:p-0 text-xl">{t('join_the_community')}</h1>
                <p className="px-20">{t('community_text')}</p>
                <div className="lg:flex grid grid-cols-2 items-center justify-evenly mt-10">
                    {
                        images.map(image => {
                            return (
                                <div className="hover:bg-cyan-300 p-4 rounded-xl" key={image.id}>
                                    <Image src={image.image} alt="" className="mx-auto" width="36px" height="36px" />
                                    <p className="font-bold" style={{ color: `${image.color}` }}>{image.name}</p>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}