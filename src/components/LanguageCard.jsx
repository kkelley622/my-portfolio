import React from 'react'

const LanguageCard = ({ language }) => {
    console.log(language)
  return (
    <div>
        <h1>{language.name}</h1>
        <img src={language.logo}/>
    </div>
  )
}

export default LanguageCard