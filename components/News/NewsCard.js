import React from 'react'
import Image from 'next/image'
import parse from 'html-react-parser'
import { useRouter } from 'next/router';

function GraphCMSImageLoader({ src}) {

    return `http://localhost:8055/assets/${src}`;
}

export default function NewsCard({ title, card_desc, image, slug }) {
    const router = useRouter()
    return (
        <button className=" text-left max-w-xs rounded-md" onClick={()=>{router.push(`/news/${slug}`)}}>
            <div className=" overflow-hidden rounded-lg">
                <div className="relative w-full h-40 ">
                    <Image loader={GraphCMSImageLoader} src={image} layout='fill' objectFit="cover" alt='' className="rounded-2xl" />
                </div>
                <div className="block py-6 px-2">
        

                    <h1 className="line-clamp-2 text-blue-500 text-lg overflow-hidden">{title}</h1>
                    <div className="prose text-sm line-clamp-2 text-[#646464]">{parse(card_desc)}</div>
                

                </div>

            </div>

        </button>
    )
}
