import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies)return;
    const randomIndex = Math.floor(Math.random() * movies.length);
  const mainMovie = movies[randomIndex];
    // console.log(mainMovie);
    const {original_title,overview,id}=mainMovie;
  return (
    <div  >
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieId={id}/>
    </div>
  )
}

export default MainContainer