import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Image from 'next/image';
import parser from 'html-react-parser'
import {useRouter} from 'next/router'





export default function Header({ latestNews }) {
    const { t } = useTranslation()
    const router = useRouter()

    function GraphCMSImageLoader({ src }) {

        return `http://localhost:8055/assets/${src}`;
    }

    return (
        <div>
            <div className="bg-black px-4 lg:px-60 py-10 ">
                <div className="container bg-white mx-auto group rounded-lg px-4 lg:px-20 py-10 hover:scale-110 transition duration-200 delay-50 ease-in lg:flex" onClick={()=>{router.push(`/news/${latestNews.id}`)}}>
                    <div className="lg:w-1/2">
                        <div className=" relative h-72">
                            <Image loader={GraphCMSImageLoader} src={latestNews.main_image} alt='' layout='fill' objectFit="cover" className="rounded-lg" />
                        </div>
                    </div>
                    <div className="block py-4 lg:w-1/2 space-y-2 px-6">

                        <h1 className="text-sm text-gray-500">Latest News</h1>
                        <p className="line-clamp-2 mb-20 font-bold text-blue-500 text-4xl h-14 overflow-hidden">{latestNews.title}</p>
                        <div className="">{parser(latestNews.card_desc)}</div>
                        <div className=" text-md font-bold line-clamp-2 text-blue-500 underline lg:no-underline  lg:group-hover:text-blue-500 h-5 lg:text-[#646464]">Read More</div>


                    </div>
                </div>
            </div>


        </div>
    )
}

