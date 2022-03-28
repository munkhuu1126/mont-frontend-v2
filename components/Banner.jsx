import React from 'react'
import background from '../img/bg2.jpg'
import Image from 'next/image'
import Link from 'next/link'


export default function Banner() {
    return (
        <div className="my-20">
            <div className="text-white relative">




                <div className="container mx-auto relative z-10 lg:px-0 py-20 px-4">
                    <h1 className="text-4xl font-bold text-center">Proof of funds</h1>
                    <p className="mt-3 lg:px-72 lg:text-left text-justify">Every month, certain management assertions related to the total USDC in circulation
                        are attested to by top 5 accounting services firm, Grant Thornton LLP. We publish those
                        reports so that you can be confident that USDC is always 100% redeemable for dollars.
                    </p>
                    <div className="flex justify-center mt-5">
                        <button className="rounded-lg border-white border hover:text-black hover:bg-white transition ease-in duration-100 p-2 mx-auto">
                            <Link href={'/proofoffunds'}>
                            See more
                            </Link>
                            
                        </button>
                    </div>

                </div>
                <Image src={background} className="absolute w-full a h-full -z-10" layout='fill' objectFit="cover" alt='' />
                
            </div>
        </div>
    )
}