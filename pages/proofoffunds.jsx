import Head from 'next/head'
import React, { useState } from 'react'
import Cards from '../components/ProofOfFundsPage/Cards'

export default function ProofOfFunds() {
    const [tabYear, setTabYear] = useState(2022)
    const changeTab = (selectedYear) => {
        setTabYear(selectedYear)
    }
    return (

        <div className="text-white">
            <Head>
                <title>Proof of Funds</title>
            </Head>
            <div className="container mx-auto px-4 lg:px-0">
                <h1 className="text-blue-500 mt-10 text-2xl font-bold">
                    Proof of Funds
                </h1>

                <div className=" grid my-10 lg:grid-cols-4 grid-cols-1 gap-y-10 lg:gap-y-0 gap-x-14">
                    <Cards year={`${tabYear} I`} circulatingfee={2123123123123} reservefee={42342342} />
                    <Cards year={`${tabYear} II`} circulatingfee={2123123123123} reservefee={42342342} />
                    <Cards year={`${tabYear} III`} circulatingfee={2123123123123} reservefee={42342342} />
                    <Cards year={`${tabYear} IV`} circulatingfee={2123123123123} reservefee={42342342} />
                </div>
                <div className="text-orange-700 mb-10 space-x-10">
                    <button className="bg-black p-2 rounded-lg" onClick={() => { changeTab(2022) }}>2022</button>
                    <button className="bg-black p-2 rounded-lg" onClick={() => { changeTab(2023) }}>2023</button>
                    <button className="bg-black p-2 rounded-lg" onClick={() => { changeTab(2024) }}>2024</button>
                </div>
            </div>

        </div>
    )
}
