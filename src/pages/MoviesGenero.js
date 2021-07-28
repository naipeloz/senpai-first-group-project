import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Movie from '../components/Movie';
import {getPopularMovie, getGeneros} from '../api/movies';


const MoviesPageGenero = () => {
  const [generos, setGenero] = useState([]);
  const [selectedGenero, setSelectedGenero] = useState(28);
  const [movies, setMovies] = useState([]);  
  useEffect (() => {
    //TRAIGO TODAS LAS LATEST MOVIE
    
    getPopularMovie()
        .then((response)=>{            
            setMovies(response.results);
        })
        .catch((error)=>{
            console.log('error:', error);
        })
    //TRAIGO GENEROS
    getGeneros()
      .then((response)=> {
        // console.log('response',response);
        setGenero(response.genres);
      })
      .catch((error) => {
        console.log('error:', error)
      });  

  },[]);

  //CONTROLO EL VALOR DEL SELECTED SELECCIONADO  
  const changeGenero = (e) =>{        
        setSelectedGenero(parseInt(e.target.value));
  }

  const renderMovies = () =>{              
      return movies.map(movie => {
        if(movie.genre_ids.indexOf(selectedGenero)!== -1){
            console.log(movie.original_title)
            return(
                <Movie 
                key={movie.id}
                titulo={movie.original_title}
                languague={movie.original_language}
                descripcion={movie.overview}
                popularidad={movie.popularity}
                data={movie}
                img={movie.backdrop_path}
                />                
            )     
        }          
      })
  }

  return(
    <div>

     <h1 className="font-bold p-1 text-5xl">Peliculas por genero</h1>
      <div className="buscador flex">
          <div className="m-4">
              <label>Categorias</label>              
              <select id="generoMovie" value={selectedGenero} name="generoMovie" className='bg-white text-black p-1 m-1' onChange={(e) => changeGenero(e)}>
                  {generos.map((genero)=>(                  
                       <option key={genero.id} value={genero.id}>{genero.name}</option>
                  ))}                                    
              </select>
          </div>          
      </div>   
      <div className="w-full flex p-4">
            {renderMovies()}        
      </div>

    </div>
  )
}



export default MoviesPageGenero