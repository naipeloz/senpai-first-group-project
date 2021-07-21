import React, { useEffect, useState } from 'react';

const Weather = ({temperatura,ciudad,name}) => {
  return (
    <div className="m-4 p-2 rounded w-60 text-center">

      <h1 className="text-lg font-bold">{}</h1>
      <h2>Nombre ciudad:{ciudad?.name} </h2>
      <h3>Temperatura:{temperatura?.temperature} </h3>
      <h3>humedad:{temperatura?.humidity} </h3>
      <div className="flex justify-center"> <img src={temperatura?.weather_icons}></img> </div>
      
      
    </div>
  )
}

export default Weather;