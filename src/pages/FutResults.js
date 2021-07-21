import React, { useEffect, useState } from 'react';
import { getResults } from '../api/results';
import Results from '../components/Results';

export const FutResults = () => {
  const [matches, setMatches] = useState([]); 
  useEffect(() => {
    getResults()
      .then((response)=> {
        if(response.error){
          alert("No se pudo consultar")
        } else {
          setMatches(response)
        }
      })
      .catch((error)=> {
        alert("No se pudo consultar la API")
      });
    
  }, []);
  return (
    <div className="container mx-auto">
      {matches?.map(item => 
        <Results
          country={item.country_name}
          localTeamScore={item.match_hometeam_score}
          awayTeamScore={item.match_awayteam_score}
          localTeamName={item.match_hometeam_name}
          awayTeamName={item.match_awayteam_name}
          localTeamBadge={item.team_home_badge}
          awayTeamBadge={item.team_away_badge}
        />
      )}
    </div>
  )
}

export default FutResults

