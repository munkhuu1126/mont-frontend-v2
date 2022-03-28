import React, { useState } from 'react'
import mont from '../img/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'

export default function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <div className=" bg-black relative text-white">
            <div className="container mx-auto lg:px-0 px-4">
                <div className="flex justify-between  text-xl py-4">
                    <div className="flex w-[120px] h-[30px]">
                        <Image src={mont} alt="" width={160} height={40} layout="fixed"/>

                    </div>
                    <div className="lg:hidden flex">
                        <button onClick={() => { setMenu(!menu) }} className=" p-1 rounded-lg">
                            <AiOutlineMenu />
                        </button>

                    </div>
                    {/* desktop menu */}
                    <div className={`hidden lg:flex items-center space-x-5`}>
                        <a href="#" className='hover:text-blue-500 transition ease-in duration-200'>About</a>
                        <a href='#' className='hover:text-blue-500 transition ease-in duration-200'>Governance</a>
                    </div>

                </div>
                {/* mobile menu */}
                
            </div>
            <div className={`${menu ? 'block' : 'hidden'} lg:hidden bg-black w-full items-center p-5 absolute lg:p-0 text-lg lg:space-x-5`}>
                    <a href="#" className='hover:text-blue-500 my-5 block transition ease-in duration-200'>About</a>
                    <a href='#' className='hover:text-blue-500 my-5 block transition ease-in duration-200'>Governance</a>
                </div>
        </div>
    )
}
