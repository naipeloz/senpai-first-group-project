import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Movie from '../components/Movie';
import getMovie from '../api/movies';


const MoviesPage = () => {
  const [movie, setMovie] = useState([]);
  const movieId = useParams();

  useEffect (() => {
    getMovie(movieId.id)
      .then((response)=> {
        setMovie(response);
        console.log(movie);
      })
      .catch((error) => {
        console.log('error:', error)
      });
  },[]);

  return(
    <div>
      {<Movie
        titulo={movie.original_title}
        languague={movie.original_language}
        descripcion={movie.overview}
        popularidad={movie.popularity}
        data={movie}
        img={movie.backdrop_path}
      />
      }
    </div>
  )
}



export default MoviesPage