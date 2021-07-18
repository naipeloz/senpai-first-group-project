import React, { useEffect, useState } from 'react';
import { getStaffTeam } from '../api/example';
import { getlondres } from '../api/londres';
import Team from '../components/Team';

export const  FetchExample = () => {
  const [matches, setMatches] = useState([]);
  const [respuesta, setrespuesta] = useState([]);  
  useEffect(() => {
    getStaffTeam()
      .then((response)=> {
        setMatches(response);
        console.log(response);
      })
      .catch();
      
  }, []);
 
  useEffect(() => {
    getlondres()
      .then((response)=> {
        setrespuesta(response);
      })
      .catch();
      
  }, []);


  return (
    <div className="container mx-auto">
    {<Team
        temperatura={matches.current}
        ciudad={matches.location}
    />}
      <div className="container mx-auto">
      {<Team
          temperatura={respuesta.current}
          ciudad={respuesta.location}
      />
      }
    </div>
  </div>
   
  )
}
