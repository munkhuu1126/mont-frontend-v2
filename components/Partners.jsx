import React from 'react'
import corex from '../img/logos-02.png'
import dax from '../img/logos-03.png'
import denode from '../img/logos-04.png'
import diverse from '../img/logos-05.png'
import grape from '../img/logos-06.png'
import ict from '../img/logos-07.png'
import idax from '../img/logos-08.png'
import tenger from '../img/logos-09.png'
import trade from '../img/logos-10.png'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import Slider from 'react-slick'
import { useTranslation } from 'react-i18next'



export default function Partners() {
    function GraphCMSImageLoader({ src }) {

        return src;
    }
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2850,
        autoplaySpeed: 0,
        cssEase: "linear",
        arrows:false
      };

    const {t} = useTranslation()
    const companies = [dax, trade, idax, denode, corex, grape, diverse, ict, tenger]
    const companyList = companies.map((company) => {
        return (

            <div key={nanoid()} className=" mx-auto relative sm:w-[160px] w-[120px] text-center h-[auto] justify-center transition ease-in duration-100">
                <div className='md:w-7/12 w-10/12 shrink-0  mx-auto'>
                    <div className="relative w-full bg-white shadow-sm  lg:h-24 h-12">
                        <Image loader={GraphCMSImageLoader} src={company} alt="" layout="fill" objectFit='contain' />
                    </div>
                </div>
            </div>

        )
    })
    const companyList2 = companies.slice(5,9).map((company) => {
        return (

            <div key={nanoid()} className="mx-auto relative sm:w-[160px] w-[120px] h-[auto] lg:hover:scale-110 text-center justify-center hover:grayscale-0 lg:grayscale transition ease-in duration-100">
                <Image loader={GraphCMSImageLoader} src={company} alt=""/>
            </div>

        )
    })


    return (
        <div id="partners" className=' my-5'>
            <h1 className="text-blue-500 text-4xl font-bold text-center mb-5">{t('partners_header')}</h1>
            <div className="py-10 rounded-xl">
                <div className="block mx-auto lg:px-10 container">
                    {/* <div className="grid lg:grid-cols-5 gap-y-10 xl:gap-y-0 md:gap-x-10 lg:gap-x-0 items-center">
                        {companyList}
                    </div> */}
                    <Slider {...settings}>
                        {companyList}
                    </Slider>
                    {/* <div className="flex items-center justify-center gap-y-10 gap-x-10 flex-wrap" >
                        {companyList}
                    </div> */}
                    {/* <div className='grid lg:grid-cols-4 grid-cols-1 gap-y-10 lg:gap-y-0 lg:gap-x-10 xl:px-36 items-center'>
                        {companyList2}
                    </div> */}
                </div>
            </div>

        </div>
    )
}
