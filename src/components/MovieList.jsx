import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    // console.log(movies);
  return (
    movies && (
    <div className='px-4 '>
         <h1 className='text-3xl text-white py-4 font-semibold'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide '>
           
            <div className='flex '>
                {movies?.map(movie=><MovieCard key={movie.id} posterpath={movie.poster_path}/>)}
            </div>
        </div>
    </div>
  )
  )
}

export default MovieList