import Head from 'next/head'
import React, { useState } from 'react'
import Cards from '../components/ProofOfFundsPage/Cards'

export default function ProofOfFunds() {
    const [tabYear, setTabYear] = useState(2022)
    const changeTab = (selectedYear) => {
        setTabYear(selectedYear)
    }
    return (

        <div className="text-white p-10 home-background">
            <Head>
                <title>Proof of Funds</title>
            </Head>
            <div className="container mx-auto px-4 md:px-0">
                <h1 className="text-blue-700 text-2xl my-3 font-bold">
                    Proof of Funds
                </h1>

                <div className=" grid mb-10 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-y-10 md:gap-y-10  lg:gap-y-0 gap-x-10">
                    <Cards year={`${tabYear} I`} circulatingfee={2123123123123} reservefee={42342342} cardbg= {'first'} />
                    <Cards year={`${tabYear} II`} circulatingfee={2123123123123} reservefee={42342342} cardbg= {'second'} />
                    <Cards year={`${tabYear} III`} circulatingfee={2123123123123} reservefee={42342342} cardbg= {'third'} />
                    <Cards year={`${tabYear} IV`} circulatingfee={2123123123123} reservefee={42342342} cardbg= {'fourth'} />
                </div>
                <div className="text-white space-x-10">
                    <button className="rounded-lg bg-blue-700 hover:scale-110 transition ease-in duration-100 p-2 mx-auto" onClick={() => { changeTab(2022) }}>2022</button>
                    <button className="rounded-lg bg-blue-700 hover:scale-110 transition ease-in duration-100 p-2 mx-auto" onClick={() => { changeTab(2023) }}>2023</button>
                    <button className="rounded-lg bg-blue-700 hover:scale-110 transition ease-in duration-100 p-2 mx-auto" onClick={() => { changeTab(2024) }}>2024</button>
                </div>
            </div>

        </div>
    )
}
