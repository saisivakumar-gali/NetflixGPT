import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  

const nowPlaying = useSelector(store => store.movies?.nowPlayingMovies);
const popular = useSelector(store => store.movies?.PopularMovies);
const topRated=useSelector(store=>store.movies?.TopRatedMovies);
const upcoming=useSelector(store=>store.movies?.upcomingMovies);

  return (
    <div className='bg-black'>
      <div className='-mt-50 pl-10 z-20 relative'>
        <MovieList title={"Now Playing"} movies={nowPlaying}/>
      <MovieList title={"Popular"} movies={popular}/>
      <MovieList title={"Top Rated"} movies={topRated}/>
      <MovieList title={"Upcoming"} movies={upcoming}/>
      </div>
    </div>
  )
}

export default SecondaryContainer