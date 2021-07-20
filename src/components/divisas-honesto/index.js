import React, {useEffect} from 'react';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=63d197ca21d6564a442a'

function Conversor() {


    // useEffect(() => {
    //     fetch(BASE_URL)
    //     .then(res => res.json())
    //     .then(date => console.log(date))
    // },[])
      return (
          <>
          <CurrencyRow/>
          <h1>Currency</h1>
          </>
      )
}
export default Conversor;