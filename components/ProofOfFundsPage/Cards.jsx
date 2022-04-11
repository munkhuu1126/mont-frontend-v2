import React from 'react'
import Link from 'next/link'

export default function Cards({year, circulatingfee, reservefee, cardbg, file}) {
  return (
    <div className={`${cardbg} text-blue-700 p-10 rounded-lg`}>
        <h1 className="mb-5 text-xl text-blue-700 font-bold">{2022}</h1>
        <p className="mb-5 text-lg">In circulation: {circulatingfee}</p>
        <p className="mb-5 text-lg">Reserve: {reservefee} ₮</p>
        <a className="mb-5 border border-blue-700 hover:shadow-xl hover:text-white hover:bg-blue-500 p-1 rounded-lg transition duration-200 ease-in" href={file} target="_blank" rel="noopener noreferrer" >See Reserve proof</a>
    </div>
  )
}
