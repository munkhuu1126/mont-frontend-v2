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
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
 

export default function Partners() {
    function GraphCMSImageLoader({ src}) {

        return src ;
    }


    const companies = [dax, trade, idax, denode, corex,grape, diverse, ict, tenger]
    const companyList = companies.map((company) => {
        return (
            
            <div key={nanoid()} className="mx-auto relative w-[160px] h-[auto] justify-center hover:grayscale-0 lg:grayscale transition ease-in duration-100">
                <Image loader={GraphCMSImageLoader} src={company} alt=""/>
            </div>
        
        )
    })
    // const companyList2 = companies2.map((company) => {
    //     return (
            
    //         <div key={nanoid()} className="mx-auto relative md:w-[160px] w-[120px] h-[auto] justify-center flex hover:grayscale-0 lg:grayscale transition ease-in duration-100">
    //             <Image src={company} alt="" />
    //         </div>
    //     )
    // })
    return (
        <div className='container mx-auto my-20'>
            <h1 className="text-blue-500 text-4xl font-bold text-center mb-5">Partners</h1>
            {/* <div className="px-10 py-20 md:py-32 rounded-xl">
                <div className="md:block grid grid-cols-2 gap-x-10">
                    <div className="grid md:grid-cols-5 grid-cols-1 gap-y-10 md:gap-y-0 md:gap-x-10 lg:px-20 md:mb-20 items-center">
                        {companyList}
                    </div>
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-y-10 md:gap-y-0 justify-center md:gap-x-10 lg:px-36 items-center'>
                        {companyList2}
                    </div>
                </div>
            </div> */}

        </div>
    )
}
