import React, { useEffect, useState } from 'react';

const Team = ({temperatura,ciudad,name}) => {
    const [nombre,cambionombre] = useState(""); 
    const [temp,cambiotemp] = useState(""); 
    const [icono,cambioicono] = useState("");
    const [humedad,cambiohumedad] = useState(""); 
  return (
    <div className="bg-gray-300 m-4 p-2 rounded">
      <h1 className="text-lg font-bold">{}</h1>
      <h2>nombre ciudad:{nombre} </h2>
      <h3>Temperatura:{temp} </h3>
      <h3>humedad:{temp} </h3>
      <h1> <img src={icono}></img> </h1>
      <button onClick={() => {cambionombre(ciudad.name); cambiotemp(temperatura.temperature); cambioicono(temperatura.weather_icons); cambiohumedad(temperatura.humidity)}}>Cargar</button>
      
      
    </div>
  )
}

export default Team;