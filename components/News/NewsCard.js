import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';


function GraphCMSImageLoader({ src }) {

    return `https://news.stablecoin.mn/assets/${src}`;
}




export default function NewsCard({ title, image, slug, width, height, shadow, description, mn_title }) {
    const {t} = useTranslation()


    const router = useRouter()
    return (
        <div className={`${width} border rounded-xl shrink-0 md:w-auto w-[310px] ${shadow} hover:shadow-2xl transition duration-200 ease-in text-left cursor-pointer`} onClick={() => { router.push(`/news/${slug}`) }}>
            <div className=" overflow-hidden rounded-lg">
                <div className={`relative w-full ${height} `}>
                    <Image loader={GraphCMSImageLoader} src={image} layout='fill' objectFit="cover" alt='' className="rounded-lg" />
                </div>
                <div className="block bg-white py-4 space-y-2 px-6">

                    <div className="mb-20 space-y-1">
                        <h1 className="line-clamp-2 font-bold text-blue-500 text-xl h-14 overflow-hidden">{title}</h1>
                        <p className="text-gray-400 font-extralight prose h-20 line-clamp-3">{parse(description)}</p>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-blue-500 hover:bg-blue-400 transition ease-in duration-200 text-center text-white md:px-20 px-10 py-2 rounded-full ">{t('read_more_news')}</button>
                    </div>


                </div>

            </div>

        </div>
    )
}
