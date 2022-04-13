import React from 'react'
import mont from '../img/logo-19.png'
import Image from 'next/image'

export default function LoadingScreen() {
  return (
    <div className=''>
        <div className="  text-center fixed inset-x-0 animate-pulse top-1/2">
            <Image src={mont} alt="" width='64' height='64'  />
            
        </div>
    </div>
  )
}
