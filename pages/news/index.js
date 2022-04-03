import React from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../../components/News/Header'
import NewsCard from '../../components/News/NewsCard'
import Head from 'next/head'
import axios from 'axios'




export default function news({ data }) {
    

    const newsContent = data.data.map(newsData => {
        return (
            <div key={newsData.id}>
                <NewsCard
                    title={newsData.title}
                    description={newsData.content}
                    image={newsData.main_image}
                    card_desc={newsData.card_desc}
                    slug={newsData.id}
                    width={'w-full'}
                    height={'h-48'}
                    shadow={'shadow-lg'} />

            </div>
        )
    })


    return (
        <div>
            <Head>
                <title>News</title>
                <link rel="icon" href="/mont-logo.ico" />
            </Head>
            <Header latestNews={data.data[0]}  />
            <div className="container mx-auto lg:px-[5rem] xl:px-[8rem] 2xl:px-[10rem] gap-y-5 px-10 md:px-24 lg:gap-x-6 gap-x-5 grid md:grid-cols-2 lg:grid-cols-3 my-10 ">
                {
                    newsContent
                }
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await axios.get('https://news.stablecoin.mn/Items/News?sort=sort,-date_created')
    const data = await res.data

    return {
        props: { data }
    }
}
