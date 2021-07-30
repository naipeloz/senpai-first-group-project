import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Movie from '../components/Movie';
import {getTrendingMovie} from '../api/movies';

const TrendingPage = () => {
  const [matches, setMatches] = useState([]); 
  useEffect(() => {
    getTrendingMovie()
      .then((response)=> {
        setMatches(response.results);
        console.log(response)
      })
      .catch();
  }, []);

return (
    <div className="container mx-auto">
      {matches?.map(item => 
        <Movie
          key={item.id}
          titulo={item.title}
          descripcion={item.overview}
          img={item.backdrop_path}
        />
      )}
    </div>
  )
}

export default TrendingPage;