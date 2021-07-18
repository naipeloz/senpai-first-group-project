const YOUR_ACCESS_KEY = 'bd4c948f6058e4f497cdc3d4a72b9e9a';
const BASE_URL = 'http://api.weatherstack.com/'


export const getCaracas = () => 
    fetch(`${BASE_URL}current?access_key=${YOUR_ACCESS_KEY}&query='Caracas'`)
    .then(response => response.json()) ;
