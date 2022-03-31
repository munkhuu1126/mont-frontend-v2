import React from 'react'
import mont from '../img/mont.svg'
import Image from 'next/image'
import Link from 'next/link'
import Swal from 'sweetalert2'
import {BiCopy} from 'react-icons/bi'

export default function MarketCap() {
    const copy = ()=>{
        navigator.clipboard.writeText('0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4')
        Swal.fire({
            position: 'center',
            title: 'Successfully copied the token address!',
            showConfirmButton: false,
            timer: 1500
        })
        
    }
    return (
        <div className="md:flex container mx-auto">
            <div className="bg-blue-500  rounded-tl-xl md:rounded-bl-xl rounded-tr-xl md:rounded-tr-none  w-full md:flex justify-between items-center p-10 mt-32">
                <div className="md:flex">
                    <div className="-translate-x-4 md:translate-x-0 items-center flex md:mb-0 mb-2 ">
                        <Image src={mont} alt="" />
                    </div>
                    <div className="md:ml-10 ">
                        <h1 className="text-[#f5f0f0]">MarketCap</h1>
                        <p className="text-white lg:text-2xl text-md mt-1">1,458,657 MNT</p>
                        <h1 className="text-[#f5f0f0] mt-4">Token Address</h1>
                        <button 
                        className="text-white lg:text-2xl md:text-md flex items-center text-sm lg:no-underline underline lg:hover:underline mt-1" 
                        onClick={() => copy()}
                        >
                            0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4 <BiCopy/>
                        </button>
                        
                    </div>
                </div>
            </div>
            <div className="bg-blue-700 md:rounded-tr-xl rounded-br-xl rounded-bl-xl md:rounded-bl-none   flex items-center  p-10 md:mt-32">
                <div className="md:mr-10 text-white">
                    <div className="flex mb-2">
                        <a href="https://bscscan.com/token/0x2D279FDECdf7f5705F5ff0bD80F8D9a305Ea87F4"
                            className="mr-2 hover:text-blue-300 transition duration-100 ease-in">
                            BSCScan
                        </a>
                        <i className="bi bi-box-arrow-up-right"></i>
                    </div>
                    <div className="flex mb-2">
                        <a href="#" className="mr-2 hover:text-blue-300 transition duration-100 ease-in">Github </a>
                        <i className="bi bi-box-arrow-up-right"></i>
                    </div>
                    <div className="flex">
                        <a href="https://krypto.mn/currencies/mongol-tether" className="mr-2 hover:text-blue-300 transition duration-100 ease-in">Krypto.mn </a>
                        <i className="bi bi-box-arrow-up-right"></i>

                    </div>

                </div>
            </div>
        </div>

    )
}
