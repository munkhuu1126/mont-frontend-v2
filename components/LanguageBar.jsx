import React, {useEffect, useState} from 'react'
import i18next from 'i18next'


export default function LanguageBar() {
    const [language, setLanguage] = useState(false)
    const changeLanguage = ()=>{
        let temp = !language
        setLanguage(temp)
        temp ? i18next.changeLanguage('mn') : i18next.changeLanguage('en')
    }


    
    useEffect(()=>{
        console.log(i18next.language);
    }, [language])
  return (
    <div className="bg-black border-b">
        <div className="container flex justify-end px-4 lg:px-0 items-center mx-auto">
        <button className="text-white" onClick={()=>changeLanguage()}>{language ? 'EN' : 'MN'}</button>
        </div>
    </div>
  )
}
