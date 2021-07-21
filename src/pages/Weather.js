import React, { useEffect, useState } from 'react';
import getWeather from '../api/weather';
import Weather from '../components/Weather';

export const  FetchWeather = (props) => {
  const [climaMvd, setClimaMvd] = useState([]);
  const [climaCaracas, setClimaCaracas] = useState([]);  
  const [climaMonterrey, setClimaMonterrey] = useState([]);
  const [climaElPaso, setClimaElPaso] = useState([]);
  const [climaLosAngeles, setClimaLosAngeles] = useState([]);
  useEffect(() => {
    getWeather('Montevideo')
      .then((response)=> {
        setClimaMvd(response);
      })
      .catch();
  }, []);
 
  useEffect(() => {
    getWeather('Caracas')
      .then((response)=> {
        setClimaCaracas(response);
      })
      .catch();
      
  }, []);

  useEffect(() => {
    getWeather('Monterrey')
      .then((response)=> {
        setClimaMonterrey(response);
      })
      .catch();
      
  }, []);

  useEffect(() => {
    getWeather('El Paso, Texas')
      .then((response)=> {
        setClimaElPaso(response);
      })
      .catch();
      
  }, []);

  useEffect(() => {
    getWeather('Los Angeles')
      .then((response)=> {
        setClimaLosAngeles(response);
      })
      .catch();
      
  }, []);

  return (
    <div className="flex flex-nowrap justify-around ">
     <div className={`${!props.isDarkMode ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'}`}>
      {<Weather
        temperatura={climaMvd.current}
        ciudad={climaMvd.location}
      />
      }
     </div>
     <div className={`${!props.isDarkMode ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'}`}>
      {<Weather
          temperatura={climaCaracas.current}
          ciudad={climaCaracas.location}
      />
      }
     </div>
     <div className={`${!props.isDarkMode ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'}`}>
      {<Weather
          temperatura={climaMonterrey.current}
          ciudad={climaMonterrey.location}
      />
      }
     </div>
     <div className={`${!props.isDarkMode ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'}`}>
      {<Weather
          temperatura={climaElPaso.current}
          ciudad={climaElPaso.location}
      />
      }
     </div>
     <div className={`${!props.isDarkMode ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'}`}>
      {<Weather
          temperatura={climaLosAngeles.current}
          ciudad={climaLosAngeles.location}
      />
      }
    </div>
  </div>
  )
}
