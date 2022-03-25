import React from 'react'
import IntroCards from './IntroCards'
import IntroClickableCard from './IntroClickableCard'

export default function Intro() {
  return (
    <div className="text-white bg-center">
      <div className="container mx-auto py-52 px-16">
        <h1 className='text-[2.5rem] font-bold mb-3'>Mongolia&apos;s First Stablecoin</h1>
        <h2 className='text-[#eeeeee] text-xl'>Some representative placeholder content for the first slide</h2>
      </div>
      <div className=' container mx-auto grid lg:grid-cols-2 lg:gap-y-0 gap-y-5 lg:px-0 px-4 gap-x-4'>
        <IntroCards />
        <IntroClickableCard />
      </div>
    </div>
  )
}
