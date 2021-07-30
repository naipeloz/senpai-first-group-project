import React, {useEffect, useSate} from 'react';
import {getTopScorers} from '../api/football';

const ScorersPage = () => {

    const [scorers, setScorers] = useSate([]);

    useEffect(() => {
        getTopScorers()
        .then((response) => {
            if(response.error){
                alert("No se pudo consultar")
            } else {
                const results = response;
                setScorers(results)
            }  
        })
    }, []);


    return (
        <h1>Hola</h1>
    )

}

export default ScorersPage;