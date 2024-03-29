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
import Slider from 'react-slick';
import header from '../img/header.gif'
import { useTranslation } from 'react-i18next';

function App({ data }) {
  const {t} = useTranslation()
  const router = useRouter()
  const newsContent = data.data.slice(0, 3).map(newsData => {
    return (
      <div key={newsData.id}>
        <NewsCard
          title={newsData.title}
          description={newsData.content}
          image={newsData.main_image}
          card_desc={newsData.card_desc}
          slug={newsData.id}
          width={'w-full'}
          height={'h-52'}
          shadow={'shadow-lg'}
        />


      </div>
    )
  })
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true
  }
  const newsContentmd = data.data.slice(0, 4).map(newsData => {
    return (
      <div key={newsData.id}>
        <NewsCard
          title={newsData.title}
          description={newsData.content}
          image={newsData.main_image}
          card_desc={newsData.card_desc}
          slug={newsData.id}
          width={'w-full'}
          height={'h-52'}
          shadow={'shadow-lg'} />


      </div>
    )
  })
  const newsContentsm = data.data.slice(0, 4).map(newsData => {
    return (
      <div key={newsData.id}>
        <NewsCard
          title={newsData.title}
          description={newsData.content}
          image={newsData.main_image}
          card_desc={newsData.card_desc}
          slug={newsData.id}
          width={'w-full'}
          height={'h-52'}
          shadow={'shadow-none'}
        />


      </div>
    )
  })
  return (
    <div style={{ backgroundImage: `url("${header.src}")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'top center', }}
      className="App font-rubik home-background">
      <Head>
        <title>MONT | Stablecoin</title>
        <link rel="icon" href='/mont-logo.ico' />
      </Head>


      <Intro />
      <div className='grid md:grid-cols-3 xl:px-10 px-4 gap-3 mt-10 container mx-auto'>
        <ExplanationCard icon='bi bi-graph-up-arrow' paragraph="explanation1" />
        <ExplanationCard icon='bi bi-globe' paragraph="explanation2" />
        <ExplanationCard icon='bi bi-phone' paragraph="explanation3" />
      </div>
      <div className='px-4 lg:px-10'>
        <MarketCap />
      </div>
      <div>
        <Banner />
      </div>
      <div className='px-4 md:px-0'>
        <Partners />
      </div>
      <h1 className="font-bold text-4xl text-blue-500 text-center mb-5">{t('news_header')}</h1>

      <div className='container mx-auto hidden lg:grid grid-cols-3 xl:px-32 gap-x-12 gap-y-5 lg:gap-y-0'>
        {newsContent}
      </div>
      <div className='container mx-auto lg:hidden md:grid hidden grid-cols-2 px-12 gap-x-12 gap-y-5 lg:gap-y-0'>
        {newsContentmd}
      </div>
      <div className=' md:hidden overflow-x-scroll space-x-10 px-5 container flex'>
          {newsContentsm}
        
      </div>
      <div className='flex justify-center  mt-10 mb-10'>
        <div className="bg-blue-500 py-3 px-4 rounded-full text-center flex items-center space-x-1 text-white font-bold hover:shadow-xl transition ease-in duration-100 cursor-pointer" onClick={() => { router.push('/news') }}>
          <button
            className=' font-bold '
          >

            {t('see_all_news')}

          </button>
          <i className="bi bi-arrow-right "></i>
        </div>
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
  const res = await axios.get('https://news.stablecoin.mn/Items/News?sort=sort,-date_created')
  const data = await res.data

  return {
    props: { data }
  }
}
