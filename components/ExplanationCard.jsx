import React from 'react'

export default function ExplanationCard(props) {
  return (
    <div className="p-10 bg-white">
      <i className={`${props.icon} text-6xl text-blue-500`} />
      <p className="text-xl mt-5">{props.paragraph}</p>
    </div>
  )
}
