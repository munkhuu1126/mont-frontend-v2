import React, { useEffect } from 'react'
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
                    width={'max-w-xs'}
                    height={'h-40'} />

            </div>
        )
    })

    return (
        <div>
            <Head>
                <title>News</title>
            </Head>
            <Header data={data} />
            <div className="container mx-auto lg:px-32 gap-y-5 px-12 lg:gap-x-10 gap-x-5 grid md:grid-cols-3 my-10 ">
                {
                    newsContent
                }
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const res = await axios.get('http://localhost:8055/items/News?sort=sort,-date_created')
    const data = await res.data

    return {
        props: { data }
    }
}
