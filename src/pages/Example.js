import React, { useEffect, useState } from 'react';
import { getStaffTeam } from '../api/example';
import Team from '../components/Team';

export const  FetchExample = () => {
  const [matches, setMatches] = useState([]); 
  useEffect(() => {
    getStaffTeam()
      .then((response)=> {
        setMatches(response);
      })
      .catch();
      
  }, []);

  return (
    <div className="container mx-auto">
    {<Team
        temperatura={matches.current}
        ciudad={matches.location}
    />
    }
</div>
   
  )
}
