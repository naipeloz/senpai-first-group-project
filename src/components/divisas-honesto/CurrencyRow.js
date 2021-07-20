import React from 'react'

export default function CurrencyRow() {
  
  return (
    <div className="w-full  flex justify-center ">
        <h1 className="mx-4">Conversor </h1>
     <input placeholder="Valor 1"></input>
         <h1 className="mx-4">=</h1>
     <input placeholder="Valor 2" ></input>
    </div>
  )
}


{/* <input type="number" className="input" value={amount} onChange={onChangeAmount} />
<select value={selectedCurrency} onChange={onChangeCurrency}>
  {currencyOptions.map(option => (
    <option key={option} value={option}>{option}</option>
  ))}
</select> */}


// const {
//     currencyOptions,
//     selectedCurrency,
//     onChangeCurrency,
//     onChangeAmount,
//     amount
//   } = props