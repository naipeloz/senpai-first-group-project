import React, { useEffect, useState } from 'react';
import { getCurrency } from '../api/currency';
import Conver from '../components/Divisas/valueCurrency';

export  const Conversor = (props) => {
    const [valueDolar, setValuedolar] = useState([]);
    useEffect(() => {
        getCurrency()
          .then((response)=> {
            setValuedolar(response);
          })
          .catch();
        }, []);
        console.log(valueDolar,setValuedolar)
   return (
       <div>
     { <Conver 
      valor={valueDolar.source}
     ciudad={valueDolar.quotes}
         />
        
     }
     hola
     </div>
   )
    }

