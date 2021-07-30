import React from 'react';

const Scorer = ({
    player,
    goals,
}) => {
return(
    <div className = "bg-gray-400 m-4 p-2 h-15 w-40">
        <div className = "mx-auto text-center">
            {player}
        </div>
        <div className = "mx-auto text-center">
            Goles : {goals}
        </div>
    

    </div>
)

}

export default Scorer;