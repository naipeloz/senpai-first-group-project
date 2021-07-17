import React from 'react';

const Team = ({name, coaches, players}) => {
  return (
    <div className="bg-gray-300 m-4 p-2 rounded">
      <h1 className="text-lg font-bold">{name}</h1>
      <h2>Entrenador: {coaches?.map(coach => coach.coach_name)}</h2>
      <ul>
        {players?.map(player => 
          <li key={player.player_key}>
            {<span className="font-bold">{player.player_type}</span>}
            {` #${player.player_number} ${player.player_name}`}
          </li>
        )}
      </ul>
    </div>
  )
}

export default Team;