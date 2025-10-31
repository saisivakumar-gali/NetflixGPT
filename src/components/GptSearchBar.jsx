import React from 'react'
import { useSelector } from 'react-redux'
import lang from "../utils/langConstants"

const GptSearchBar = () => {
  const langKey=useSelector(store=>store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' >
            <input className='p-3 m-3 col-span-9 bg-white text-black border border-gray-100' type="text" placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='col-span-3 px-4 py-2 m-3 bg-red-700 text-white rounded-lg'>{lang[langKey].search}</button>

        </form>
    </div>
  )
}

export default GptSearchBar