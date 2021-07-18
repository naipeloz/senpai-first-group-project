import React, { useEffect, useState } from 'react';
import { getMontevideo } from '../api/mvd';
import { getCaracas } from '../api/caracas';
import { getMonterrey } from '../api/monterrey'
import { getElPaso } from '../api/elpaso';
import { getLosAngeles } from '../api/losangeles';
import Weather from '../components/Weather';

export const  FetchWeather = () => {
  const [climaMvd, setClimaMvd] = useState([]);
  const [climaCaracas, setClimaCaracas] = useState([]);  
  const [climaMonterrey, setClimaMonterrey] = useState([]);
  const [climaElPaso, setClimaElPaso] = useState([]);
  const [climaLosAngeles, setClimaLosAngeles] = useState([]);
  useEffect(() => {
    getMontevideo()
      .then((response)=> {
        setClimaMvd(response);
        console.log(response);
      })
      .catch();
      
  }, []);
 
  useEffect(() => {
    getCaracas()
      .then((response)=> {
        setClimaCaracas(response);
      })
      .catch();
      
  }, []);

  useEffect(() => {
    getMonterrey()
      .then((response)=> {
        setClimaMonterrey(response);
      })
      .catch();
      
  }, []);

  useEffect(() => {
    getElPaso()
      .then((response)=> {
        setClimaElPaso(response);
      })
      .catch();
      
  }, []);

  useEffect(() => {
    getLosAngeles()
      .then((response)=> {
        setClimaLosAngeles(response);
      })
      .catch();
      
  }, []);

  return (
    <div className="container mx-auto">
    {<Weather
        temperatura={climaMvd.current}
        ciudad={climaMvd.location}
    />}
      <div className="container mx-auto">
      {<Weather
          temperatura={climaCaracas.current}
          ciudad={climaCaracas.location}
      />
      }
    </div>
    <div className="container mx-auto">
      {<Weather
          temperatura={climaMonterrey.current}
          ciudad={climaMonterrey.location}
      />
      }
    </div>
    <div className="container mx-auto">
      {<Weather
          temperatura={climaElPaso.current}
          ciudad={climaElPaso.location}
      />
      }
    </div><div className="container mx-auto">
      {<Weather
          temperatura={climaLosAngeles.current}
          ciudad={climaLosAngeles.location}
      />
      }
    </div>
  </div>
   
  )
}
