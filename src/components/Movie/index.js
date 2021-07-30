import React from 'react'

const Movie = ({titulo, languague, descripcion,popularidad,img,title}) => {
    return (
        <div className =" my-4 bg-gray-400">
         <h1 className="font-bold">Titulo:{titulo}</h1>
         <h2 className="font-bold">Lenguaje original:{languague}</h2>
         <p><b>Descripcion:</b>{descripcion}</p>
         <p><b>Popularidad:</b>{popularidad}</p>
         <h3 className="font-bold">Portada</h3>
         <img src={"https://image.tmdb.org/t/p/w500"+[img]}></img>
        </div>
    )
}

export default Movie