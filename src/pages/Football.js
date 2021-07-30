import React, { useEffect, useState } from 'react';
import { getTopScorers } from '../api/football';
import Player from '../components/Scorers';

const ScorersPage = () => {
    const [Scorers, setScorers] = useState([]);
    useEffect(() => {
        getTopScorers()
        .then((response) => {
            if(response.error){
                alert("No se pudo consultar")
            } else {
                const results = response;
                setScorers(results)
            }  
        });
    }, []);


    return (
        <div className="container mx-auto">
            {Scorers?.map(item =>
            <Player
                player={item.player_name}
                goals={item.goals}
            />
            )

            }
        </div>
    )

}

export default ScorersPage;