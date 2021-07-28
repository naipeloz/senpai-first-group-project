import React, {useState, useEffect} from 'react';
import getMovie from '../api/movies'


const MoviesPage = () => {
    const [movies, setMovie] = useState([]);
    useEffect (() => {
        getMovie()
          .then((response)=> {
            setMovie(response.results);
            console.log(movies);
          })
          .catch((error) => {
            console.log('error:', error)
          });
      },[]);

    return(
        <div>

        </div>
    )
    
}

export default MoviesPage;