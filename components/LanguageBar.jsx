import React, {useState} from 'react'

export default function LanguageBar() {
    const [language, setLanguage] = useState(false)
  return (
    <div className="bg-black border-b">
        <div className="container flex justify-end px-4 lg:px-0 items-center mx-auto">
        <button className="text-white" onClick={()=>setLanguage(!language)}>{language ? 'EN' : 'MN'}</button>
        </div>
    </div>
  )
}
