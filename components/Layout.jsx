import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <div className="flex flex-col justify-between h-screen">
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
            </div>

        </>
    )
}
