import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='py-6 w-1/4 text-sm font-semibold'>{overview}</p>
      <div>
        <button className='bg-white rounded-lg text-black text-lg p-4 px-10 font-bold  hover:bg-white/80'><i className="ri-play-large-fill text-black"></i> Play</button>

        
        <button className='bg-gray-500/50 rounded-lg text-white text-lg p-4 px-8 font-bold ml-2 hover:bg-white/40 '><i className="ri-information-line text-xl"></i> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle