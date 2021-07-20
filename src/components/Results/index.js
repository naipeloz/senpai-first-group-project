import React from 'react';

const Results = ({country, localTeamScore, awayTeamScore,localTeamName,awayTeamName }) => {
  return (
    <div className="bg-gray-300 m-4 p-2 rounded">
      <h1 className="text-lg font-bold">{country}</h1><br></br>

      <div className="flex flex-row place-content-between ">
        <h1 className="text-lg font-bold">{localTeamName}</h1>
        <h1 className="text-lg font-bold">{localTeamScore}</h1>
        <p>──────</p>
        <h1 className="text-lg font-bold">{awayTeamScore}</h1>
        <h1 className="text-lg font-bold">{awayTeamName}</h1>
      </div>
      
      
    </div>
  )
}

export default Results;

