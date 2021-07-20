import React from 'react'
import Avatar from './Avatar'
import Descripcion from './Descripcion'
import Titulo from './Titulo'
import Popularidad from './Popularidad'

const Pelicula = ({pelicula}) => {
    return (
        <>
        <Avatar urlImagen={pelicula.urlImagen}/>
        <div>
            <Titulo titulo={pelicula.titulo} />  
            <Descripcion texto={pelicula.texto} />
            <Popularidad popularidad={pelicula.popularidad} />
        </div>
        </>
    )
}

export default Pelicula