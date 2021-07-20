import React, { useEffect, useState } from 'react';
import { getResults } from '../api/results';
import Results from '../components/Results';

export const FutResults = () => {
  const [matches, setMatches] = useState([]); 
  useEffect(() => {
    getResults()
      .then((response)=> {
       
        if(response.error){
          console.log(response) 
        } else{
          setMatches(response)
        }
        console.log(response)
      })
      .catch((error)=> {
        console.log(error)
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
        />
      )}
    </div>
  )
}

export default FutResults

