import React, {useState, useEffect} from 'react';
import Movie from './Movie'
import getMovie from './api_movies';


const FetchMovie = ({id}) => {
    const [movie, setMovie] = useState([]);
    console.log(FetchMovie);

useEffect (() => {
    getMovie(id)
    .then((response)=> {
        setMovie(response);
        console.log(response);
    })
    .catch();
},[]);

return(
    <div>
        {<Movie
        titulo={movie.original_title}
        descripcion={movie.overview}
        popularidad={movie.popularity}
        img={movie.backdrop_path}
        />
    }
    </div>
)
}



export default FetchMovie