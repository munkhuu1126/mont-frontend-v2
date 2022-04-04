import React, { useState, useEffect } from 'react'
import i18next from 'i18next'
import mont from '../img/mont-logo.png'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router'


export default function Navbar() {
    const [language, setLanguage] = useState(i18next.language === 'en' ? true : false)
    const changeLanguage = () => {
        let temp = !language
        setLanguage(temp)
        temp ? i18next.changeLanguage('mn') : i18next.changeLanguage('en')



    }



    useEffect(() => {

    }, [language])

    useEffect(() => {
        i18next.language === 'en' ? setLanguage(false) : setLanguage(true)
    }, [])

    const [menu, setMenu] = useState(false)
    const router = useRouter()
    return (
        <div className=" bg-black bg-opacity-90 sticky top-0 z-50 text-white">
            <div className="container mx-auto lg:px-10 px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="space-x-5 flex items-center">
                        <div className="flex w-[40px] cursor-pointer items-center h-[40px]" onClick={() => { router.push('/') }}>

                            <Image src={mont} alt="" width={40} height={40} layout="fixed" />


                        </div>




                        {/* desktop menu */}
                        <div className="lg:flex hidden space-x-5">
                            <button className='hover:text-blue-500 text-lg transition ease-in duration-200 font-bold' onClick={() => { router.push('/') }}>About</button>
                            <button className='hover:text-blue-500 text-lg transition ease-in duration-200 font-bold' onClick={() => { router.push('/proofoffunds') }}>Proof of Funds</button>
                            <button className='hover:text-blue-500 text-lg transition ease-in duration-200 font-bold' onClick={() => { router.push('/news') }}>News</button>
                        </div>
                    </div>
                    <div className=" px-4 lg:flex hidden lg:px-0 items-center">
                        <button className="text-white hover:text-blue-500 transition ease-in duration-200 font-bold" onClick={() => changeLanguage()}>{language ? 'EN' : 'MN'}</button>
                    </div>
                    <button onClick={() => { setMenu(!menu) }} className="lg:hidden flex p-1 rounded-lg">
                        <AiOutlineMenu />
                    </button>

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
                <div className={`lg:hidden bg-black bg-opacity-90 w-full items-center p-5 absolute lg:p-0 text-lg lg:space-x-5`}>
                    <button className='hover:text-blue-500 block transition my-5 ease-in duration-200' onClick={() => { router.push('/') }}>About</button>
                    <button className='hover:text-blue-500 block transition my-5 ease-in duration-200' onClick={() => { router.push('/proofoffunds') }}>Proof of Funds</button>
                    <button className='hover:text-blue-500 block transition my-5 ease-in duration-200' onClick={() => { router.push('/news') }}>News</button>
                </div>
            </Transition>

        </div>
    )
}
