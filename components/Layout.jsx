import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollButton from './ScrollButton'

export default function Layout({ children }) {
    return (
        <>
            <div className="">
                <Navbar />
                <main>
                    {children}
                </main>
                <div className="">
                <ScrollButton/>
                <Footer />
                </div>
            </div>

        </>
    )
}
