import React, {useEffect} from 'react';

const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=9729261c6fd1636332fb6d9b066c2110'

function Conversor() {

    useEffect(() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(date => console.log(date))
    },[])
    

    
      return (
          <>
          <h1>Currency</h1>
          </>
      )
}

export default Conversor;