import React from 'react'
import Image from 'next/image'


export default function News({image,header,date}) {
    return (
        <div className="w-full rounded-md">
            <div className="rounded overflow-hidden shadow-lg">
                <div className="relative w-full h-60">
                    <Image src={image} layout='fill' objectFit="cover" alt='' />
                </div>
                <div className="grid grid-rows-1 py-6 px-6">
                    <div className="font-bold h-14 line-clamp-2  text-xl mb-2">{header}</div>
                    <p className="text-gray-700 text-base">
                        {date}
                    </p>
                </div>

            </div>

        </div>
    )
}
