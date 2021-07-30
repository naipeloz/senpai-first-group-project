import React, { useEffect, useState } from 'react';
import { getTopScorers } from '../api/football';

const ScorersPage = () => {
    const [Scorers, setScorers] = useState([]);
    useEffect(() => {
        getTopScorers()
        .then((response) => {
            if(response.error){
                alert("No se pudo consultar")
            } else {
                console.log(response)
                const results = response;
                setScorers(results)
            }  
        });
    }, []);


    return (
        <h1>Hola</h1>
    )

}

export default ScorersPage;