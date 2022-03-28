import React from 'react'

export default function Cards({year, circulatingfee, reservefee}) {
  return (
    <div className="bg-black p-10">
        <h1 className="mb-10 text-lg text-red-800">{year}</h1>
        <p className="mb-10">In circulation: {circulatingfee}</p>
        <p className="mb-10">Reserve: {reservefee} ₮</p>
        <button className="mb-10 hover:text-red-800 transition duration-200 ease-in">See Reserve proof</button>
    </div>
  )
}
