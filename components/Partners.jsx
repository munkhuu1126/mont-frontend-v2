import React from 'react'
import corex from '../img/corex.png'
import dax from '../img/dax.png'
import denode from '../img/denode.png'
import diverse from '../img/diverse.png'
import grape from '../img/gcm.png'
import ict from '../img/ict.png'
import idax from '../img/idax.png'
import tenger from '../img/tenger.png'
import trade from '../img/trade.png'
import { nanoid } from 'nanoid'
import Image from 'next/image'


export default function Partners() {
    const companies = [dax, trade, idax, denode, corex]
    const companies2 = [grape, diverse, ict, tenger]
    const companyList = companies.map((company) => {
        return (
            <div key={nanoid()} className="mx-auto relative lg:w-[160px] w-[120px] flex justify-center h-[auto] hover:grayscale-0 lg:grayscale transition ease-in duration-100">
                <Image src={company} alt=""/>
            </div>
        )
    })
    const companyList2 = companies2.map((company) => {
        return (
            
            <div key={nanoid()} className="mx-auto relative lg:w-[160px] w-[120px] h-[auto] justify-center flex hover:grayscale-0 lg:grayscale transition ease-in duration-100">
                <Image src={company} alt="" />
            </div>
        )
    })
    return (
        <div className='container mx-auto my-20'>
            <h1 className="text-blue-500 text-4xl font-bold text-center mb-5">Partners</h1>
            <div className="px-10 py-20 lg:py-32 rounded-xl bg-[#ecf0f1]">
                <div className="lg:block grid grid-cols-2 gap-x-10">
                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-y-10 lg:gap-y-0 lg:gap-x-10 lg:px-20 lg:mb-20 items-center">
                        {companyList}
                    </div>
                    <div className='grid lg:grid-cols-4 grid-cols-1 gap-y-10 lg:gap-y-0 justify-center lg:gap-x-10 lg:px-36 items-center'>
                        {companyList2}
                    </div>
                </div>
            </div>
        </div>
    )
}
