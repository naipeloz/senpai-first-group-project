import React, { useEffect, useState } from 'react';
import { getCurrency } from '../api/currency';
import Conver from '../components/Divisas/valueCurrency';

export  const Conversor = (valor) => {
    const [valueDolar, setValuedolar] = useState([]);
    useEffect(() => {
        getCurrency()
          .then((response)=> {
            setValuedolar(response.quotes);
          })
          .catch();
        }, []);
        console.log(valueDolar)
   return (
       <div>
         { <Conver  valor={valueDolar.USDUYU}/>}
         { <Conver  valor={valueDolar.USDEUR}/>}
         { <Conver  valor={valueDolar.USDARS}/>}
         { <Conver  valor={valueDolar.USDUSD}/>}
      </div>  
    )
  }

