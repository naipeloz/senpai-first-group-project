import React, { useEffect, useState } from 'react';
import { getStaffTeam } from '../api/example';
import Team from '../components/Team';

export const FetchExample = () => {
  const [matches, setMatches] = useState([]); 
  useEffect(() => {
    getStaffTeam()
      .then((response)=> {
        setMatches(response);
        console.log(response)
      })
      .catch();
  }, []);
  return (
    <div className="container mx-auto">
      {matches?.map(item => 
        <Team
          key={item.team_key}
          name={item.team_name}
          badge={item.team_badge}
          coaches={item.coaches}
          players={item.players}
        />
      )}
    </div>
  )
}

