import React from 'react'
import mont from '../img/mont.svg'
import Image from 'next/image'

export default function MarketCap() {
    return (
        <div className="lg:flex container mx-auto">
            <div className="bg-blue-500  rounded-tl-xl lg:rounded-bl-xl rounded-tr-xl lg:rounded-tr-none  w-full lg:flex justify-between items-center p-10 mt-32">
                <div className="lg:flex">
                <div className="-translate-x-4 lg:translate-x-0 lg:mb-0 mb-2 ">
                    <Image  src={mont} alt="" />
                    </div>
                    <div className="lg:ml-10 ">
                        <h1 className="text-[#f5f0f0]">MarketCap</h1>
                        <p className="text-white text-2xl mt-4">1,458,657₮</p>
                        <h1 className="text-[#f5f0f0] mt-4">Token Address</h1>
                        <p className="text-white lg:text-2xl text-sm mt-4">0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4</p>
                    </div>
                </div>
            </div>
            <div className="bg-blue-700 lg:rounded-tr-xl rounded-br-xl rounded-bl-xl lg:rounded-bl-none   flex items-center  p-10 lg:mt-32">
                <div className="lg:mr-10 text-white">
                    <div className="flex mb-2">
                        <a href="#" className="mr-2 hover:text-blue-300 transition duration-100 ease-in">BSCScan </a>
                        <i className="bi bi-box-arrow-up-right"></i>
                    </div>
                    <div className="flex mb-2">
                        <a href="#" className="mr-2 hover:text-blue-300 transition duration-100 ease-in">Github </a>
                        <i className="bi bi-box-arrow-up-right"></i>
                    </div>
                    <div className="flex">
                        <a href="#" className="mr-2 hover:text-blue-300 transition duration-100 ease-in">Krypto.mn </a>
                        <i className="bi bi-box-arrow-up-right"></i>

                    </div>

                </div>
            </div>
        </div>

    )
}
