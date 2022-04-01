import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { useRouter } from 'next/router';

function GraphCMSImageLoader({ src}) {

    return `https://news.stablecoin.mn/assets/${src}`;
}

export default function NewsCard({ title, image, slug, width, height, shadow }) {
    const router = useRouter()
    return (
        <div className={`${width} border rounded-lg ${shadow} hover:scale-110 transition duration-200 ease-in text-left cursor-pointer`}  onClick={()=>{router.push(`/news/${slug}`)}}>
            <div className=" overflow-hidden rounded-lg">
                <div className={`relative w-full ${height} `}>
                    <Image loader={GraphCMSImageLoader} src={image} layout='fill' objectFit="cover" alt='' className="rounded-t-lg" />
                </div>
                <div className="block py-4 space-y-2 px-6">
        

                    <h1 className="line-clamp-2 mb-20 font-bold text-blue-500 text-xl h-14 overflow-hidden">{title}</h1>
                    <div className="prose text-md font-bold line-clamp-2 h-5 text-[#646464]">Read More</div>
                

                </div>

            </div>

        </div>
    )
}
