import React from 'react'
import axios from 'axios'
import parser from 'html-react-parser'
import Image from 'next/image'
import Head from 'next/head'

export default function Post({data}) {
  const currentContent = data.data
  function GraphCMSImageLoader({src}) {

    return `https://news.stablecoin.mn/assets/${src}`;
  } 
  return (
    <div className = "container mx-auto lg:px-0 px-8 prose prose-img:rounded-xl prose-p:text-lg hover:prose-a:text-red-500 prose-slate my-10">
      <Head>
        <title>{currentContent.title}</title>
      </Head>
      <h1 className="font-bold break-words text-4xl">{currentContent.title}</h1>
      <div className="relative w-auto h-[160px] md:w-full md:h-[360px]">
        <Image loader={GraphCMSImageLoader} src={currentContent.main_image} layout="fill" objectFit="cover" alt='' className="rounded-lg"/>
      </div>
        <div className="my-10">{parser(currentContent.content)}</div>
        
    </div>
  )
}
export async function getStaticPaths(){
    const res = await axios.get('https://news.stablecoin.mn/Items/News')
    const data = await res.data.data

    const paths =  await data.map((i)=>{
      return {
        params: {
          id: i.id.toString()
        }
      }
    })
    
    return {
      paths,
      fallback: 'blocking'
    }
}

export async function getStaticProps({params}){
  const res = await axios.get(`https://news.stablecoin.mn/Items/News/${params.id}`)
  const data = await res.data

  return {
    props : {data}
  }
}