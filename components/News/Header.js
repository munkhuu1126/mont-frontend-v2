import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BsFillGridFill } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import axios from 'axios'
import NewsCard from './NewsCard'
import { data } from 'autoprefixer'


export default function Header({ data }) {
    console.log(data)

    const { t } = useTranslation()
    return (
        <div>
            <div className="bg-black">
                <h1 className="text-6xl text-white container mx-auto py-24 px-48 ">{t('news_')}</h1>
            </div>
            <div className="bg-[#e5e7eb]">
                <div className="container mx-auto justify-end flex space-x-2 text-xl lg:px-40 py-4">
                    <p>{t('layout_')}</p>
                    <button><BsFillGridFill /></button>
                    <button><GiHamburgerMenu /></button>
                </div>
            </div>
            <div className="container mx-auto lg:px-40 gap-x-10 grid grid-cols-3 my-10 ">
                <NewsCard/>
                <NewsCard/>
                <NewsCard/>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await axios.get('http://localhost:8055/items/News')
    const data = await res.data
    



    return {
        props: { data }
    }
}