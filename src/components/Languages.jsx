import React from 'react'
import LanguageCard from './LanguageCard'

const Languages = ( { languages }) => {
    const languagesList = languages.map(language => <LanguageCard key={language.id} language={language}/>)

  return (
    <div>
        {languagesList}
    </div>
  )
}

export default Languages