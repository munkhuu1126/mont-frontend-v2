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
            <div className="container mx-auto grid my-10 grid-cols-4 gap-x-14">
                <Cards year={`${tabYear} I`} circulatingfee={2123123123123} reservefee={42342342} />
                <Cards year={`${tabYear} II`} circulatingfee={2123123123123} reservefee={42342342} />
                <Cards year={`${tabYear} III`} circulatingfee={2123123123123} reservefee={42342342} />
                <Cards year={`${tabYear} IV`} circulatingfee={2123123123123} reservefee={42342342} />
            </div>
            <div className="text-orange-700 container mx-auto space-x-10">
                <button onClick={()=>{changeTab(2022)}}>2022</button>
                <button onClick={()=>{changeTab(2023)}}>2023</button>
                <button onClick={()=>{changeTab(2024)}}>2024</button>
            </div>
        </div>
    )
}
