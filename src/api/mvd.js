const ciudades = ['Montevideo','Caracas','Monterrey','El Paso']  

const YOUR_ACCESS_KEY = '5196ecaa071e2fbd9f6d266d023e784d';
const BASE_URL = 'http://api.weatherstack.com/'


export const getMontevideo = () => 
    fetch(`${BASE_URL}current?access_key=${YOUR_ACCESS_KEY}&query='Montevideo'`)
    .then(response => response.json()) ;

 