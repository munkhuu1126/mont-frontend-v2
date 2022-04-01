import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <div className="">
                <Navbar />
                <main>
                    {children}
                </main>
                <div className="lg:px-10">
                <Footer />
                </div>
            </div>

        </>
    )
}
