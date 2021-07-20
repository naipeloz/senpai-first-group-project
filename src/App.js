import React from 'react';
import Pelicula from './components/Peliculas/Pelicula';
import Avatar from './components/Peliculas/Avatar';
import Titulo from './components/Peliculas/Titulo';
import Descripcion from './components/Peliculas/Descripcion';
import Popularidad from './components/Peliculas/Popularidad';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  const pelicula = {
    titulo:'Goodfellas',
    urlImagen:'https://i.ytimg.com/vi/pEtMR75tVWg/hqdefault.jpg',
    texto:'Lorem ipsum dolor sit amet consectetur.',
    popularidad:'4.5/5',
  }

  return (
    <Router>
      <div className="pl-8">
        <div className="p-4">
          <Link className="mr-4 font-bold" to="/">
            Home
          </Link>
          <Link className="mr-4 font-bold" to="/img">
            Portada
          </Link>
          <Link className="font-bold" to="/text">
            Descripcion
          </Link>
        </div>
      <Switch>
          <Route path="/" exact> 
            <h1 className="p-4 text-3xl font-bold">Pelicula</h1>
            <hr />
            <Pelicula  pelicula={pelicula}/>
          </Route>
          <Route path="/img"> 
            <h1 className="p-4 text-3xl font-bold">Portada</h1>
            <hr />
            <Avatar urlImagen={pelicula.urlImagen} />
          </Route>
          <Route path="/text"> 
            <h1 className="p-4 text-3xl font-bold">Descripcion</h1>
            <hr />
            <Titulo titulo={pelicula.titulo} />  
            <Descripcion texto={pelicula.texto} />
            <Popularidad popularidad={pelicula.popularidad} />
          </Route>
        </Switch>  
      </div>
    </Router>
  );
}

export default App;