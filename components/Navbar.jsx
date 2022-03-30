import React, { useState } from 'react'
import mont from '../img/logo.svg'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
    const [menu, setMenu] = useState(false)
    const router = useRouter()
    return (
        <div className=" bg-black relative text-white">
            <div className="container mx-auto lg:px-0 px-4">
                <div className="flex justify-between  text-xl py-4">
                    <div className="flex w-[120px] cursor-pointer items-center h-[30px]" onClick={() => { router.push('/') }}>

                        <Image src={mont} alt="" width={160} height={40} layout="fixed" />


                    </div>
                    <div className="lg:hidden flex">
                        <button onClick={() => { setMenu(!menu) }} className=" p-1 rounded-lg">
                            <AiOutlineMenu />
                        </button>

                    </div>
                    {/* desktop menu */}
                    <div className={`hidden lg:flex items-center space-x-5`}>
                        <button className='hover:text-blue-500 transition ease-in duration-200' onClick={() => { router.push('/') }}>About</button>
                        <button className='hover:text-blue-500 transition ease-in duration-200' onClick={() => { router.push('/proofoffunds') }}>Proof of Funds</button>
                        <button className='hover:text-blue-500 transition ease-in duration-200' onClick={() => { router.push('/news') }}>News</button>
                    </div>

                </div>
                {/* mobile menu */}

            </div>
            {/* <div className={`${menu ? 'block' : 'hidden'} lg:hidden bg-black w-full items-center p-5 absolute lg:p-0 text-lg lg:space-x-5`}>
                    <a href="#" className='hover:text-blue-500 my-5 block transition ease-in duration-200'>About</a>
                    <a href='#' className='hover:text-blue-500 my-5 block transition ease-in duration-200'>Governance</a>
                </div> */}
            <Transition
                show={menu}
                enter="transition -translate-y-15 duration-500 ease-in-out"
                enterFrom="transform opacity-0"
                enterTo="transform translate-y-0 scale-100 opacity-100"
                leave="transition duration-300 ease-in-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform opacity-0"
            >
                <div className={`lg:hidden bg-black w-full items-center p-5 absolute lg:p-0 text-lg lg:space-x-5`}>
                    <button className='hover:text-blue-500 block transition my-5 ease-in duration-200' onClick={() => { router.push('/') }}>About</button>
                    <button className='hover:text-blue-500 block transition my-5 ease-in duration-200' onClick={() => { router.push('/proofoffunds') }}>Proof of Funds</button>
                    <button className='hover:text-blue-500 block transition my-5 ease-in duration-200' onClick={() => { router.push('/news') }}>News</button>
                </div>
            </Transition>

        </div>
    )
}
