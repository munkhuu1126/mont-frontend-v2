import React, { useState, useEffect } from 'react'
import i18next from 'i18next'
import mont1 from '../img/mont-logo.png'
import mont2 from '../img/logo-19.png'
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import { useRouter } from 'next/router'


export default function Navbar() {
    const [language, setLanguage] = useState(i18next.language === 'en' ? true : false)
    const [scroll, setScroll] = useState(false)
    const changeLanguage = () => {
        let temp = !language
        setLanguage(temp)
        temp ? i18next.changeLanguage('mn') : i18next.changeLanguage('en')



    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 75) {
                setScroll(true)
            } else {
                setScroll(false)
            }
        });
    }, []);




    useEffect(() => {
        i18next.language === 'en' ? setLanguage(false) : setLanguage(true)
    }, [])

    const [menu, setMenu] = useState(false)
    const router = useRouter()
    return (
        <>

            <div className={` ${scroll ? 'bg-white text-black' : 'bg-black text-white'} sticky top-0 z-50`}>
                <div className="container mx-auto lg:px-10 px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="space-x-32 flex items-center">
                            <div className='flex items-center space-x-2'>
                                {scroll ?
                                    <div className="flex w-[40px] cursor-pointer items-center h-[40px]" onClick={() => { router.push('/') }}>

                                        <Image src={mont1} alt="" width={40} height={40} layout="fixed" />



                                    </div>
                                    :
                                    <div className="flex w-[40px] cursor-pointer items-center h-[40px]" onClick={() => { router.push('/') }}>

                                        <Image src={mont2} alt="" width={40} height={40} layout="fixed" />



                                    </div>}
                                <p className="text-white font-bold mt-1 text-2xl">MONT</p>
                            </div>



                            {/* desktop menu */}
                            <div className="lg:flex hidden space-x-20">
                                <button className='hover:text-blue-500  transition ease-in duration-200 font-bold' onClick={() => { router.push('/') }}>About</button>
                                <button className='hover:text-blue-500  transition ease-in duration-200 font-bold'>Proof of Funds</button>
                                <button className='hover:text-blue-500  transition ease-in duration-200 font-bold' onClick={() => { router.push('/news') }}>News</button>
                            </div>
                        </div>
                        <div className=" px-4 lg:flex hidden lg:px-0 items-center">
                            <button className=" hover:text-blue-500 transition ease-in duration-200 font-bold" onClick={() => { changeLanguage() }}>{language ? 'MN' : 'EN'}</button>
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
                    <div className={`lg:hidden ${scroll ? 'bg-white text-black' : 'bg-black text-white'} w-full items-center p-5 absolute lg:p-0 text-lg lg:space-x-5`}>
                        <button className=' block transition my-5 ease-in duration-200' onClick={() => { router.push('/') }}>About</button>
                        <button className=' block transition my-5 ease-in duration-200'>Proof of Funds</button>
                        <button className=' block transition my-5 ease-in duration-200' onClick={() => { router.push('/news') }}>News</button>
                        <button className=" text-blue-500 block transition ease-in my-5 duration-200" onClick={() => changeLanguage()}>{language ? 'MN' : 'EN'}</button>
                    </div>
                </Transition>

            </div>
        </>
    )
}
