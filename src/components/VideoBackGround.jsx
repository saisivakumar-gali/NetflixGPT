
import {  useSelector } from 'react-redux'
import useMovieTrailer from '../Hooks/useMovieTrailer'


const VideoBackGround = ({movieId}) => {
  const trailerVideo=useSelector(store=>store.movies?.TrailerVideo)
useMovieTrailer(movieId);

  return (
    <div className='w-full  overflow-x-hidden'>
      <iframe className='w-full aspect-video '  src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1&controls=0&loop=1&playlist="+trailerVideo?.key+"&showinfo=0" }title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen ></iframe>
    </div>
  )
}

export default VideoBackGround