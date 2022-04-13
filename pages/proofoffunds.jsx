import Head from 'next/head'
import React, { useState } from 'react'
import Cards from '../components/ProofOfFundsPage/Cards'
import axios from 'axios'
import { nanoid } from 'nanoid'
import { useTranslation } from 'react-i18next'

export default function ProofOfFunds({data}) {
    const [tabYear, setTabYear] = useState(2022)
    const changeTab = (selectedYear) => {
        setTabYear(selectedYear)
    }
    const {t} = useTranslation()
    return (

        <div className="text-white font-rubik p-10 home-background">
            <Head>
                <title>Proof of Funds | MONT</title>
                <link rel="icon" href="/mont-logo.ico" />
            </Head>
            <div className="container mx-auto px-4 md:px-0">
                <h1 className="text-blue-700 text-2xl my-3 font-bold">
                    {t('intro2_pof')}
                </h1>

                <div className=" grid mb-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-10 md:gap-y-10  lg:gap-y-0 gap-x-10">
                    {
                        data.data.map((pof)=>{
                            return(
                                <Cards key={nanoid()} circulatingfee={pof.in_circulation} reservefee={pof.reserve} cardbg={'first'} file={`https://news.stablecoin.mn/assets/${pof.pof_file}`} />
                            )
                        })
                    }
                </div>
                {/* <div className="text-white space-x-10">
                    <button className="rounded-lg bg-blue-700 hover:scale-110 transition ease-in duration-100 p-2 mx-auto" onClick={() => { changeTab(2022) }}>2022</button>
                    <button className="rounded-lg bg-blue-700 hover:scale-110 transition ease-in duration-100 p-2 mx-auto" onClick={() => { changeTab(2023) }}>2023</button>
                    <button className="rounded-lg bg-blue-700 hover:scale-110 transition ease-in duration-100 p-2 mx-auto" onClick={() => { changeTab(2024) }}>2024</button>
                </div> */}
            </div>

        </div>
    )
}

export async function getServerSideProps(){
    const res = await axios.get('https://news.stablecoin.mn/Items/proof_of_funds')
    const data = await res.data
    return {
        props: {data}
    }
}
