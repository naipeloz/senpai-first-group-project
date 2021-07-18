import React, { useEffect, useState } from 'react';

const Weather = ({temperatura,ciudad,name}) => {
  return (
    <div className="bg-gray-300 m-4 p-2 rounded">

      <h1 className="text-lg font-bold">{}</h1>
      <h2>nombre ciudad:{ciudad?.name} </h2>
      <h3>Temperatura:{temperatura?.temperature} </h3>
      <h3>humedad:{temperatura?.humidity} </h3>
      <h1> <img src={temperatura?.weather_icons}></img> </h1>
      
      
    </div>
  )
}

export default Weather;