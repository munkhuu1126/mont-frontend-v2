import React from 'react'
import axios from 'axios'
import parser from 'html-react-parser'
import Image from 'next/image'
import Head from 'next/head'
import { BsArrowLeft } from 'react-icons/bs'
import { useRouter } from 'next/router'

export default function Post({ data }) {
  const router = useRouter()
  const currentContent = data.data
  function GraphCMSImageLoader({ src }) {

    return `https://news.stablecoin.mn/assets/${src}`;
  }
  return (
    <div className="container font-rubik mx-auto lg:px-0 px-8 prose prose-img:rounded-xl prose-p:text-lg hover:prose-a:text-red-500 prose-slate my-10">
      <Head>
        <title>{currentContent.title}</title>
        <link rel="icon" href="/mont-logo.ico"/>
      </Head>
      <button className="flex hover:-translate-x-5  group transition duration-200 hover:text-blue-500 ease-in space-x-2 my-2 items-center" onClick={()=>{router.push('/news')}}>
        <BsArrowLeft/>
        <span className="group-hover:border-blue-500 border-b">Бусад мэдээг унших</span> 
      </button>
      <h1 className="font-bold break-words text-4xl">{currentContent.title}</h1>
      <div className="relative">
        <Image loader={GraphCMSImageLoader} src={currentContent.main_image} height="100%" width='100%' layout="responsive" objectFit='contain' alt='' className="rounded-lg" />
      </div>
      <div className="my-10 content-stuff">{parser(currentContent.content)}</div>

    </div>
  )
}
export async function getStaticPaths() {
  const res = await axios.get('https://news.stablecoin.mn/Items/News')
  const data = await res.data.data

  const paths = await data.map((i) => {
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

export async function getStaticProps({ params }) {
  const res = await axios.get(`https://news.stablecoin.mn/Items/News/${params.id}`)
  const data = await res.data

  return {
    props: { data }
  }
}