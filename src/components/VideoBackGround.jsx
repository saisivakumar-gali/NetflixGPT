
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'


const VideoBackGround = ({movieId}) => {
  const trailerVideo=useSelector(store=>store.movies?.TrailerVideo)
useMovieTrailer(movieId);

  return (
    <div className='w-screen h-screen absolute left-0 top-0 -z-10 '>
      <iframe className='w-screen aspect-video overflow-hidden'  src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&controls=0&loop=1&showinfo=0" }title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
    </div>
  )
}

export default VideoBackGround