import React, { useState, useEffect } from 'react'
import { FaChevronCircleUp } from 'react-icons/fa';

export default function ScrollButton() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const [top, setTop] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
                setTop(false)
            }
        });
    }, []);


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    }, [top])

    return (
        <button className={`${showTopBtn ? 'block' : 'hidden'} fixed bottom-4 right-4 text-blue-500 bg-white rounded-full text-6xl `} onClick={() => { setTop(true) }}>
            <FaChevronCircleUp />
        </button>
    )
}
