import React from 'react';
import '../styles/Home.module.css'
import Banner from '../components/Banner';
import Community from '../components/Community';
import ExplanationCard from '../components/ExplanationCard';
import Faq from '../components/Faq';

import Intro from '../components/Intro';
import MarketCap from '../components/MarketCap';
import News from '../components/News';
import Partners from '../components/Partners'
import news1 from '../img/news1.png'
import news2 from '../img/news2.jpg'
import news3 from '../img/news3.png'
import Head from 'next/head';

function App() {
  return (
    <div className="App home-background">
      <Head>
        <title>MONT About</title>
      </Head>
      
    
      <Intro />
      <div className='grid lg:grid-cols-3 lg:px-0 px-4 gap-3 mt-10 container mx-auto'>
        <ExplanationCard icon='bi bi-coin' paragraph="Use a stablecoin with the longest proven track record of liquidity and redeemability" />
        <ExplanationCard icon='bi bi-globe' paragraph="Attract more global users and trading volume through international fiat markets with TrueCurrencies" />
        <ExplanationCard icon='bi bi-safe' paragraph="Store and move your money quickly and without fees, or use TrueCurrencies with our partners to buy goods and services" />
      </div>
      <div className='px-4 lg:px-0'>
        <MarketCap />
      </div>
      <div>
        <Banner />
      </div>
      <div className='px-4 lg:px-0'>
        <Partners />
      </div>
      <h1 className="font-bold text-3xl text-blue-500 text-center mb-5">News</h1>

      <div className='container mx-auto grid lg:grid-cols-3 lg:px-0 px-4 gap-x-1 gap-y-5 lg:gap-y-0'>
        <News image={news1} header='MONT Ард аппликейшндээр нэвтэрлээ.' date='March 18, 2022' />
        <News image={news2} header='EXCLUSIVE: Sifu Speaks! Ousted Wonderland Co-Founder Unveils New Venture and Defends His Record' date='March 18, 2022' />
        <News image={news3} header="Proposal Aims to Shake up MakerDAO's Tokenomics and Light a Fire Under MKR" date='March 18, 2022' />
      </div>
      <div className='flex container mx-auto justify-end lg:px-0 px-4 mt-4 mb-10 hover:text-blue-500 transition ease-in duration-100'>
        <button className=''>See all</button>
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
