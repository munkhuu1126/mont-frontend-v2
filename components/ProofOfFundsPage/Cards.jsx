import React from 'react'

export default function Cards({year, circulatingfee, reservefee, cardbg}) {
  return (
    <div className={`${cardbg} text-blue-700 p-10 rounded-lg`}>
        <h1 className="mb-5 text-xl text-blue-700 font-bold">{year}</h1>
        <p className="mb-5 text-lg">In circulation: {circulatingfee}</p>
        <p className="mb-5 text-lg">Reserve: {reservefee} ₮</p>
        <button className="mb-5 border border-blue-700 hover:scale-110 p-1 rounded-lg transition duration-200 ease-in">See Reserve proof</button>
    </div>
  )
}
