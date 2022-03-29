import React from 'react'
import Image from 'next/image'
import dummy from '../../img/news1.png'

export default function NewsCard() {
    return (
        <div className=" rounded-md">
            <div className=" overflow-hidden rounded-lg shadow-lg">
                <div className="relative w-full h-60">
                    <Image src={dummy} layout='fill' objectFit="cover" alt='' className="rounded-2xl" />
                </div>
                <div className="block py-6 px-6">
                    <h1><button className="text-blue-500 text-lg">NFT</button></h1>
                    
                    <button>Never Gonna Give You Up</button>
                    <p className="">Never Gonna Give you up</p>
                    <p>Author</p>

                </div>

            </div>

        </div>
    )
}
