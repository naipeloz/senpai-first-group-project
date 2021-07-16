
function traerDivisas() {
    const divisas = document.getElementById('cbox2');
    cosole.log(dnivisas);
    const valueDivisas = divisas.value;
    console.log(valueDivisas);
    
    if (valueDivisas == 1 ) {
       const valueDivisas = 42;
        console.log(valueDivisas)
    } else if (valueDivisas == 2) {
        const valueDivisas = 45;
        console.log(valueDivisas)
    } else if (valueDivisas == 3) {
         const valueDivisas = 9;
    } else {
        console.log('no tengo ni idea de lo que pasa')
    }
   
 return valueDivisas;
}

function traerCantidadPlata() {
    const conversionInput = document.getElementById('cantidadConvertir');
    const conversionValue = conversionInput.value;
    console.log(conversionValue);
    return conversionValue;
}

function hacerConvercion() {
    traerDivisas()
    traerCantidadPlata()
}

