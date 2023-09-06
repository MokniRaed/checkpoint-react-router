import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import { MoviesApi } from '../Data/MoviesApi';

function MovieDetails() {

    const {id} = useParams()
const movie = MoviesApi.find(movie=> movie.id === id)
console.log(movie);
  return (
<>
        <img text="First slide" src={movie.imgUrl}  alt='movie'/>
          <h3>{movie.title}</h3>
          <p>{movie.description}</p>
     
     </> )
}

export default MovieDetails