import React from 'react';
import '../styles/Home.module.css'
import Banner from '../components/Banner';
import Community from '../components/Community';
import ExplanationCard from '../components/ExplanationCard';
import Faq from '../components/Faq';
import NewsCard from '../components/News/NewsCard';
import Intro from '../components/Intro';
import MarketCap from '../components/MarketCap';

import Partners from '../components/Partners'
import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';

function App({data}) {
  const router = useRouter()
  console.log(data)
  const newsContent = data.data.slice(0,3).map(newsData => {
    return (
        <div key={newsData.id}>
            <NewsCard
                title={newsData.title}
                description={newsData.content}
                image={newsData.main_image}
                card_desc={newsData.card_desc}
                slug={newsData.id}
                width={'w-full'}
                height={'h-60'} />


        </div>
    )
})
  return (
    <div className="App home-background">
      <Head>
        <title>MONT About</title>
      </Head>
      
    
      <Intro />
      <div className='grid md:grid-cols-3 md:px-0 px-4 gap-3 mt-10 container mx-auto'>
        <ExplanationCard icon='bi bi-coin' paragraph="explanation1" />
        <ExplanationCard icon='bi bi-globe' paragraph="explanation2" />
        <ExplanationCard icon='bi bi-safe' paragraph="explanation3" />
      </div>
      <div className='px-4 md:px-0'>
        <MarketCap />
      </div>
      <div>
        <Banner />
      </div>
      <div className='px-4 md:px-0'>
        <Partners />
      </div>
      <h1 className="font-bold text-3xl text-blue-500 text-center mb-5">News</h1>

      <div className='container mx-auto grid md:grid-cols-3 md:px-0 px-4 gap-x-1 gap-y-5 md:gap-y-0'>
        {newsContent}
      </div>
      <div className='flex container mx-auto justify-end lg:px-0 px-4 mt-4 mb-10 hover:text-blue-500 transition ease-in duration-100'>
        <button className='' onClick={()=>{router.push('/news')}}>
          
          See all
      
          </button>
        <i className="bi bi-arrow-right "></i>
      </div>

      <div>
        <Community />
      </div>
      <div className="container mx-auto mb-10 lg:px-0 px-4">
        <Faq />
      </div>
    </div>
  );
}



export default App;


export async function getServerSideProps() {
  const res = await axios.get('http://localhost:8055/items/News?sort=sort,-date_created')
  const data = await res.data

  return {
      props: { data }
  }
}
